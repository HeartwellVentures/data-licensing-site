# Copy Deck (v2, Oct 13, 2026)

v1 borrowed heavily from Pewter Data's site (hero, trust strip, education head,
de-identification copy, FAQ answers, partner H1). v2 is written from scratch.
See "Retired lines" at the end, and do not reintroduce them.

## Placeholders
- `[COMPANY NAME]` company name, TBD (`naming.md`)
- `[BUYER]` licensee name. Resolves to Micro1 once the agreement permits public naming
- `[PARTNER %]`, `[PARTNER CAP]` partner economics, TBD (brief section 9)
- `[FOUNDER]`, `[TITLE]`, `[BIO LINE]` leadership, About page
- `[EMAIL]`, `[PHONE]`, `[ADDRESS]` contact details
- `[PARENT ENTITY]` optional "A ___ company" line, decision for Jay
- `[CONFIRM: ...]` a sentence that must be checked against the signed buyer
  agreement before launch. Remove the bracket once confirmed; rewrite the
  sentence if it turns out to be false.

## Voice
Two readers, every sentence:
1. A 55-year-old owner of a 60-person logistics firm. Has never heard of data
   licensing. Mildly hostile to the AI industry. Busy.
2. Her CPA, who reads the page before forwarding it, looking for anything they
   would be embarrassed to have sent.

Write in the owner's vocabulary, to the CPA's standard.

Rules:
- **License, never sell.** Say "you keep ownership" wherever it matters.
- **Every figure has a source next to it.** Every promise has its limit next to it.
- **Say who pays whom, on the page.** Fees and partner compensation are disclosed
  in the body copy, not only in the FAQ.
- **AI is the buyer's business, not the reader's opportunity.** We never ask
  anyone to be excited about AI, and we answer the hard question about it directly.
- No hype adjectives, no urgency theatre, no exclamation marks.
- We, never I. No em dashes. Sentence case for every heading and button.
- **One name per action.** The company-side primary action is "Request a
  valuation" in the nav, hero, form button, and confirmation. The partner-side
  primary action is "Apply to partner."
- **Original language only.** Nothing from Pewter's site, including the lines
  quoted in `research/`.

## Verified figures (the only numbers allowed on the site)
| Figure | Allowed wording | Source | Status |
|---|---|---|---|
| $1B | "announced commitment" to acquire and license company data over 12 months. Never "paid" | Business Wire, Oct 9, 2026 | Use |
| $100K+ / $500K+ / $1M+ | "[BUYER]'s published tiers for qualified firms." Never "what you will get" | micro1.ai/data-partnerships | Use |
| "Hundreds of thousands" | Paid to cielo24 for 13 years of internal records, "as reported by its CEO" | Forbes, Apr 2026 | Use |
| $20M+ to 7,000+ rights holders | Paid by Troveo. Label as market context, mostly media rights | Business Wire, Apr 2026 | Use |
| $10M Spirit Airlines winning bid | Not used on Home | Court filing, Aug 2026 | Hold. Contested auction, [BUYER] is a competing bidder in a privacy dispute, hearing Oct 14, 2026. Revisit after the ruling |
| News Corp, Reddit, Shutterstock deals | Publisher deals, not SMB deals | Reported via Troveo | Partners page only, if at all |
| Defined.ai $600K+ average | Company-reported, different lane | Defined.ai | Not used |
| Pewter's $650K / $450K / $350K / 15-firm list | Never | Pewter, self-reported | Never |

---

## HOME

**Nav:** [COMPANY NAME] | How it works | Safeguards | Terms | Questions | Partners | button: Request a valuation

### Hero
**Eyebrow:** Data licensing for established US firms

**H1:** Your firm's records can earn licensing income. You keep ownership.

**Sub:** [COMPANY NAME] arranges licenses for de-identified copies of the
records your team already keeps. The licensee is [BUYER], an AI training data
company whose published tiers start at $100,000 for qualified firms. You take
one call and approve every term in writing.

**Assurances (three separate items, no separator characters):**
- Nothing uploaded to start
- No fee to owners at any stage
- Names removed before delivery

**CTAs:** Request a valuation (primary) / Book a call (text link)

### Eligibility check
Replaces the v1 payout estimator. No payout model has been supplied, and a
range we cannot back is the fastest way to lose a skeptical owner. If a real
model arrives, the estimator can return beside this.

**Head:** Check whether your firm fits.

**Body:** Four questions, about thirty seconds. This tells you whether a call
is worth your time. It is not a valuation.

