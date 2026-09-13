# Decision Log

## 2026-09-01 — Rejected: building the previously-discussed TikTok Shop product outright
**Decision:** Do not assume the earlier TikTok Shop idea is the answer. Ran full opportunity discovery per the operating mandate instead.
**Evidence:** N/A (process decision).
**Outcome:** The discovery process independently arrived at a *related* but more specific and validated opportunity — see below. This is a coincidence of the research, not a foregone conclusion; #4 (TikTok Shop analytics SaaS, the closer analog to "build a TikTok Shop tool") was explicitly evaluated and rejected.

## 2026-09-01 — Selected: TikTok Shop Appeal Rescue (productized service)
**Decision:** Pursue "TikTok Shop Appeal Rescue" as the lead opportunity. See `OPPORTUNITIES.md` for scoring and `MARKET.md` for evidence.
**Evidence:** Amazon suspension-appeal services charge $750–$1,495 for the same job-to-be-done (proves willingness to pay); TikTok Shop has 500K+ US sellers and documented, vocal seller frustration with opaque appeals; no affordable TikTok-Shop-specific self-serve competitor was found; the product can be delivered manually/AI-assisted with no software build required to get the first sale.
**Confidence:** Strong evidence for pain and analogous willingness-to-pay. **Untested assumption:** that TikTok Shop sellers specifically (not Amazon sellers) will pay a similar amount from an unknown provider, and that community distribution channels will permit this kind of offer. Both are Week 1 validation items, not assumed.

