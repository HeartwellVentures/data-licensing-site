# Launch Prompt (v2). Paste into Codex CLI to start the build.

You are building a static marketing website for a new B2B data-licensing firm. The complete handover is in your working directory (this repo, cloned locally; do not clone it again or fetch it from GitHub; the local files are canonical). Read everything before writing any code, in this order:

1. `brief.md`: positioning, audiences, sitemap, funnel, trust architecture, language rules, open decisions (section 9).
2. `design-direction.md`: composition and components below the hero. This is law below the hero.
3. `design-reference_glassnode.md`: tokens (color, type, spacing, radii). Where it conflicts with `design-direction.md` below the hero, `design-direction.md` wins.
4. `reference/`: a working build of Home and Partners. It is the visual target below the hero. Match its composition and behavior; improve its implementation.
5. `copy-deck.md`: page copy. Use it as written; do not rewrite the voice. Never reintroduce anything under "Retired lines."
6. `image-spec.md`: imagery and motion rules.
7. `naming.md`: the company name is TBD. Use `[COMPANY NAME]` everywhere a name appears.
8. `research/`: market context for you, never a copy source. Pewter Data's site is a conversion-architecture reference only.

## Session skill roster

Active for this build: `frontend-design` (with the override below), `webapp-testing`, `superfuture/design-review` (critic only, used in step 3). Disabled: `ponytail`, `brand-guidelines`, `web-artifacts-builder`, and any second taste or design skill. If a skill's defaults conflict with the pinned direction below, the brief wins.

## Design direction (pinned; wins over any skill defaults)

Hero: keep the supplied ATRIUM / Motion Sites counter-moving photo mosaic. Do not redesign the hero imagery. Hero copy comes from copy deck v2.

Below the hero: the page reads like a well-drafted engagement letter. Inter only. 2px radii. Hairline rules. Ledgers, a terms table, document specimens, and one inline SVG diagram are the visual language. Cards only for real objects (widget, document, form). One accent (`#e2e7fc`), used only to mark replaced values or "us."

Skill override: if the frontend-design skill's denylist bans Inter or hairline layouts, the brief's pinned direction wins on those axes, per the skill's own rule ("the brief's own words always win"). Apply the denylist to axes the brief leaves open.

## Hard bans

- No uppercase eyebrows, no tracked-out labels, no `A · B` meta strings, no arrows appended to links, no single-word highlights in headings, no icon tiles, no gradients, no fake dashboard chrome.
- No scroll-triggered animation.
- No invented facts. Open items stay bracketed: `[COMPANY NAME]`, `[BUYER]`, `[PARTNER %]`, `[PARTNER CAP]`, `[FOUNDER]`, `[TITLE]`, `[BIO LINE]`, `[EMAIL]`, `[PHONE]`, `[ADDRESS]`, `[PARENT ENTITY]`. Keep every `[CONFIRM: ...]` sentence visible in the build so it cannot ship unnoticed.
- No figure that is not in the copy deck's "Verified figures" table, and none marked Hold or Never.

## Language rules

- Companies LICENSE their records. Never "sell." Never "data broker."
- The licensee is `[BUYER]`. Do not write that frontier AI labs license the owner's records.
- No em dashes anywhere.

## Process (follow exactly)

1. Output a token plan and an ASCII layout per page, mapped to `design-direction.md` and `reference/`. Do not write code until I approve it.
2. Build the static site into `./dist/` (Home, Partners, Refer, About, plus privacy and partner-terms stubs).
3. Screenshot loop: screenshot every page with Playwright at 1440px and 390px, then run `superfuture/design-review` against the screenshots as the critic in a separate pass. Apply blocking and important findings. Fix, repeat. 3 to 5 passes, then stop.
4. Pre-flight before finishing:
   - grep the output for em dashes, `gradient`, `text-transform: uppercase`, `letter-spacing` on labels, and every line under "Retired lines" in the copy deck;
   - confirm every number on every page appears in "Verified figures";
   - confirm every placeholder and `[CONFIRM]` item is bracketed and listed.
5. Final report: what was built, the full list of open placeholders and `[CONFIRM]` items, and every brief ambiguity you resolved with a guess (list each one).
