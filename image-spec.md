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
Composition for every section is in `design-direction.md`. Imagery is limited
to what is listed here.

### Home
1. **Eligibility check.** The widget is the visual: white card, 1px `#dedfe1`
   border, 2px radius, the layered soft shadow from the reference. The
   published-tiers panel beside it is three hairline rows. No image.
2. **Market figures.** A ledger on the dark band: figure, what it is, source.
   Typographic only. No stat cards, no icons.
3. **Why records have value.** A two-column table (record, what it shows).
   Typographic only.
4. **Safeguards.** The specimen document with the Original / Licensed copy
   toggle. Replaced values render as `#e2e7fc` labels. This is the strongest
   trust asset on the site; give it the widest column on the page. No photography.
5. **How it works.** Five numbered steps on a single hairline. Type only.
6. **Terms at a glance.** A plain table, then the who-pays-whom diagram as
   inline SVG: four nodes (Your firm, [COMPANY NAME], [BUYER], Your advisor),
   hairline strokes, `#e2e7fc` fill on the [COMPANY NAME] node only.
7. **A fair question.** Dark statement band. Type only.
8. **Who this is for.** Two columns of hairline rows. Type only.
9. **Request form.** The form is the visual.

### Partners (/partners)
1. **Hero.** Copy left, commission estimate widget right. No mosaic on this
   page.
2. **Who partners with us.** Four rows. Default: no icons, no photos.
   **PERMISSION ASK (unchanged):** small black-and-white documentary portraits
   of professionals at work, one per row, 4:3, heavy grain to match the hero.
   Needs Jay's green light.
3. **Disclosure.** A second specimen document: the one-page referral disclosure
   the owner receives. Same treatment as the Home specimen.
4. **How it works.** Four numbered steps on a hairline.
5. **Commitments.** Dark statement band.

### Refer (/partners/refer)
- Form only. No imagery.

### About (/about)
- Reuse the who-pays-whom SVG from Home.
- Leadership: black-and-white portrait per person, 1:1, same grain as the hero,
  **if** Jay approves named leadership with photos. Otherwise names and bios only.

## Animation spec
- Hero mosaic: continuous CSS marquee only (per supplied spec).
- Specimen toggle: replaced values cross-fade, 200ms. The only orchestrated
  motion below the hero.
- Commission estimate: value updates on input. No count-up.
- Accordion: plus rotates to a cross, 150ms.
- Buttons: 150ms background darkening on hover.
- No scroll reveals anywhere (removed in v2).
- `prefers-reduced-motion: reduce`: disable the marquee and all transitions.

## Placeholders
Where a final asset is not yet commissioned, render a labeled gray box
(`#edeff2` fill, 1px dashed `#a0a0a0` border, 12px muted label describing the
intended asset, e.g. "B&W photo: CPA reviewing files, 4:3"). The site must
look intentional with placeholders in place.
