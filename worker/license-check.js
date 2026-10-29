// Cloudflare Worker: verifies a Lemon Squeezy license key server-side.
//
// Why this exists: Lemon Squeezy's license validate API doesn't reliably
// support being called directly from browser JavaScript (CORS isn't
// confirmed), so this worker sits in between — the browser calls this
// worker, the worker calls Lemon Squeezy, and the worker adds the CORS
// headers the browser needs. The validate endpoint itself needs no secret
// API key, so nothing sensitive is stored here.
//
// Deploy: see DEPLOY.md in this folder for the no-code walkthrough.

const ALLOWED_ORIGIN = 'https://usefultools-dev.github.io';

export default {
  async fetch(request) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ valid: false, error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    let licenseKey;
    try {
      const body = await request.json();
      licenseKey = (body.license_key || '').trim();
    } catch (e) {
      return new Response(JSON.stringify({ valid: false, error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!licenseKey) {
      return new Response(JSON.stringify({ valid: false, error: 'Missing license key' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    try {
      const form = new URLSearchParams();
      form.append('license_key', licenseKey);

      const lsResponse = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: form.toString(),
      });

      const data = await lsResponse.json();
      const status = data.license_key ? data.license_key.status : 'unknown';
      const valid = Boolean(data.valid) && status !== 'disabled' && status !== 'expired';

      return new Response(JSON.stringify({ valid, status }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (e) {
      return new Response(JSON.stringify({ valid: false, error: 'Could not reach Lemon Squeezy — try again shortly' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  },
};
