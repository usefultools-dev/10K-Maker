# Product Spec — TikTok Shop Appeal Rescue

## The smallest sellable thing
A **self-serve, fully automated document generator** (`generator.html`): the customer answers a structured form in their browser and gets a case-readiness score, evidence checklist, and a ready-to-submit appeal letter immediately — assembled by deterministic branching logic (no AI, no backend, no human fulfillment step). Zero recurring cost, zero per-order labor, instant delivery.

**Why not AI-generated per order:** an LLM call per order would also be "automated," but costs money per order and can hallucinate. The same domain knowledge already researched (`fulfillment/violation-playbooks.md`) is rules-based enough to encode directly as branching logic — more reliable, faster, and free to run. See `DECISIONS.md` (2026-09-10).

## The transformation (per master-prompt §8)
> "I don't understand what happened, and TikTok's boilerplate response tells me nothing."
→
> "I know exactly which policy I violated, what evidence I'm missing, and I have a specific, ready-to-submit appeal in hand."

## The offer (single SKU — see DECISIONS.md for why the 3-tier menu was cut)
**Appeal Rescue Kit — $39.** Seller completes a structured intake form (see `fulfillment/intake-questionnaire.md`). Instantly, they receive:
- The specific violation type, matched from what they describe (no need to already know TikTok's category names)
- The exact evidence checklist required for that violation type (per TikTok Seller Center's stated appeal requirements — root cause, corrective action, preventive measures)
- A customized, ready-to-submit appeal letter incorporating their specific facts

No DIY toolkit, no Priority rush tier at launch. One product, one price, one decision for a stressed customer to make. Add tiers later only in response to actual customer requests (e.g. "can you go faster?" → reactively price a rush add-on once fulfillment throughput on the base offer is proven).

## Fulfillment workflow (automated — no human step per order)
`generator.html` encodes the logic from `fulfillment/`:
- `intake-questionnaire.md` — the question set the generator's form is built from.
- `violation-playbooks.md` — per-violation-category evidence checklist, common cause, and common-mistake warning, encoded as the `PLAYBOOKS` object in the generator's JS.
- `appeal-letter-template.md` — the Root Cause → Immediate Actions → Preventive Measures structure the generator assembles the final letter from.

These `fulfillment/` docs remain the source-of-truth spec — update them first when the underlying policy/evidence guidance changes, then mirror the change into `generator.html`'s `PLAYBOOKS` object.

## What this product is NOT
- Not legal advice, and the landing page/delivery must say so explicitly (liability + honesty). This is operational/administrative help with a platform's internal appeal process, not legal representation.
- Not a guarantee of reinstatement — TikTok makes the final decision. The offer is "the best possible appeal, fast," not "guaranteed to work." This must be stated clearly to avoid overpromising and refund disputes.

## Delivery mechanics
- Payment: Stripe Payment Link, one-time $39, post-payment redirect set to `generator.html`.
- Intake + diagnosis + letter: all handled client-side, instantly, in `generator.html` — no form submission, no email round-trip.
- Delivery: the customer copies the letter or uses the browser's Print → Save as PDF from the tool itself.
- Hosting: static only (GitHub Pages, free) — no database or backend.
