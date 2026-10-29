# Deploying the license-check worker — step by step

This is the one piece that needs your action: a free Cloudflare account to run `license-check.js`, which is what actually stops someone from unlocking the letter without paying (the previous version just checked a URL, which anyone could fake).

## 1. Enable License Keys on the Lemon Squeezy product
WHERE: Lemon Squeezy dashboard → your `TikTok Shop Appeal Rescue Kit` product → **Edit** → look for a **"License keys"** toggle/section.
WHAT TO DO: turn it on. This makes Lemon Squeezy automatically generate a unique license key for every purchase, emailed to the customer and shown on their receipt/thank-you page.

## 2. Create a free Cloudflare account
WHERE: https://dash.cloudflare.com/sign-up
WHAT TO DO: sign up with email (no credit card required for the free Workers tier).

## 3. Create the Worker
WHERE: In the Cloudflare dashboard, find **Workers & Pages** in the left sidebar → click **Create** → **Create Worker**.
WHAT TO TYPE: give it a name, e.g. `tiktok-appeal-license-check`. Click **Deploy** (it'll deploy a default "Hello World" worker first — that's fine, we'll replace the code next).

## 4. Replace the code
WHAT TO CLICK: Click **Edit code** (or "Configure" → the code editor).
WHAT TO DO: select all the existing placeholder code and delete it. Open `worker/license-check.js` from this repo, copy its entire contents, and paste it into the Cloudflare editor.
Click **Deploy** (or **Save and Deploy**) to publish it.

## 5. Get the Worker's URL
WHAT YOU'LL SEE: Cloudflare shows a URL like `https://tiktok-appeal-license-check.yourname.workers.dev`.

## 6. Send me that URL
I'll paste it in as `WORKER_URL` in `generator.html`, replacing the `'#'` placeholder, and push it.

## 7. Test it
Once live: go to the generator tool, generate a sample letter, and type any random text into the "Already paid?" license key field — it should say it's invalid (proves the check is really running against Lemon Squeezy, not just accepting anything). A real license key from an actual purchase should unlock it.

---

**If step 3/4 looks different:** Cloudflare's dashboard changes its layout periodically — if you don't see "Create Worker" or "Edit code" where described, tell me exactly what you do see and I'll adjust these steps.