**Inputs:**
1. Staff, now or at your peak: Under 20 / 20 to 49 / 50 to 199 / 200 or more
2. Years of records still on hand: Under 3 / 3 to 5 / 6 to 10 / More than 10
3. Where your records live (choose any): Email / Shared drive / CRM /
   Scheduling or dispatch / Accounting or ERP / Project or ticketing system
4. Status: Operating / Downsizing or winding down / Closed, records kept

**Results:**
- **Likely a fit.** Your firm meets the criteria we screen for. The next step
  is a 30-minute call to confirm what you have. Button: Request a valuation
- **Worth a call.** (size and history fit, no systems chosen) You meet the size
  and history criteria. Most owners aren't sure where everything lives. We work
  that out on the call. Button: Request a valuation
- **Not yet, under 20 staff.** We currently work with firms of 20 or more
  staff, now or at their peak.
- **Not yet, under 3 years.** Buyers look for at least three years of records.
  If you have older archives, a call can confirm what counts.

**Published tiers panel (beside the check):**
- Head: What [BUYER] publishes
- $100,000+ Qualified firms
- $500,000+ Large-scale or ongoing datasets
- $1,000,000+ Highly unique records
- Note: [BUYER]'s published tiers, Oct 2026. Where a firm lands depends on data
  review. These are not an estimate for your firm.

### Market figures (dark band)
**Head:** The figures, with sources.

**Intro:** Every number on this site is public and attributed. None of them is
a promise about your firm.

**Ledger rows (Figure / What it is / Source):**
1. **$1 billion** / Announced by [BUYER] to acquire and license company
   operational data over the next twelve months. A commitment, not money paid
   out. / Business Wire, Oct 9, 2026
2. **$100,000+** / [BUYER]'s published starting tier for qualified company
   partnerships. Higher tiers start at $500,000 and $1 million. / [BUYER] data
   partnerships page, Oct 2026
3. **Hundreds of thousands** / Paid to cielo24, a software company, for 13
   years of internal records, as reported by its CEO. Not a [COMPANY NAME]
   transaction. / Forbes, Apr 2026
4. **$20 million+** / Paid by Troveo, another licensing company, to more than
   7,000 rights holders. Mostly media rights. Shown as market context. /
   Business Wire, Apr 2026

### Why records have value
**Head:** The internet shows what businesses say. Your records show how they work.

**Body:** AI systems were trained mostly on public writing. Public writing
rarely shows the work itself: how a job gets quoted, how a schedule recovers
when a crew calls out, how a complaint gets resolved. That history lives in
operating records and almost nowhere else. It is what [BUYER] licenses.

**Table, "What buyers look for" (Record / What it shows):**
- Estimates and quotes / How a price gets built
- Scheduling and dispatch / How plans change under pressure
- Service and support tickets / How problems get resolved
- Project histories / How multi-step work gets sequenced
- Procedures and checklists / How your team does it right
- Billing and collections / How money moves through a job

### Safeguards
**Head:** Names come out. The work stays in.

**Body:** Before anything is delivered, every name, contact detail, account
number, and credential is replaced with a consistent label. The licensed copy
keeps the order and substance of the work and drops the identities. You review
the method and a sample before you sign.

**Specimen toggle:** "Original, stays with you" / "Licensed copy"

**Specimen, original:**
From: Renee Castillo <renee@northgateair.com>
To: Tom Becker, Facilities, Linden Office Park
Subject: RTU-3 failure, Suite 200
Tom, our tech Marcus Hall found a failed compressor on RTU-3 at 6:15 this
morning. The unit is under manufacturer warranty until March. We'll have
temporary heat running in Suite 200 by noon, and parts are on order under
PO 55120. Expect the swap Thursday. Invoice 20931 is on hold until then.

**Specimen, licensed copy:**
From: [Rep_04] <[EMAIL]>
To: [Contact_219], [Client_47]
Subject: [Unit_12] failure, [Location_08]
[Contact_219], our tech [Tech_31] found a failed compressor on [Unit_12] at
6:15 this morning. The unit is under manufacturer warranty until [Date_03].
We'll have temporary heat running in [Location_08] by noon, and parts are on
order under [PO_Number]. Expect the swap Thursday. Invoice [Invoice_ID] is on
hold until then.

**Beside the specimen:**
- **Replaced with labels:** People, clients, and vendors. Emails, phone numbers,
  and addresses. Account, invoice, and order numbers. Credentials.
- **Excluded on request:** Privileged, regulated, or confidential client
  material, and anything you don't have the right to license.
- **Reviewed by you:** A sample of the licensed copy, before you sign.

**Caveat (always shown):** Illustrative example with fictional names. No
de-identification method removes every risk. That is why you see a sample first.

### How it works
**Head:** About one hour of your time. We handle the rest.

