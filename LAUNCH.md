# Launch Checklist — Human Actions Required

These steps require your accounts/identity and can't be done by Claude directly. Everything else (copy, templates, landing page, research) is already built — see README.md for links.

## 1. Create Stripe Payment Links (~5 min)
1. Go to https://dashboard.stripe.com/payment-links and log in.
2. Click **+ New**.
3. Under "Product," click **Add a new product**. Name: `TikTok Shop Appeal Rescue Kit`. Price: `$149.00`, one-time. Click **Add product**, then **Create link**.
4. Copy the resulting URL (looks like `https://buy.stripe.com/xxxx`).
5. Repeat for two more products: `TikTok Shop Appeal DIY Toolkit` at `$39.00`, and `TikTok Shop Appeal Rescue — Priority` at `$249.00`.
6. Send the 3 links back to Claude and it'll wire them into the `Get started` buttons on `site/index.html`.

**If Stripe asks for business verification first:** the link may work in a pending/test state — usable once verification clears (often same day).

## 2. First outreach — Facebook (~15 min)
1. Search Facebook for `TikTok Shop Sellers`. Join 2–3 of the most active groups shown (e.g. "TikTok Shop Sellers Group," "TikTok Shop US-Seller"). If asked screening questions, answer honestly (e.g., "I help TikTok Shop sellers with account suspensions").
2. Once approved, use the group's internal search for `suspended` or `violation` to find recent seller posts.
3. Reply to 3–5 of the most recent/relevant ones with the direct-reply script in `MARKETING.md` (personalize the bracketed part to their specific situation).
4. **Do not** make a broad self-promotion post yet — check each group's rules/About tab first. Direct, helpful replies to people already asking for help are safe almost everywhere; unsolicited promo posts often aren't.

## 3. First outreach — Reddit (optional, parallel channel, ~15 min)
1. If you don't have a Reddit account, create one at reddit.com (takes 2 minutes, no verification needed for browsing/commenting).
2. Search `TikTok Shop suspended` and `TikTok Shop violation` in Reddit's search bar; check r/TikTokShop and any related subreddits that surface.
3. Reply to recent posts using the same direct-reply script, personalized per post.
4. New Reddit accounts sometimes have posting limits/shadow-review on some subreddits for the first few comments — if a reply doesn't appear publicly after a few minutes, that's the likely cause; let the account age a day with normal browsing first if so.

## 4. Report back
After each session, report: how many replies were sent, any responses/DMs, and whether groups allowed it. Log it in `METRICS.md`, diagnose the bottleneck (per the diagnostic loop there), and adjust the copy/channel/price if needed — that's the ongoing loop from here.

## What happens once Payment Links exist
Wire them into `site/index.html`, and (only if useful) look into free hosting for the page — GitHub Pages is available on this repo at no cost, needs one toggle in repo Settings → Pages.
