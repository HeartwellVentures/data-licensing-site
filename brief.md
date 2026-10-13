# Master Brief (v2, Oct 13, 2026)

## 1. Positioning
We are a deal firm. We arrange licenses for de-identified copies of established
companies' operational records, run each deal from first call to payment, and
pay the advisors who introduce owners to us. We are not a marketplace, not a
tech platform, not a fund.

One-line: **We help established US firms earn licensing income from records
they already keep, and we pay the advisors who make the introduction.**

The brand job: **an institution an owner can trust and a CPA can forward
without hesitation.** Every design and copy decision is tested against one
question: would a careful advisor be comfortable putting their name next to this?

## 2. Audiences (two, equal weight)
**A. Company owners.** US firms, 20+ staff, 3+ years of records. Skeptical,
busy, never heard of data licensing, and more likely than not wary of the AI
industry (Pew, Aug 2026: 52% of Americans more concerned than excited about AI;
71% expect it to take jobs). They care about: is this real money, what does it
cost me, do I lose my data, will my clients or staff be exposed, how much of my
time, and is this helping build something I don't like. Speak to the money, the
safety, and the simplicity, and answer the AI question honestly instead of
avoiding it.

**B. Partners.** CPAs, business brokers, M&A advisors, bankers, lenders, wealth
advisors, attorneys, consultants, IT providers. Their reputation is the asset
they're lending us. They care about: what I earn, when I'm paid, how I get
credit, whether I need the owner's permission, and **whether this could
embarrass me with a client.** Many have professional rules on referral
compensation, so disclosure is a feature we build in, not a footnote.

## 3. What we are not
- Not Pewter Data. They have the best-executed funnel in the lane and a partner
  program (10%, $100K cap, 12-month credit). Their payer is anonymous. We win on
  a named licensee, named people, disclosed money flows, and original language.
  **We do not reuse their copy.** v1 of this repo did; v2 removed it.
- Not a consumer data play (Vana, Kled, Verb).
- Not hype. Every number is public and attributed (copy deck, "Verified figures").

## 4. Sitemap
1. **Home** (company-facing, primary): hero, eligibility check, market figures,
   why records have value, safeguards (de-identification specimen), how it
   works, terms at a glance with the who-pays-whom diagram, a fair question,
   who this is for, questions, request form.
2. **Partners** (`/partners`): hero with commission estimate, who partners,
   disclosure (with specimen), how it works, commitments, partner questions,
   application form.
3. **Register an introduction** (`/partners/refer`).
4. **About / Trust** (`/about`): who we are, named leadership, deal structure
   diagram, contact. This page is required for launch, not optional.
5. Process and FAQ live as anchors on Home in v1. Separate pages later.
6. Legal: privacy policy and partner program terms. Required before launch.

A working reference build of Home and Partners is in `reference/`. It shows the
intended look and feel below the hero and is the visual target for the build.

## 5. Funnel architecture
**Company funnel:** Eligibility check (30 seconds) -> "Request a valuation"
form -> we call within one business day -> confidential call -> data review ->
written offer -> de-identify, deliver, paid. Owner time: about one hour.
Secondary action everywhere: "Book a call."

The v1 payout estimator is parked until a real payout model is supplied. A
dollar range we can't back is the fastest way to lose a skeptical owner and the
partner who sent them.

**Partner funnel:** Commission estimate -> "Apply to partner" form -> referral
code issued immediately, agreement within one business day -> partner
introduces via link or registration (with the owner's permission and a written
disclosure) -> we run the deal and email updates at each stage -> partner paid
within 30 days of our fee. No cost, no quota, no exclusivity.

**Lead magnets (built into the page, not downloads):**
1. Eligibility check (companies). 2. Commission estimate (partners).
3. De-identification specimen (the strongest trust asset).
4. Market figures ledger (attributed). 5. Terms at a glance (the institutional
anchor). 6. FAQ as objection handling.

## 6. Trust architecture (in order of appearance)
1. A named licensee in the hero, with its published tiers.
2. Figures in a ledger with sources beside them, and plain labels on what each
   one is not ("a commitment, not money paid out").
3. The de-identification specimen: show exactly what leaves the building.
4. Who pays whom, disclosed in the body: our fee, the partner's share, and the
   owner's payment, in one diagram.
5. The terms in plain language, before the FAQ.
6. The hard question about AI, answered directly.
7. Who does not qualify, stated as clearly as who does.
8. Named people on About.
9. Honest caveats beside every promise. Caveats convert skeptics.

## 7. Language rules
- **License**, never sell. "You keep ownership."
- De-identified, not anonymized.
- The licensee is **[BUYER]** (Micro1). Do not write "frontier AI labs license
  your records." Whether and how labs access the copy is a `[CONFIRM]` item
  against the buyer agreement.
- AI is the buyer's business, not the owner's opportunity. No "join the AI
  revolution," no "the future of," no excitement.
- Plain sentences. We, never I. No em dashes. No hype adjectives. Sentence case.
- Never promise a result. Estimates are illustrations; offers come after review.
- Original language only. See "Retired lines" in the copy deck.

## 8. Design direction
- **Hero:** ATRIUM/Motion Sites mosaic, exactly as supplied, first pass. Copy
  left, counter-moving image columns right. Hero copy changes per copy deck v2.
- **Below the hero:** `design-direction.md` (composition, components, rules)
  on top of the Glassnode tokens (`design-reference_glassnode.md`). Short
  version: the page reads like a well-drafted engagement letter. Ledgers,
  terms tables, specimens, and one diagram, set in Inter on hairlines. Cards
  only for real objects (a widget, a document, a form).
- Photography below the hero only where `image-spec.md` allows. Any other
  break from the design direction needs Jay's explicit green light.

## 9. Open decisions (for Jay)
1. **Company name** (`naming.md`).
2. **Partner economics.** `[PARTNER %]` and `[PARTNER CAP]`. Pewter's reference
   is 10% capped at $100K. Before publishing any split, confirm the signed
   Micro1 agreement supports it: Micro1's public referral program pays flat
   bounties (up to $50K), not percentages.
3. **Naming the buyer publicly.** Copy uses `[BUYER]`. Note that the $1B figure
   identifies Micro1 anyway, so "not yet" in practice means removing that row.
4. **Minimum headcount.** The site says 20+. Micro1's own published criteria
   say 30+ employees. Either confirm the agreement accepts 20 to 29, add a
   second buyer for that band, or change the site to 30+. Do not launch with a
   threshold the buyer won't honor.
5. **Fee mechanics.** Confirm the buyer's fee to us is not deducted from the
   owner's payment, and that partner commission comes from our fee. The terms
   table and partner disclosure both state this.
6. **Pre-signing data review.** Confirm whether any sample leaves an owner's
   systems before signing. The risk reversal depends on the answer.
7. **Leadership on About.** Names, titles, one-line bios. Jay's operating
   history is a trust asset the anonymous competitor can't match.
8. **Parent entity line** in the footer (optional).
9. **Healthcare.** Removed from all copy. Patient health records are listed as
   not a fit unless we build a HIPAA-specific process.
10. **Spirit Airlines figure.** Held until after the Oct 14, 2026 hearing.
11. **Hero industry imagery** (later pass; placeholders stay for now).
