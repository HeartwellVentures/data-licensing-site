# Build Repo: Data-Licensing Website

## What this is
The complete execution package for our data-licensing firm's website. Any
frontier model or skilled agent should be able to build the site from these
files alone.

## The business (one paragraph)
Established US companies **license** (never "sell") de-identified copies of
their operational records and keep ownership of the originals. We arrange each
deal from first call to payment. We originate deals two ways: directly with
owners, and through **partners** (CPAs, brokers, bankers, attorneys,
consultants, IT providers) who introduce owners and earn a disclosed share,
paid from our fee. Our anchor licensee is Micro1 (`[BUYER]` in copy). Background:
`research/space-sweep_2026-10-13.md`.

## The brand job
An institution an owner can trust and a CPA can forward without hesitation.

## How to use this repo
1. `REVIEW.md`: what changed in v2 and why. Read once.
2. `brief.md`: master brief. Positioning, audiences, sitemap, funnel, trust
   architecture, language rules, open decisions.
3. `design-direction.md`: composition and components below the hero.
4. `design-reference_glassnode.md`: tokens (color, type, spacing, radii).
5. `reference/`: working build of Home and Partners. The visual target.
6. `copy-deck.md`: all copy. Use as written. Only the figures in "Verified
   figures" may appear. Never reuse anything under "Retired lines."
7. `image-spec.md`: imagery and motion.
8. `naming.md`: name shortlist. Until chosen, use `[COMPANY NAME]`.
9. `research/`: context only, never a copy source.

## Build path
1. Codex CLI (`launch-prompt.md`) builds the site from this repo, matching
   `reference/` below the hero.
2. Nia reviews against `brief.md`, integrates, and pushes to GitHub.
3. Deploy to Cloudflare; attach the domain once naming is decided.
4. Rule: Nia builds herself only on a **separate branch**, and only after this
   repo is solid.

## Key constraints (non-negotiable)
- **License**, never **sell**. The company keeps ownership. Say both, every
  time it matters.
- Copy must survive a 55-year-old owner of a 60-person logistics firm, and her
  CPA reading over her shoulder. No jargon, no AI-hype adjectives.
- Never invent deal figures, payouts, partner names, or terms. Unverified
  statements stay bracketed as `[CONFIRM: ...]` until checked against the
  signed buyer agreement.
- Original language only. v1 copy reused a competitor's lines; v2 removed them.
- No em dashes anywhere in copy.
- Hero: keep the ATRIUM/Motion Sites mosaic as supplied for the first pass.
  Below the hero: `design-direction.md` and `reference/`.
- Photography below the hero only where `image-spec.md` explicitly allows it.
