# Browser Task Handoff — Netlify + Lemon Squeezy Setup

**Purpose:** Set up hosting and payment for the 10K Maker "TikTok Shop Appeal Rescue" product. This is written to be pasted into a browser-capable Claude session (e.g. Claude in Chrome) that can log into websites — the coding session (Claude Code) that wrote this cannot browse or log into anything itself.

**Context for whoever runs this:** The product is a static website (landing page + a self-serve appeal-letter generator tool) already built and pushed to GitHub at `nickolaskoros-dev/10K-Maker`, on the `main` branch, inside a `site/` folder (contains `index.html` and `generator.html`). Nothing needs to be coded — this is pure account setup and clicking through two dashboards.

---

## Part 1 — Deploy the site on Netlify (free)

1. Go to https://app.netlify.com
2. Sign up using **"Sign up with GitHub"** (no new password needed — uses the existing GitHub login).
3. Click **Add new site → Import an existing project**.
4. Choose **GitHub**, authorize Netlify to access repos if prompted, then select the **`10K-Maker`** repository (owner: `nickolaskoros-dev`).
5. In the deploy settings:
   - **Publish directory:** `site`
   - **Build command:** leave blank (no build step — plain HTML/CSS/JS)
6. Click **Deploy site**. Netlify assigns a random URL like `glowing-narwhal-4821.netlify.app`.
7. Go to **Site configuration → Change site name**, and rename it to something clean, e.g. `tiktok-appeal-rescue` (if taken, try `tiktok-appeal-rescue-kit` or similar). Final URL will be `https://tiktok-appeal-rescue.netlify.app` (or whatever name is chosen).
8. **Verify it works:** visit that URL (should show the landing page) and `<that-url>/generator.html` (should show the appeal-builder form). Note both URLs down for Part 2 and for reporting back.

## Part 2 — Set up payment on Lemon Squeezy ($39, one-time)

Using Lemon Squeezy instead of Stripe deliberately — Stripe's new-account business verification can hold payment links in a pending state; Lemon Squeezy (built for solo digital-product sellers, acts as merchant-of-record) typically has less friction to go live.

1. Go to https://www.lemonsqueezy.com and sign up (email or Google).
2. Create a **Store** if prompted (any store name is fine, e.g. "10K Maker").
3. Go to **Products → New Product**.
   - Name: `TikTok Shop Appeal Rescue Kit`
   - Price: `$39.00`, one-time (not a subscription)
   - Description (optional): "Instant, personalized diagnosis and ready-to-submit appeal letter for a TikTok Shop suspension or violation."
4. Look for a **redirect/thank-you-page** setting (may be under the product's "Checkout" or "Receipt" settings) and set it to redirect to the Netlify generator URL from Part 1 (e.g. `https://tiktok-appeal-rescue.netlify.app/generator.html`) after a successful purchase. If the exact setting name differs from this description, look for anything referring to "redirect after purchase" or "custom thank you URL."
5. Publish/activate the product and copy the resulting **checkout/buy link** (looks like `https://[storename].lemonsqueezy.com/buy/[id]` or similar).
6. If Lemon Squeezy asks for identity/tax/payout details to activate the store: complete what's required to get the checkout link live and testable. If it blocks going live entirely pending review, note that clearly when reporting back rather than guessing at a workaround.

## Part 3 — Report back

Bring these back to the Claude Code session (the one that built the site) so it can wire everything together and push the final version:
1. The live Netlify site URL (e.g. `https://tiktok-appeal-rescue.netlify.app`)
2. The Lemon Squeezy checkout link
3. Whether the post-purchase redirect to `generator.html` was successfully configured, or if that setting couldn't be found/set
4. Any account verification holds or blockers hit along the way

---

## What NOT to do
- Don't add a custom domain — deliberately skipped for now (costs ~$10/year, deferred until after first real sales validate demand; see `DECISIONS.md`).
- Don't set up Stripe — deliberately switched away from it for this launch (see above).
- Don't write or edit any code — the site is already complete; this is account/dashboard setup only.
