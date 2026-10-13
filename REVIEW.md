# Repo Review and v2 Changes (Oct 13, 2026)

## Verdict
The architecture was right: dual funnel, de-identification demo, honest caveats,
Glassnode tokens. Three things stood between v1 and an institutional brand a
partner can put their name behind: the copy was largely a competitor's, two
claims were stronger than the facts, and the page below the hero looked like a
SaaS template. v2 fixes all three. Nine items still need a decision or a check
against the Micro1 agreement before launch (bottom of this file).

## 1. The copy was Pewter's
v1 reused Pewter Data's hero eyebrow, H1 structure, trust strip, "valuation to
wire" line, education headline, de-identification heading and body, qualifier
line, several FAQ answers nearly word for word, and the partner H1 structure.
The research file labeled Pewter's lines "copy-deck ready," which is how they
got in. Any CPA who has seen Pewter's site would see a clone, and the brief's
own rule ("reference, do not copy") was being broken.

**Fixed:** `copy-deck.md` rewritten from scratch. Every reused line is listed
under "Retired lines." The research section is relabeled reference only.

## 2. Claims ran ahead of the facts
- **"Frontier AI labs license de-identified copies..."** The licensee is
  Micro1. Whether labs access the copy is listed in our own research under
  "Could not verify." v2 names `[BUYER]` as the licensee and keeps downstream
  use as a `[CONFIRM]` item.
- **"Most established firms qualify" at 20+ staff.** Micro1 publishes 30+
  employees. v2 removes "most qualify" and flags the threshold (brief, section 9).
- **Healthcare in the demand list.** Removed. Patient health records are now
  listed as not a fit.
- **Payout estimator with no payout model.** Replaced with an eligibility check
  beside Micro1's published tiers. No per-firm numbers we can't back.
- **Spirit Airlines $10M.** Held. Contested auction, our own buyer is a
  competing bidder in a privacy dispute, hearing Oct 14.
- **Partner split.** Micro1's public program pays flat bounties, not
  percentages. Copy keeps `[PARTNER %]` and a `[CONFIRM]` until the agreement
  says otherwise.

## 3. The look below the hero read as a template
Identical bordered cards in every section, stat cards, five dark bands, two
process sections, fade-ins on scroll. v2 (`design-direction.md`,
`reference/`) composes the page like an engagement letter: a sourced figures
ledger, a terms table, a document specimen with an original/licensed toggle,
a who-pays-whom diagram, and one five-step sequence. Cards only for real
objects. Three dark bands on Home. No scroll animation.

## 4. Additions for trust
- **Who pays whom, on the page.** Our fee, the partner's share, the owner's
  payment, in one diagram and a terms table, not buried in the FAQ.
- **The AI question, answered.** A statement band and an FAQ entry that say
  plainly what the records are used for, and that declining costs nothing.
  Owners are mostly skeptical of AI; avoiding the subject reads as evasive.
- **Partner disclosure built in.** Every introduction ships with a one-page
  disclosure the owner keeps. Many CPAs and attorneys have to disclose referral
  compensation; we make it routine. Partners can stand behind that.
- **"What we will never do with your clients"** on the Partners page.
- **Named leadership on About** is now a launch requirement.

## 5. Housekeeping
- Placeholders normalized: `[COMPANY NAME]`, `[BUYER]`, `[PARTNER %]`,
  `[PARTNER CAP]` (v1 mixed `[COMPANY]`, `[SPLIT]`, `[CAP]`).
- One name per action: "Request a valuation" everywhere on the company side.
- Em dashes removed from the copy deck (v1 had them in the proof points and
  the specimen).
- Stale "Pewter has no partner program" line in the research corrected.
- Launch prompt updated: new read order, `reference/` as the target, the
  "frontier AI labs" rule removed, retired-lines grep added to pre-flight.

## Before launch (decisions and checks)
1. Company name.
2. `[PARTNER %]` and `[PARTNER CAP]`, and confirmation that the Micro1
   agreement supports a percentage split.
3. Minimum headcount: 20 or 30.
4. Whether Micro1 can be named publicly (the $1B row identifies them either way).
5. Fee mechanics: the buyer's fee to us is not deducted from the owner's payment.
6. Whether any data sample leaves an owner's systems before signing.
7. Downstream access: who besides Micro1 may use the licensed copy.
8. Partner disclosure text, reviewed by counsel (AICPA, state bars).
9. Leadership names and bios for About; privacy policy; partner program terms.