**Steps (a true sequence, numbered):**
Time labels sit above each step title.
1. **Request a valuation.** Today, two minutes. Headcount, years in business,
   and the systems your records live in. Nothing uploaded.
2. **Confidential call.** Within one business day, about 30 minutes. We confirm
   what you have and give you a realistic range.
3. **Data review.** After the call. We size your records by system and years with your IT
   person or provider. Nobody on your team cleans or creates anything.
   [CONFIRM: whether any sample leaves the firm's systems before signing.]
4. **Written offer.** After review. One agreement covering price, scope, permitted use, and
   payment schedule, readable in an evening. Sign it, ask for changes, or walk
   away.
5. **Delivery and payment.** On delivery. We coordinate the export and de-identification.
   You're paid on the milestones in your agreement.

**Side panel:**
- Your part: answer a few questions, take one call, read and sign.
- Our part: valuation, buyer terms, export coordination, de-identification,
  closing, and follow-up after payment.
- Who sees your records: only buyers you approve. Your records are never
  shopped around.

**Closing line:** No fee at any stage. If no offer is made, or you decline the
one we bring, you owe nothing.

### Terms at a glance
**Head:** The terms, in plain language.

**Intro:** Every agreement is specific to your firm. These points hold in all
of them.

| Term | What it means |
|---|---|
| Ownership | You keep ownership of your records. You license a copy. |
| What's licensed | An agreed, de-identified copy of the records you choose. Nothing else. |
| Licensee | [BUYER]. Your agreement names anyone else permitted to access the copy. |
| Permitted use | Training and evaluating AI systems, as written in your agreement. |
| Your approval | Every term, in writing, before any record is exported. |
| Fees to you | None, at any stage. |
| How we're paid | [BUYER] pays our fee when a deal closes. [CONFIRM: not deducted from the owner's payment.] |
| Partner compensation | If an advisor introduced you, we pay their share from our fee, and they disclose it to you in writing. Your payment is unaffected. |
| Walking away | Free, at any point before you sign. |

**Diagram head:** Who pays whom

**Diagram caption:** You pay no one at any stage. [CONFIRM: fee mechanics
against the buyer agreement.]

**Diagram:** Your firm sends a de-identified copy to [BUYER]. [BUYER] pays your
license payment to your firm and our fee to [COMPANY NAME]. If an advisor
introduced you, [COMPANY NAME] pays their share from its fee.

### A fair question (dark band)
**Head:** You don't have to like AI to make a sound decision about it.

**Body:** Licensed records are used to train AI systems to handle office work:
scheduling, quoting, resolving claims. We won't tell you that's neutral, and
some owners decide it isn't for them. If you go ahead, you decide what is
included, who may use it, and for what. Those limits are written into your
agreement before anything leaves your systems. Declining costs you nothing.

### Who this is for
**Head:** Who this is for.

**Usually a fit:**
- 20 or more staff, now or at your peak.
- Three or more years of records still on hand: email, files, operating systems.
- Based in the US, with records mostly in English.
- Operating, downsizing, winding down, or closed, as long as the records exist.

**Not a fit, or not yet:**
- Firms under 20 staff.
- Records that are mainly patient health information. We don't arrange
  licenses for them.
- Material you don't have the right to license, such as privileged client
  files. It is excluded, not licensed.

### Questions
**Head:** Questions owners ask first.
**Sub:** Something not covered here? Book a call and ask us directly.

**Is this real money, or a pitch?**
Real, and in writing before you commit. [BUYER] publishes licensing tiers
starting at $100,000 for qualified firms. Your offer arrives as a written
agreement with the price in it. You decide after reading it.

**What does this cost me?**
Nothing, at any stage. [BUYER] pays our fee when a deal closes. No deal, no fee.

**You're paid by the buyer. Isn't that a conflict?**
It's the same arrangement as a recruiter paid by the employer, and we disclose
it here and in your agreement. Our work only pays if you sign, so our job is to
bring you terms you're willing to sign. If they aren't right for you, there's
no deal and no fee for anyone.

**Do I give up my data?**
No. You license a de-identified copy of the records you choose. Your originals,
and your ownership of them, stay with you.

**Will my clients or employees be exposed?**
Names, contact details, account numbers, and credentials are replaced with
labels before delivery, and you can exclude any records entirely. No method
removes every risk, so you review the process and a sample before you sign.

**Who will use the copy, and for what?**
[BUYER], to build environments that train and evaluate AI systems on real
business workflows. Your agreement names who may access the copy, what it may
be used for, and whether the license is exclusive. [CONFIRM: downstream access
by AI developers as permitted under the buyer agreement.]

