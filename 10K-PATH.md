# The $10K Path — TikTok Shop Appeal Rescue

## Who pays, and why
TikTok Shop sellers whose shop or listings just got suspended/removed for a policy violation. They pay because: (1) the account is often their entire income (avg seller revenue ~$4,200/mo, 23% earn $5K+/mo — MARKET.md §2), (2) TikTok's own process is opaque and slow, (3) every day suspended is lost revenue, and (4) the only existing paid alternative (Amazon-style law firms) costs $750–$1,495 and isn't TikTok-specific.

## The offer (see PRODUCT.md for full spec)
**Single SKU: Appeal Rescue Kit — $39 one-time.** Seller fills a short form in `site/generator.html`; instantly (no wait, no human step) they receive: (a) a plain-English diagnosis of exactly which policy was violated and why, (b) a checklist of the specific evidence TikTok's appeal process requires for that violation type, (c) a customized, ready-to-submit appeal letter. (Originally launched at $149 with DIY/$39 and Priority/$249 tiers; simplified to one SKU, then repriced to $39 — see DECISIONS.md for both changes.)

## Where we find them / how we reach them
Reddit (r/TikTokShop and similar), TikTok Shop seller Facebook groups, and direct replies to sellers who *publicly post* "my shop got suspended/deactivated" (highest-intent, lowest-competition channel — reply with genuine help + a soft offer, not a cold pitch). See `MARKETING.md` for the actual post/DM copy.

## Why they choose us over alternatives
- ~20–40x cheaper than the law-firm alternative ($39 vs $750–$1,495).
- Instant (vs law firms' multi-day onboarding) and TikTok-Shop-specific (not a generalist Amazon shop bolting this on).
- Specific and actionable vs. free generic template packs (we diagnose *their* violation, not a one-size-fits-all letter).

## Revenue math

| | Price | Customers for $1K | Customers for $5K | Customers for $10K |
|---|---:|---:|---:|---:|
| Appeal Rescue Kit | $39 | 26 | 129 | **257** |

**Costs (per order):**
- Payment processing (Stripe, ~2.9%+$0.30): ~$1.43 on $39 → **net ~$37.57**
- Fulfillment cost: **$0** — `site/generator.html` is deterministic client-side logic, no AI API call, no human time.
- **Gross margin: ~96%.**

## ⚠️ Honest read: $39 makes the $10K/3–6-week target much less plausible, not more
Cutting price from $149 to $39 doesn't just lower revenue-per-sale — it **quadruples** the number of paying customers needed (68 → 257) inside the same 3–6 week window, using the *same* organic-outreach channel (Reddit/Facebook direct replies) that was already the identified bottleneck. Automation removed the fulfillment constraint, but it does nothing to increase how many suspended sellers you can find and convert per week — that's still capped by outreach volume, not fulfillment capacity. Recomputing the same traffic/conversion assumptions from before at the new price:

### Conservative case
- 25 high-intent replies/week × 8% convert = 2 customers/week × $39 = **$78/week** → ~$468 over 6 weeks. **~5% of target.**

### Base case
- 35 high-intent replies/week × 15% convert = ~5 customers/week × $39 = **~$195/week** → ~$1,170 in 6 weeks. **~12% of target.**

### Upside case
- 10+ customers/week sustained (word of mouth + short-form video) × $39 = **~$390/week** → ~$2,340 in 6 weeks. **~23% of target — still far short.**

**None of the three cases reach $10K in 3–6 weeks at $39 under current distribution assumptions.** Per the master prompt's kill criteria (§14: "the $10K path is implausible") and money-first decision rule (§41), this is exactly the kind of gap that should be surfaced now, not discovered in week 5. Getting to $10K at $39 needs one of:
1. **~43–51 sales/week sustained** (vs. the 2–10/week estimated above) — would require a much higher-volume channel than one-by-one community replies (e.g. paid ads, a viral video, or an affiliate/creator partner with real reach) — all of which cost money or take longer to arrange than organic outreach.
2. **Raise the price** once real conversion data comes in — if $39 converts dramatically better than $149 did (untested), a mid-point price might hit a better volume × price combination without needing 4x the customers.
3. **Accept a longer timeline** than 3–6 weeks at this price point, or treat $39 as a low-friction top-of-funnel offer with a paid upsell later (e.g., a human review/priority add-on) once volume is flowing.

This isn't a reason not to launch at $39 — it may still be the right call to maximize conversion rate and get real data fast — but the plan should not assume $39 hits $10K on schedule without one of the above.

## Weekly required trajectory (for a 5-week target, at $39)
| Week | Cumulative revenue needed | Customers needed (cumulative, @$39) |
|---|---:|---:|
| 1 | $500 (proof of concept — first sales) | 13 |
| 2 | $2,000 | 52 |
| 3 | $4,500 | 116 |
| 4 | $7,000 | 180 |
| 5 | $10,000 | 257 |

Compare actuals against this weekly, and change strategy (per master-prompt §32) the moment we fall materially behind — do not wait until week 5 to notice. Given the case analysis above, expect to fall behind this trajectory almost immediately unless outreach volume or conversion rate is far higher than the Week 1 estimates.

## Biggest risk
That cold, unbranded outreach in communities that may restrict self-promotion can't generate enough qualified conversations fast enough — this is a **distribution risk**, not a product/pain risk. It is the first bottleneck to test and, if confirmed, the first thing to fix (see METRICS.md).
