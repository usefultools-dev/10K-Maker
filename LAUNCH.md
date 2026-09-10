# Launch Checklist — Human Actions Required

These steps require your accounts/identity and can't be done by Claude directly. Everything else (copy, templates, landing page, research) is already built — see README.md for links.

## 1. Publish the site on GitHub Pages (~2 min) — now required
The product is a self-serve tool (`site/generator.html`), so it needs a real, public URL for Stripe to redirect customers to after payment.
1. On GitHub, go to this repo → **Settings** → **Pages**.
2. Under "Build and deployment," set Source to **Deploy from a branch**, Branch: `main`, Folder: `/site` (or `/root` if `/site` isn't offered — ask Claude to move the files if so).
3. Save. GitHub shows you the live URL (looks like `https://nickolaskoros-dev.github.io/10K-Maker/`) — it can take a minute to go live.
4. Visit the URL and confirm both the landing page and `generator.html` (e.g. `.../generator.html`) load and the tool works.

## 2. Create 1 Stripe Payment Link (~3 min)
1. Go to https://dashboard.stripe.com/payment-links and log in.
2. Click **+ New**.
3. Under "Product," click **Add a new product**. Name: `TikTok Shop Appeal Rescue Kit`. Price: `$149.00`, one-time. Click **Add product**.
4. Before clicking Create link, look for **"After payment"** settings and choose **"Redirect customers to your website"** — paste in your `generator.html` URL from step 1.
5. Click **Create link**, then copy the resulting Payment Link URL (looks like `https://buy.stripe.com/xxxx`).
6. Send that link back to Claude and it'll wire it into the `Get started` button on `site/index.html` (currently points directly at `generator.html` as a placeholder for testing).

(Simplified from 3 products to 1, and fulfillment automated via a self-serve generator instead of manual delivery — both on 2026-09-10, see `DECISIONS.md`.)

**If Stripe asks for business verification first:** the link may work in a pending/test state — usable once verification clears (often same day).

## 3. First outreach — Facebook (~15 min)
1. Search Facebook for `TikTok Shop Sellers`. Join 2–3 of the most active groups shown (e.g. "TikTok Shop Sellers Group," "TikTok Shop US-Seller"). If asked screening questions, answer honestly (e.g., "I help TikTok Shop sellers with account suspensions").
2. Once approved, use the group's internal search for `suspended` or `violation` to find recent seller posts.
3. Reply to 3–5 of the most recent/relevant ones with the direct-reply script in `MARKETING.md` (personalize the bracketed part to their specific situation).
4. **Do not** make a broad self-promotion post yet — check each group's rules/About tab first. Direct, helpful replies to people already asking for help are safe almost everywhere; unsolicited promo posts often aren't.

## 4. First outreach — Reddit (optional, parallel channel, ~15 min)
1. If you don't have a Reddit account, create one at reddit.com (takes 2 minutes, no verification needed for browsing/commenting).
2. Search `TikTok Shop suspended` and `TikTok Shop violation` in Reddit's search bar; check r/TikTokShop and any related subreddits that surface.
3. Reply to recent posts using the same direct-reply script, personalized per post.
4. New Reddit accounts sometimes have posting limits/shadow-review on some subreddits for the first few comments — if a reply doesn't appear publicly after a few minutes, that's the likely cause; let the account age a day with normal browsing first if so.

## 5. Report back
After each session, report: how many replies were sent, any responses/DMs, and whether groups allowed it. Log it in `METRICS.md`, diagnose the bottleneck (per the diagnostic loop there), and adjust the copy/channel/price if needed — that's the ongoing loop from here.

## What happens once the Payment Link exists
Send it to Claude — it'll swap `site/index.html`'s "Start my appeal" button from the current `generator.html` placeholder link to the real Stripe Payment Link, then commit and push.
