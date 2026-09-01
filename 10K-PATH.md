# The $10K Path — TikTok Shop Appeal Rescue

## Who pays, and why
TikTok Shop sellers whose shop or listings just got suspended/removed for a policy violation. They pay because: (1) the account is often their entire income (avg seller revenue ~$4,200/mo, 23% earn $5K+/mo — MARKET.md §2), (2) TikTok's own process is opaque and slow, (3) every day suspended is lost revenue, and (4) the only existing paid alternative (Amazon-style law firms) costs $750–$1,495 and isn't TikTok-specific.

## The offer (see PRODUCT.md for full spec)
- **Core: Appeal Rescue Kit — $149 one-time.** Seller fills a structured intake form; within 24–48h they receive: (a) a plain-English diagnosis of exactly which policy was violated and why, (b) a checklist of the specific evidence TikTok's appeal process requires for that violation type, (c) a customized, ready-to-submit appeal letter.
- **Downsell: DIY Toolkit — $39.** Generic (not personalized) version: the evidence checklists + letter templates for all common violation types, self-serve. Captures price-sensitive buyers who won't pay $149.
- **Upsell: Priority — +$100 (total $249).** 4-hour turnaround instead of 24–48h, plus one round of revision.

## Where we find them / how we reach them
Reddit (r/TikTokShop and similar), TikTok Shop seller Facebook groups, and direct replies to sellers who *publicly post* "my shop got suspended/deactivated" (highest-intent, lowest-competition channel — reply with genuine help + a soft offer, not a cold pitch). See `MARKETING.md` for the actual post/DM copy.

## Why they choose us over alternatives
- 5–10x cheaper than the law-firm alternative ($149 vs $750+).
- Faster (24–48h vs law firms' multi-day onboarding) and TikTok-Shop-specific (not a generalist Amazon shop bolting this on).
- Specific and actionable vs. free generic template packs (we diagnose *their* violation, not a one-size-fits-all letter).

## Revenue math

| | Price | Customers for $1K | Customers for $5K | Customers for $10K |
|---|---:|---:|---:|---:|
| Core kit | $149 | 7 | 34 | 68 |
| Blended (mix of $39 / $149 / $249, ~70% core) | ~$155 avg | 7 | 33 | 65 |

**Costs (per order, core kit):**
- Payment processing (Stripe, ~2.9%+$0.30): ~$4.60 on $149 → **net ~$144.40**
- AI-assist cost (if used for drafting, e.g. Claude API for structuring the letter): well under $0.50/order at normal usage
- **Gross margin: ~96%.** No servers, no subscriptions, no inventory.

**Traffic/conversion assumptions (Week 1–2, organic only, no ad spend):**
- ~30–50 relevant "my TikTok shop got suspended" posts/threads found per week across Reddit + Facebook groups (estimate from observed community activity in MARKET.md; to be confirmed by direct observation, not yet measured).
- Direct, helpful replies to those high-intent posts convert far better than cold posts — assume 10–20% of genuine replies lead to a paying customer when the reply is specific and useful before asking for money.

### Conservative case
- 25 high-intent replies/week × 8% convert = 2 customers/week × $150 avg = **$300/week** → ~$3,600 over 6 weeks. **Falls short of $10K** — signal to increase channel count, raise urgency messaging, or add limited paid promotion (requires approval to spend money).

### Base case
- 35 high-intent replies/week × 15% convert = ~5 customers/week × $155 avg = **~$775/week** → ~$4,650 in 6 weeks from organic alone. Still short of $10K on organic-only, direct-reply volume — **the realistic base case likely requires either a second channel (e.g. TikTok/YouTube short-form content demonstrating the diagnosis) or a higher-ticket "done-for-you full appeal + resubmission" tier once trust/testimonials exist.**

### Upside case
- Word of mouth inside seller communities (suspensions are a recurring, shared pain — successful reinstatements get shared/screenshotted) plus 1–2 short-form videos showing a real "before/after" diagnosis go semi-viral in the niche → 10+ customers/week sustained → **$10K reachable within 4–5 weeks.**

## Honest read
Evidence strongly supports the *pain* and *willingness-to-pay-in-principle* (Amazon comps). It does **not yet** prove that organic community outreach alone, at this price, reaches enough people fast enough to hit $10K in the conservative case — that's exactly what Week 1–2 field-tests (see below), not more research, will tell us. If the base case undershoots after 2 real weeks of outreach, the required strategy change is specified now, not discovered later:
1. Raise the core price once 3–5 testimonials exist (trust substitutes for brand).
2. Add a short-form video channel (TikTok/YouTube) showing real diagnoses — content marketing to the exact audience already on TikTok.
3. Consider the multi-marketplace expansion (Amazon/Etsy) only after TikTok Shop proves conversion, per DECISIONS.md.

## Weekly required trajectory (for a 5-week target)
| Week | Cumulative revenue needed | Customers needed (cumulative, @$150 avg) |
|---|---:|---:|
| 1 | $500 (proof of concept — first 3 sales) | 3 |
| 2 | $2,000 | 13 |
| 3 | $4,500 | 30 |
| 4 | $7,000 | 46 |
| 5 | $10,000 | 65 |

Compare actuals against this weekly, and change strategy (per master-prompt §32) the moment we fall materially behind — do not wait until week 5 to notice.

## Biggest risk
That cold, unbranded outreach in communities that may restrict self-promotion can't generate enough qualified conversations fast enough — this is a **distribution risk**, not a product/pain risk. It is the first bottleneck to test and, if confirmed, the first thing to fix (see METRICS.md).
