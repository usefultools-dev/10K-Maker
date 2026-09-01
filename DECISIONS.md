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

## Open items requiring the user (tracked, not blocking research/build)
Stripe is already set up. Facebook (personal account) is available for community outreach. See LAUNCH.md for the exact next physical steps.