**Am I helping build something that replaces people like my team?**
Possibly, in part. These records teach AI systems office work such as
scheduling, quoting, and claims. [BUYER] already licenses records from other
firms, so the decision in front of you is whether yours are included, and on
what terms. Saying no costs nothing.

**How much of my team's time does this take?**
About an hour of yours. If an export is needed, we coordinate it with your IT
person or provider. Nobody on your team creates new data or cleans anything up.

**What if I don't know what records we have?**
That's normal. Tell us which tools you've used over the years, and we'll work
out what's there on the call.

**Why now?**
[BUYER] has announced its spending for the next twelve months, and the value
sits in history you still hold. Archives get deleted when subscriptions lapse
or a firm winds down. If you're unsure, a call costs nothing.

### Request form (dark band)
**Head:** Request a valuation.

**Body:** We reply within one business day. We share your firm's details with
[BUYER] only after you agree to it on the call.

**Assurances (hairline rows):**
- No fee at any stage.
- Nothing uploaded. We ask about your systems, not for your files.
- Walk away at any point before you sign.

**Fields:** Full name / Firm name / Work email / Phone / Staff (Under 20, 20 to
49, 50 to 199, 200 to 499, 500 or more) / Industry (optional) / Partner code
(optional, helper: "If an advisor introduced you")

**Consent (required):** [COMPANY NAME] may contact me about a valuation.

**Button:** Request a valuation

**Confirmation:** Valuation requested. We'll contact you within one business day.

**Below the form:** Prefer to talk first? Book a call.

### Footer
**Line:** [COMPANY NAME] arranges data licensing agreements between established
US firms and [BUYER].

**Columns:** Companies (How it works, Safeguards, Terms, Questions) / Partners
(Partner program, Register an introduction) / Firm (About, Privacy policy,
Partner program terms) / Contact ([EMAIL], [PHONE], [ADDRESS])

**Legal line:** © 2026 [COMPANY NAME]. [PARENT ENTITY]. Figures on this site
are attributed to public sources and are not estimates for any firm.

---

## PARTNERS (/partners)

**Eyebrow:** Partner program

**H1:** A referral program you can disclose to every client.

**Sub:** When an owner you introduce licenses their records, we pay you
[PARTNER %] of their license payment, up to [PARTNER CAP]. It comes from our
fee, not theirs, and it's disclosed to them in writing. We run the deal from
first call to payment.

**CTAs:** Apply to partner (primary) / Register an introduction (text link)

### Commission estimate (widget in the hero)
**Head:** Estimate your share
**Input:** License payment to the firm, slider $100,000 to $2,000,000
**Output:** [PARTNER %] of $[amount] = $[result]. Until `[PARTNER %]` is set,
show the formula with the placeholder, never a computed number.
**Note:** Paid once per firm, within 30 days of our fee being received. An
illustration, not a promise.

### Who partners with us
**Head:** Built for the advisors owners already rely on.
- **CPAs and accountants.** You know which clients have years of organized
  records, and which are planning a transition.
- **Business brokers and M&A advisors.** A license payment can add value before
  a sale or help fund a wind-down.
- **Bankers, lenders, and wealth advisors.** Cash for an owner without new debt
  or giving up equity.
- **Attorneys, consultants, and IT providers.** You're close to the systems the
  records live in, and to the confidentiality questions they raise.

### Disclosure
**Head:** Your client sees the whole arrangement.

**Body:** Every introduction includes a one-page disclosure the owner keeps. It
names us, the licensee, what you're paid, and who pays it. Many CPAs and
attorneys must disclose referral compensation to clients under their
professional rules. We make that routine. [CONFIRM with counsel: AICPA and
state bar requirements, and the disclosure text itself.]

**Disclosure specimen:**
- Referral disclosure
- Prepared for: [Owner name], [Firm]
- Introduced by: [Partner name], [Partner firm]
- Arranged by: [COMPANY NAME]
- Licensee: [BUYER]
- Partner compensation: [PARTNER %] of your license payment, up to
  [PARTNER CAP], paid by [COMPANY NAME] from its fee. Your payment is not reduced.
- Your costs: None, at any stage.
- Your choice: You may decline at any point before signing, at no cost.

### How it works
**Head:** Four steps. Three of them are ours.
Time labels sit above each step title.
1. **Apply.** Two minutes. Your referral code and link arrive right away, and
   your agreement within one business day.
2. **Introduce.** When an owner agrees to hear from us. Share your link or
   register the introduction. It's credited to you for 12 months.
3. **We run the deal.** From first call to payment. Call, valuation, offer,
   de-identification, payment. You get an email at each stage.
