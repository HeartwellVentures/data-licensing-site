# Launch Prompt — paste into Codex CLI to start the build

You are building a static marketing website for a new B2B data-licensing company. The complete handover is in this repo. Read everything before writing any code, in this order:

1. `brief.md` — positioning, audiences, sitemap, funnel architecture, trust architecture, language rules, design direction, open decisions (§9)
2. `design-reference_glassnode.md` — the design system. This is law.
3. `copy-deck.md` — page copy. Use it as written; do not rewrite the voice.
4. `image-spec.md` — imagery rules.
5. `naming.md` — naming context. The company name is TBD: use `[COMPANY NAME]` everywhere a name appears.
6. `research/` — market context for you, not copy sources. Pewter Data's site is a conversion-architecture reference only; never copy its language. Note (corrected Oct 13): Pewter HAS a partner program — never claim otherwise.

## Session skill roster

Active for this build: `frontend-design` (with the override below), `webapp-testing`, `superfuture/design-review` (critic only, used in step 3). Disabled for this session: `ponytail`, `brand-guidelines`, `web-artifacts-builder`, and any second taste/design skill. If a skill's taste defaults conflict with the pinned design direction below, the brief wins.

## Design direction (pinned — wins over any skill defaults)

Institutional, monochrome, Glassnode-style. Inter for everything. 2px radii. Hairline borders. Alternating light and dark bands. Pale lavender accent, used sparingly. Charts, diagrams, and typography are the primary visual language, not photography.

Hero (first pass): keep the supplied ATRIUM / Motion Sites counter-moving photo mosaic. Do not redesign the hero imagery.

Skill override: if the frontend-design skill's denylist bans Inter or hairline-rule layouts to "force distinctiveness," the brief's pinned direction wins on those axes, per the skill's own rule ("the brief's own words always win"). Apply the denylist only to axes the brief leaves open.

## Anti-slop rules (hard bans)

- No all-caps eyebrows above every section. No split-header section patterns. No icon tiles over headings. No italic-serif display shortcuts. No `A · B` meta strings. No fake chrome (div-built dashboards or terminals). No purple/blue gradients.
- No vague quality words driving design choices ("make it premium" is the slop default). Every visual choice must trace to the brief or the design reference.
- Never invent facts. Company name, partner %, partner cap, and buyer naming are OPEN DECISIONS (brief §9). Use bracketed placeholders: `[COMPANY NAME]`, `[PARTNER %]`, `[PARTNER CAP]`. Do not invent statistics, testimonials, client logos, or case studies.

## Language rules

- Companies LICENSE their data. Never "sell." Never "data broker" language anywhere on the site.
- Buyers are "frontier AI labs." Name Micro1 only where the copy deck already does; otherwise use `[BUYER]`.

## Process (follow exactly)

1. First output a token plan (palette, type scale, spacing, radii, border treatments) plus an ASCII layout sketch per page. Do not write code until I approve the plan.
2. Build the static site into `./dist/`.
3. Screenshot loop: screenshot every page with Playwright, then run the `superfuture/design-review` skill against the screenshots as the critic (a separate pass — never judge your own output in the pass that generated it). Apply its blocking and important findings. Fix, repeat. 3–5 passes, then stop.
4. Pre-flight before finishing: grep the output for banned patterns (gradients, uppercase-tracking eyebrows, invented stats) and confirm every placeholder is bracketed and listed.
5. Final report: what was built, the full list of open placeholders, and every brief ambiguity you resolved with a guess (list each guess explicitly).
