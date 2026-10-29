# Launch Checklist — Human Actions Required

These steps require your accounts/identity and can't be done by Claude directly. Everything else (copy, templates, landing page, research) is already built — see README.md for links.

## 1. Publish the site on GitHub Pages — done 2026-10-29
The product is a self-serve tool (`generator.html`), so it needed a real, public URL for payment to redirect customers to after purchase. Site files live at the repo root (moved from `/site` since GitHub Pages only offers root or `/docs` as folder options). Source: `main` branch, `/ (root)`. Live at `https://usefultools-dev.github.io/10K-Maker/` and `https://usefultools-dev.github.io/10K-Maker/generator.html` once GitHub finishes the first build (can take a minute).

## 2. Payment — see HANDOFF.md, not Stripe
Switched from Stripe to **Lemon Squeezy** on 2026-09-13 (less new-account verification friction for a solo seller — see `DECISIONS.md`). Full setup steps are in `HANDOFF.md`. Once you have the Lemon Squeezy checkout link, send it to Claude and it'll wire it into the `Get started` button on `index.html` (currently points directly at `generator.html` as a placeholder for testing) and set the redirect-after-purchase to the live GitHub Pages generator URL above.

## 3. First outreach — Reddit (primary channel, ~15–20 min, do this first)
Reddit beats Facebook for the time you have: no group-approval wait (Facebook groups can take hours-to-days, sometimes never), no per-group rule-reading before you can post, and better search. See `DECISIONS.md` (2026-09-11) for the full comparison.

1. If you don't have a Reddit account, create one at reddit.com (2 minutes, no verification needed for browsing/commenting).
2. Run these searches (use Reddit's own search bar, and try each with sort set to **"New"** so you catch posts before others reply):
   - `subreddit:TikTokShop suspended`
   - `subreddit:TikTokShop violation`
   - `subreddit:TikTokShop deactivated`
   - `subreddit:TikTokShop appeal`
   - `TikTok Shop suspended` (unrestricted to one subreddit — surfaces related communities you didn't know about)
   - `TikTok Shop account restricted`
   - Also try Google: `site:reddit.com "TikTok Shop" suspended`
3. Note any *other* subreddits that surface repeatedly (beyond r/TikTokShop) — those are additional communities to check each session.
4. Reply to 10–15 of the most recent/relevant posts with the direct-reply script in `MARKETING.md`, personalizing the bracketed part to their specific situation. Prioritize posts from the last 24–48h — older threads are less likely to get seen.
5. New Reddit accounts sometimes have posting limits/shadow-review on some subreddits for the first few comments — if a reply doesn't appear publicly after a few minutes, that's the likely cause; let the account age a day with normal browsing first if so.

## 4. Facebook (optional, week-2+ add-on — only if you already have an established personal profile)
Skip this in week 1. Closed TikTok-Shop-seller Facebook groups require join approval (hours to days, sometimes rejected outright for new/sparse profiles) and most ban self-promotion — both eat into limited time for uncertain payoff. Revisit only once Reddit has produced real signal (see METRICS.md diagnostic loop) and only if your Facebook profile is old/active enough that a screening question gets answered credibly.
1. Search Facebook for `TikTok Shop Sellers`. Join 2–3 of the most active groups shown. If asked screening questions, answer honestly (e.g., "I help TikTok Shop sellers with account suspensions").
2. Once approved, search the group internally for `suspended` or `violation`.
3. Reply to 3–5 relevant posts with the direct-reply script in `MARKETING.md`.
4. Check each group's rules/About tab before posting anything beyond a direct helpful reply — many ban self-promotion.

## 5. Report back
After each session, report: how many replies were sent, any responses/DMs, and whether groups allowed it. Log it in `METRICS.md`, diagnose the bottleneck (per the diagnostic loop there), and adjust the copy/channel/price if needed — that's the ongoing loop from here.

## What happens once the Payment Link exists
Send it to Claude — it'll swap `site/index.html`'s "Start my appeal" button from the current `generator.html` placeholder link to the real Stripe Payment Link, then commit and push.