## 2026-09-01 — Rejected: multi-marketplace scope at launch
**Decision:** Launch TikTok-Shop-only, not Amazon+Etsy+TikTok.
**Reason:** Amazon's suspension-appeal niche is already served by established, credentialed firms (ex-Amazon employees, attorneys) — harder to differentiate and win trust as a new, unknown provider. TikTok Shop's affordable segment is unserved. Narrower first offer = faster to a credible, specific pitch and first sale. Revisit expansion after first paying customers (per master-prompt principle: don't add scope before doubling down on what works).

## 2026-09-01 — Rejected: building a web app before the first sale
**Decision:** The first version of this product is a **manually-fulfilled, AI-assisted service** (intake questionnaire → drafted appeal + evidence checklist, delivered as a document), not a self-serve web tool.
**Reason:** Master-prompt principle: build the smallest sellable thing, validate demand before development investment. A web app requires accounts, hosting decisions, and dev time before a single dollar is provable. A manually-delivered service can be sold this week with a landing page and a payment link. If demand is proven, productize into a self-serve tool later (service → product, principle #36).

## 2026-09-01 — VS Code / development environment: not required (yet)
**Decision:** Do not set up VS Code or a local dev environment for this stage.
**Reason:** The MVP is a static landing page (already buildable directly in this repo) plus a manual fulfillment workflow (document templates). No local build tooling, package manager, or app framework is needed to sell the first unit. If self-serve software becomes justified after validation, this decision will be revisited explicitly and the reason stated before any environment setup.

## 2026-09-01 — Moved to a dedicated repository
**Decision:** This project was originally scaffolded inside "Plugin-1" (a different, unrelated reverb-plugin project's repo) by mistake, then migrated here to its own repository, "10K-Maker", per explicit instruction that every new project gets its own repo. Plugin-1's `main` branch was and remains untouched/reverb-only.

## Kill criteria for this opportunity (checked at each check-in)
Kill or pivot if, after real outreach (not before):
- Fewer than ~3 people respond with genuine interest after the first ~5–10 outreach touches (posts + DMs) in Week 1.
- Sellers say the price (even at $99) is a hard no across multiple conversations.
- Seller communities uniformly ban/remove this kind of offer and no DM/alternative channel works.
- We cannot produce a genuinely useful, non-generic appeal (i.e., it's indistinguishable from what ChatGPT already gives a seller for free) — if so, the differentiation claim was wrong and the product needs a real rework or should be killed.

## 2026-09-10 — Simplified from 3 pricing tiers to 1
**Decision:** Cut the DIY Toolkit ($39) and Priority rush tier ($249), launching with a single SKU: Appeal Rescue Kit, $149.
**Reason:** All three tiers were speculative — zero customers had validated any of them. The DIY tier revived the "generic template pack" concept the opportunity scorecard already scored at 5.5/10 and rejected as its own business (commodity, no differentiation); keeping it as a bolt-on risked cannibalizing $149 sales rather than adding incremental revenue. The Priority tier promised a 4-hour turnaround before a single normal-turnaround order had been fulfilled even once. Three SKUs also triples landing-page/Stripe/messaging complexity and adds decision friction for a customer who is, per the emotional-UX model (master-prompt §13), already in PANIC and needs CLARITY, not a pricing table.
**Outcome:** Landing page, PRODUCT.md, and the Stripe setup step in LAUNCH.md now reflect one product only. Tiers can be added back reactively if real customers ask for a cheaper or faster option — not before.

## 2026-09-10 — Automated fulfillment: deterministic generator, not AI, not manual
**Decision:** Replace manual/AI-assisted per-order fulfillment with `site/generator.html` — a client-side, rules-based document generator. No human drafts anything per order; no AI API call happens per order either.
**Reason:** The user correctly flagged that Claude cannot be the ongoing fulfillment operator (no ability to monitor an inbox or act unprompted between sessions), so "manual, AI-assisted" fulfillment meant the founder was the bottleneck on every single order. The first fix considered was an AI-API-driven auto-generator (Stripe payment → backend calls an LLM → emails the result) — genuinely automated, but costs money per order, requires hosting + an API key + billing, and can hallucinate. The user then pointed out automation doesn't require AI. Since `fulfillment/violation-playbooks.md` is already a rules table (violation type → cause → evidence → common mistake), it was encodable directly as branching logic: a static HTML/JS form that assembles the case-readiness score, evidence checklist, and letter deterministically, in the browser, with zero backend and zero recurring cost.
**Tradeoff accepted:** less flexible than an AI-drafted letter for a genuinely unusual case that falls outside the 5 anticipated violation categories' branches — traded for zero cost, zero hallucination risk, instant delivery, and no operator bottleneck.
**Outcome:** `site/index.html`'s CTA now points to `generator.html` (pending the Stripe Payment Link's post-payment redirect being wired to it once created). `fulfillment/*.md` remain the source-of-truth spec for the branching logic, not the fulfillment process itself.

## 2026-09-11 — Repriced from $149 to $39
**Decision:** Drop the price from $149 to $39 per explicit user instruction.
**Evidence/impact:** Recomputed in `10K-PATH.md`. Customers needed for $10K goes from 68 to 257 — a 3.8x increase — using the same organic Reddit/Facebook outreach channel that was already the identified bottleneck (no outreach had happened yet at any price). None of the conservative/base/upside cases reach $10K in 3–6 weeks at $39 under current distribution assumptions; the upside case reaches only ~23% of target. Automation (the generator tool) removes the fulfillment-cost constraint but does nothing to increase outreach volume, which remains the binding constraint.
**Status:** Implemented as instructed — not blocked on this analysis, since price/UX-conversion effects are untested and could offset some of the volume gap. Flagged per master-prompt kill-criteria §14 ("the $10K path is implausible") so the gap is visible now rather than discovered in week 5. Revisit price upward, or pursue a higher-volume/paid channel, if real outreach data confirms the conversion rate isn't high enough to close the gap.

## 2026-09-11 — Reddit prioritized over Facebook for outreach; automated bot outreach rejected
**Decision:** Do all Week 1 manual outreach on Reddit first; Facebook demoted to an optional week-2+ add-on, only for an already-established personal profile.
**Reason:** Structural platform comparison (not community-specific data — Reddit blocks automated fetches, so live subscriber/activity numbers need a 30-second manual check by the user, not assumed): Reddit has no join-approval step (post/comment immediately in most subreddits), better built-in search, and pseudonymous posting. Facebook's closed seller groups require join approval (hours to days, sometimes rejected outright for new/sparse profiles) and most explicitly ban self-promotion, requiring per-group rule-reading — high friction for a limited weekly time budget (15-20 min).
**Also decided:** Rejected building any form of automated/bot posting or DMing on Reddit, Facebook, or TikTok. Reddit's 2026 enforcement removes ~100,000 bot accounts/day and explicitly prohibits automated access in its User Agreement; Facebook has comparable bot detection. Automating outreach this way risks an account ban that would eliminate the channel entirely — not a workaround for this project. The only legitimate "automated" distribution channel on these platforms is paid ads (Reddit Ads: CPM $3-6, CPC $0.30-3.50, subreddit-level targeting, ~$500-1500 for a trustworthy test) — not pursued yet since the user does not want to spend on marketing.
**Outcome:** `LAUNCH.md` reordered (Reddit primary with exact search queries, Facebook secondary/optional); `MARKETING.md` channel priority updated to match.

## 2026-09-13 — Fixed: product didn't actually diagnose the violation
**Problem found (by the user, testing the live preview):** The landing page promises "We'll tell you exactly why your shop got suspended," but `generator.html` required the customer to already know and manually pick their violation type from a dropdown — the tool only organized pre-written guidance for whichever category they selected. It never actually looked at what they typed. The core differentiator claimed everywhere ("we diagnose your specific violation, not a one-size-fits-all letter") wasn't true of the actual build.
**Fix:** Added deterministic keyword matching (`DIAGNOSIS_KEYWORDS` in `generator.html`) that scans the customer's "what happened" description and pasted violation-notice text for category-specific terms (e.g. "counterfeit"/"trademark" → IP; "shipping"/"late"/"fulfillment" → shipping violation) and auto-selects the matching violation type, showing a visible "Diagnosis" callout explaining why. The dropdown stays editable in case the auto-detection is wrong. Still fully deterministic — no AI, no added cost — consistent with the earlier automation decision.
**Also reordered** the form: "what happened" and the violation notice text now come before the violation-type field, so the flow matches the promise (describe → we diagnose → here's your category) instead of asking the customer to self-diagnose first.

## Open items requiring the user (tracked, not blocking research/build)
Stripe is already set up. Facebook (personal account) is available for community outreach. See LAUNCH.md for the exact next physical steps.
