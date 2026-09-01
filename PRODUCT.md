# Product Spec — TikTok Shop Appeal Rescue

## The smallest sellable thing
Not an app. Not a dashboard. A **document delivered after a structured intake**, fulfilled by a human (you) using an AI-assisted drafting workflow to keep hands-on time under ~30–45 minutes per order. This can be sold *today* with a landing page and a payment link — no software build required to prove demand.

## The transformation (per master-prompt §8)
> "I don't understand what happened, and TikTok's boilerplate response tells me nothing."
→
> "I know exactly which policy I violated, what evidence I'm missing, and I have a specific, ready-to-submit appeal in hand."

## Offer tiers
1. **DIY Toolkit — $39.** Generic evidence-checklist + appeal-letter templates covering the most common TikTok Shop violation categories (IP/counterfeit, prohibited product, misleading listing, shipping/fulfillment violation, account verification). No personalization. Delivered instantly (digital download).
2. **Appeal Rescue Kit — $149 (core offer).** Seller completes a structured intake form (see `fulfillment/intake-questionnaire.md`). Within 24–48h, they receive:
   - A plain-English diagnosis of the specific violation and likely root cause
   - The exact evidence checklist required for that violation type (per TikTok Seller Center's stated appeal requirements — root cause, corrective action, preventive measures)
   - A customized, ready-to-submit appeal letter incorporating their specific facts
3. **Priority — $249.** Same as above, 4-hour turnaround + one revision round.

## Fulfillment workflow (manual, repeatable, documented for consistency)
See `fulfillment/` directory:
- `intake-questionnaire.md` — the exact questions asked of every customer (violation type, shop details, timeline, what's already been tried, TikTok's stated reason if given).
- `violation-playbooks.md` — per-violation-category guidance (what TikTok typically requires as evidence, common root causes, what NOT to say in an appeal) built from the research in `MARKET.md`.
- `appeal-letter-template.md` — the base structure (Root Cause → Immediate Actions → Preventive Measures, matching TikTok's own stated appeal framework) that gets customized per order.

This workflow is designed to be followed by a human with AI assistance (e.g., asking an AI assistant to draft the customized letter from the intake answers + the relevant playbook) — no custom software needed. It becomes the spec for a self-serve web tool later, if and only if demand is proven (service → product, principle #36).

## What this product is NOT
- Not legal advice, and the landing page/delivery must say so explicitly (liability + honesty). This is operational/administrative help with a platform's internal appeal process, not legal representation.
- Not a guarantee of reinstatement — TikTok makes the final decision. The offer is "the best possible appeal, fast," not "guaranteed to work." This must be stated clearly to avoid overpromising and refund disputes.

## Delivery mechanics
- Payment: Stripe Payment Link (already set up).
- Intake: a simple form (Google Form or Tally, free tier) collecting the questionnaire answers.
- Delivery: a Google Doc or PDF sent to the customer's email within the promised window.
- No hosting, database, or backend needed for this version.
