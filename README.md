# Build Repo: Data-Licensing Website

## What this is
The complete execution package for our data-licensing company website. Any frontier
model or skilled agent should be able to build the site from these files alone.

## The business (one paragraph)
Companies **license** (never "sell") heavily anonymized copies of their operational
records to frontier AI labs, and keep ownership of the originals. We originate the
deals two ways: directly with companies, and through **partners** (CPAs, brokers,
bankers, attorneys, consultants, IT providers) who introduce business owners from
their networks and earn a share of each closed deal. Our anchor licensing buyer is
Micro1. Full background: `research/space-sweep_2026-10-13.md`.

## How to use this repo
1. Read `brief.md` first. It is the master brief: positioning, audiences, sitemap,
   funnel, trust architecture, language rules.
2. Build copy from `copy-deck.md`. Do not invent deal figures; the allowed numbers
   are listed there.
3. Build visuals from `design-reference_glassnode.md` (below the hero) and
   `image-spec.md` (every image, chart, and animation, with placement).
4. Company name: see `naming.md` for the shortlist. If building before the name is
   chosen, use the placeholder `[COMPANY]`.
5. `research/pewter-teardown.md` documents the competitor funnel we are
   out-executing. Reference, do not copy.

## Build path
1. GPT 6.1 (or equivalent frontier model) designs and builds the site from this repo.
2. Nia reviews against `brief.md`, integrates, and pushes to GitHub.
3. Deploy to Cloudflare; attach the new domain once naming is decided.
4. Rule: Nia builds herself only on a **separate branch**, and only after this repo
   is solid.

## Key constraints (non-negotiable)
- The word is **license**, never **sell**. The company keeps ownership. Say both,
  every time it matters.
- Copy must be understandable by a 55-year-old owner of a 60-person logistics firm.
  No jargon, no AI-hype adjectives.
- Never invent deal figures, payouts, or partner names. Allowed numbers are listed
  in `copy-deck.md` under "Verified numbers."
- No em dashes anywhere in copy.
- Hero section: keep the ATRIUM/Motion Sites mosaic exactly as supplied for the
  first pass (see `image-spec.md`). Everything below the hero follows the
  Glassnode design reference.
- Photography below the hero only where `image-spec.md` explicitly allows it.
