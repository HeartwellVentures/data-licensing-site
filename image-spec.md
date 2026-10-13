# Image & Animation Spec

## Cohesive style decision
The site speaks in **charts, diagrams, and type**. Below the hero, the default
visual language is data visualization, not photography: hairline line-art,
monochrome stat cards, and the single lavender accent (`#e2e7fc`) used the way
the design reference uses it (soft wash behind a headline word, fill under a
chart line). This is what makes the site feel institutional and trustworthy,
and it is what the design reference demands.

**Photography rule:** black-and-white only, documentary corporate style, to
match the hero mosaic. No color stock photography anywhere. Photography below
the hero appears ONLY where this spec explicitly allows it.

## Hero (keep exactly as supplied, first pass)
Do not redesign. Implement the supplied ATRIUM/Motion Sites spec verbatim:
copy left, three-column counter-scrolling mosaic right, pure CSS `@keyframes`
(14.6s loop, alternating column directions), viewport-locked, five responsive
architectures. Remote assets (use exactly, no substitutes):

- `--img-sculpt: url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc524fc3-03c3-40a1-9954-22eab1322592.webp)`
- `--img-man: url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/1d56967e-0ed5-40f8-812d-9360e5ec1780.webp)`
- `--img-visit: url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5f3f6135-26b9-4c48-92ad-105161327cbc.webp)`
- `--img-sil: url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e7b68ae9-9240-4f52-a0a2-89082df4b8d0.webp)`
- `--grain: url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/40b7fef3-410d-4ef3-bd67-0a2fc7ee5a1d.svg)`

Industry-specific hero imagery (consulting, agtech, insurance, etc.) is a
LATER pass. Placeholders stay for now.

## Placement map (below the hero)

### Home
1. **Estimator** — the widget IS the visual. Style it like the reference's hero
   chart widget: white card, 1px `#dedfe1` border, 2px radius, layered soft
   shadow. Two sliders (employees, years), large output figure in 700-weight
   Inter. Output number animates (count-up) when sliders move. No image.
2. **Proof points** — three monochrome stat cards (`$1B`, `$10M`, "hundreds of
   thousands"), each with a 1-line source attribution in 12px muted type.
   Typographic only. Optional: a thin horizontal timeline of market deals
   (2024-2026) as hairline line-art if space allows.
3. **De-identification demo** — side-by-side document specimens. Style as
   redacted documents: monospace-ish type blocks on white cards, with the
   "after" card showing `[PLACEHOLDER]` tokens in the lavender wash. This is
   the single strongest trust asset on the page; give it room. No photography.
4. **How it works** — numbered 01-05, hairline vertical connector, type only.
5. **Process (four steps)** — four cards in a row on desktop, 1px borders,
   step number in 12px uppercase muted. Type only.
6. **Qualification** — checklist with hairline check icons. Type only.
7. **Offer form** — the form is the visual. White card, 1px border, 2px radius
   inputs per the reference.

### Partners (/partners)
1. **Commission estimator** — same widget treatment as the payout estimator.
2. **"People owners already trust"** — four profession cards (CPA, broker,
   banker, attorney/consultant/IT) with simple line icons. **PERMISSION ASK:**
   replace icons with small black-and-white documentary portraits of
   professionals at work (one per card, 4:3, heavy grain to match hero). This
   is the one place photography would materially lift trust, because partners
   are people buying into people. Needs Jay's green light; default to icons.
3. **How it works** — same numbered treatment as Home.

### Refer (/partners/refer)
- Form only. No imagery needed.

### About (/about)
- One diagram: the deal flow. Three nodes (Company -> [COMPANY] -> AI lab)
  with two return arrows (payment to company, commission to partner).
  Hairline line-art on white, lavender wash behind the [COMPANY] node. Build
  as inline SVG so it stays crisp.

## Animation spec
- Hero mosaic: continuous CSS marquee only (per supplied spec).
- Estimator numbers: count-up animation on input change (vanilla JS, ~600ms,
  ease-out).
- Scroll reveals: cards and sections fade + rise 12px on entering viewport,
  staggered 80ms. One-shot, not looping.
- Buttons: no animation beyond a 150ms background darkening on hover.
- `prefers-reduced-motion: reduce`: disable marquee, count-ups, and reveals.

## Placeholders
Where a final asset is not yet commissioned, render a labeled gray box
(`#edeff2` fill, 1px dashed `#a0a0a0` border, 12px muted label describing the
intended asset, e.g. "B&W photo: CPA reviewing files, 4:3"). The site must
look intentional with placeholders in place.
