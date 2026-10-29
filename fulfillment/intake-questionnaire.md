# Customer Intake Questionnaire

**Superseded as a manual process by `generator.html` (2026-09-10, see DECISIONS.md)** — this question set is now the spec the generator's form fields are built from, not a form to send customers by email. Update here first, then mirror the change into `generator.html`.

Original manual-process note (kept for reference): use this exact question set (as a Google Form / Tally form, or copy-pasted into an email/DM). Every field feeds directly into the appeal letter and evidence checklist.

1. **Shop name / seller ID** (for your records only — never published)
2. **What exactly happened?** (Shop suspended / deactivated / specific listing removed / payout frozen / other — let them describe freely)
3. **What reason did TikTok give?** (Paste the exact violation notice text if they have it — this is the single most important field)
4. **When did this happen?** (Date)
5. **Has an appeal already been submitted?** If yes, how many attempts, and what was the response? (Remember: TikTok Shop typically allows only 2 appeal attempts — see `violation-playbooks.md`)
6. **What products/category do you sell?**
7. **Do you believe the violation is accurate, a mistake, or unclear?** (Their honest read matters for root-cause framing)
8. **What steps (if any) have you already taken to fix the issue?**
9. **Approximate monthly revenue from this shop** (for context/urgency — optional)
10. **Email address for delivery**
11. **Tier selected:** DIY Toolkit ($39) / Appeal Rescue Kit ($149) / Priority ($249)

## After intake: now automatic (was manual fulfillment steps)
`generator.html` does this instantly, client-side, per customer:
1. Matches the selected violation type against the `PLAYBOOKS` object (mirrors `violation-playbooks.md`) to pull its evidence checklist and common-mistake warning.
2. Computes a case-readiness score from which evidence checkboxes are checked plus whether the violation-text and steps-taken fields were filled in with real detail.
3. Assembles the letter from `appeal-letter-template.md`'s structure using the customer's own answers — no AI, no human draft, no per-order review step.
4. The customer copies the letter or uses Print → Save as PDF directly from the tool.
5. There's no order to log per customer (no backend) — track aggregate traffic/conversion in `METRICS.md` via whatever analytics are added later, not per-order.