4. **You're paid.** Within 30 days of our fee. Once per firm, after the firm
   has been paid and [COMPANY NAME] has received its fee.

### Commitments (dark band)
**Head:** What we will never do with your clients.
- Contact an owner who hasn't agreed to hear from us.
- Add an owner to a marketing list.
- Share an owner's details with [BUYER] without their consent.
- Push an owner to sign. Declining costs them nothing, and your credit stays
  registered.

### Partner questions
**Head:** Partner questions.
**Sub:** Owners' questions are answered on the home page.

**How much can I earn?**
[PARTNER %] of the license payment to the firm you introduce, up to
[PARTNER CAP], paid once per firm. [CONFIRM: split economics are in the signed
buyer agreement. Micro1's public referral program pays flat bounties, not
percentages.]

**When am I paid?**
Within 30 days after the firm is paid and we receive our fee.

**How do I get credit?**
The first partner to register a firm, through their link or the registration
page, holds the credit for 12 months.

**Do I need the owner's permission?**
Yes, before you register them. We contact them once and never add them to
marketing lists.

**Do I need to disclose my compensation?**
We provide a written disclosure for every introduction. Whether your
professional rules ask for more is a question for your licensing body or
counsel.

**What if the deal doesn't close?**
No commission is owed and nothing is lost. Your registration holds for 12 months.

**Is there a cost, a quota, or exclusivity?**
No.

**What paperwork is involved?**
A partner agreement and a W-9.

### Application form (dark band)
**Head:** Apply to partner.
**Body:** There's no cost, no quota, and no exclusivity. Your referral code
arrives when you submit. Your agreement follows within one business day.
**Fields:** Full name / Firm / Email / Phone / What you do (CPA or accountant,
Business broker or M&A advisor, Banker or lender, Wealth advisor, Attorney,
Consultant, IT provider, Other) / Business owners you advise (optional: Under
25, 25 to 100, 100 to 500, More than 500) / Website (optional) / Anything we
should know (optional)
**Agreement (required):** I agree to the partner program terms, and I will
introduce only owners who have agreed to hear from [COMPANY NAME].
**Button:** Apply to partner
**Confirmation:** Application received. Your referral code is [CODE].

---

## REGISTER AN INTRODUCTION (/partners/refer)

**H1:** Register an introduction.

**Body:** Registering credits the firm to you for 12 months. We contact the
owner within one business day, send them the referral disclosure, and email you
as the deal moves.

**Good fits:** 20 or more staff, three or more years of records, US-based.
Operating, downsizing, winding down, or closed.

**Fields:** Your referral code / Your email / Firm name / Owner or
decision-maker / Their email / Their phone (optional) / Staff (optional) /
Industry (optional) / Context for our call (optional)

**Consent (required):** The owner has agreed to hear from [COMPANY NAME] about
licensing their firm's records, and knows I may be compensated for this
introduction.

**Button:** Register introduction
**Confirmation:** Introduction registered to you.

---

## ABOUT (/about)

**Head:** Who we are.

**Body:** [COMPANY NAME] arranges data licensing agreements between established
US firms and [BUYER]. We run each deal ourselves, from the first call to
payment, and we pay the advisors who introduce owners to us. [PARENT ENTITY
sentence, optional.]

**Leadership:** [FOUNDER], [TITLE]. [BIO LINE]. Named people are a trust
requirement, not a nice-to-have: the closest competitor's payer is anonymous,
and owners and partners will ask who is behind this.

**How a deal is structured:** the Who pays whom diagram, reused from Home.

**How de-identification works:** short summary, link to Home > Safeguards.

**Contact:** [EMAIL] / [PHONE] / [ADDRESS]

---

## Retired lines (v1, derived from Pewter Data). Do not use.
- "The records you already keep are worth six figures to (frontier) AI labs."
- "For owners of US firms with 20+ employees" (as the hero eyebrow)
- "No files to start / No cost to you / You keep your originals"
- "runs your deal from valuation to wire. You take one call and approve the terms."
- "The labs have read the internet. They have never seen how your business runs."
- "Your clients and staff are never named."
- "so the work survives and the people disappear"
- "Firms whose records show skilled work step by step are in highest demand"
- "Most established firms qualify."
- "Introduce business owners. Earn [X] of what they're paid."
- "Nothing, at any stage. Our fee is paid by our licensing partner..."
- "No. The deal is a license of an agreed, de-identified copy. Your original files and your ownership of them don't change."
- The freight dispatcher de-identification specimen
- "A deal firm for the data economy."
- "Frontier AI labs license..." (unverified: the licensee is [BUYER]; downstream
  use by labs is a [CONFIRM] item, not a headline)
