# Design Direction: Below the Hero (v2)

Tokens come from `design-reference_glassnode.md` (colors, Inter, 2px radii,
hairlines, 8px grid). This file decides **composition**: what each section is
made of and why. Where the two conflict, this file wins below the hero.

The working reference is `reference/index.html` and `reference/partners.html`.

## The idea
**The page reads like a well-drafted engagement letter.** Plain statements,
defined terms, figures with their sources beside them, the fees on the face of
the document, nothing in fine print. That is what institutional trust looks like
to an owner and a CPA: not darkness, density, or stat cards, but the sense that
the firm put everything on the table and wrote it carefully.

Glassnode supplies the materials. The engagement letter supplies the form.

## What changed from v1, and why
| v1 | v2 | Why |
|---|---|---|
| Every section chopped into identical bordered cards | Typographic rows on hairlines. Cards only for real objects: the eligibility widget, the specimen document, the form | Identical cards read as a SaaS template. Rows read as a document |
| Three stat cards | A four-row ledger: figure, what it is, source | A ledger with sources is how institutions show numbers. Stat cards are how startups do |
| Two process sections | One five-step sequence with time labels | v1 explained the process twice |
| Payout estimator with an unsupplied model | Eligibility check plus the buyer's published tiers | No numbers we can't back |
| Five dark bands | Three on Home (figures, fair question, form) plus the footer | Too much black reads heavy and promotional, not institutional |
| Fade-and-rise on every section | No scroll animation. One motion moment: the specimen toggle | Scattered motion reads generated. Motion that answers a click shows what changed |
| Fees and partner pay only in the FAQ | Terms table and a who-pays-whom diagram in the body | Disclosure in the body is the institutional signal |

## Palette (from Glassnode, roles narrowed)
| Name | Hex | Role |
|---|---|---|
| Ink | `#1a1a1a` | Text on light, dark bands, primary buttons |
| Iron | `#5a5a5a` | Secondary text, captions, sources |
| Mist | `#dedfe1` | Every hairline on light surfaces |
| Cloud | `#edeff2` | Canvas, alternate light band |
| Paper / White | `#f7f8fa` / `#ffffff` | Light bands, objects (widget, specimen, form) |
| Glacier | `#e2e7fc` | The only accent. Used for one thing: marking what was replaced or what we are (de-identification labels, our node in the diagram). Never decorative, never a selected state |

On dark bands: text `#ffffff`, secondary `#a0a0a0`, hairlines `#333333`.

## Type
Inter throughout (pinned by the brief). Weights 400, 500, 700 only.
- Section heads: 32px / 700 / 1.2, max width 20ch to 24ch so they break into
  two deliberate lines.
- Lead paragraphs: 20px / 400 / 1.5, max 60ch.
- Body: 16px / 1.5, max 68ch.
- Captions and sources: 14px or 12px, Iron. Never uppercase, never tracked out.
- Ledger figures: 32px / 700 with tabular numerals (`font-variant-numeric:
  tabular-nums`).
- Specimen text: Inter at 15px. No monospace: these are business records, not code.

## Layout
- 1200px max width, 24px gutters on mobile, 48px at desktop.
- Section rhythm: 96px top and bottom at desktop, 64px on mobile.
- Default section structure: heading and lead in a left column (5 of 12),
  content in a right column (7 of 12). Left-aligned throughout. Nothing centered
  except nothing.

```
HOME (below hero)
+----------------------------------------------------------+
| paper   Check whether your firm fits   [ widget card   ] |
|         tiers panel (3 hairline rows)  [ result line   ] |
+----------------------------------------------------------+
| ink     The figures, with sources.                       |
|         $1 billion   | what it is            | source    |
|         $100,000+    | ...                   | ...       |
+----------------------------------------------------------+
| cloud   The internet shows what...  | record | shows     |
+----------------------------------------------------------+
| white   Names come out.             [Original|Licensed]  |
|         lists: replaced/excluded    [ specimen document ]|
+----------------------------------------------------------+
| cloud   About one hour of your time.  1 ...              |
|         your part / our part          2 ...  (hairline)  |
+----------------------------------------------------------+
| paper   The terms, in plain language. term | meaning     |
|         Who pays whom  [ diagram, inline SVG ]           |
+----------------------------------------------------------+
| ink     You don't have to like AI to make a sound...     |
+----------------------------------------------------------+
| cloud   Who this is for.   Usually a fit | Not a fit     |
+----------------------------------------------------------+
| white   Questions          details/summary rows          |
+----------------------------------------------------------+
| ink     Request a valuation.         [ form card       ] |
| ink     footer                                           |
+----------------------------------------------------------+
```

## Components
- **Ledger.** Rows separated by hairlines. Columns: figure (32/700), what it is
  (16/400), source (14, Iron). On mobile the three stack inside each row.
- **Terms table.** A real `<table>` (or `<dl>`) with a 1px rule between rows.
  Term in 500 weight, meaning in 400. No zebra striping, no card.
- **Specimen.** A white document with a hairline border and a header strip
  (From, To, Subject). A two-option segmented control above it. Replaced values
  render as Glacier-washed labels. Below it, the caveat in 14px Iron.
- **Sequence.** Numbered 1 to 5 because it is a sequence. A single hairline runs
  down the left edge connecting the numbers. Time labels in 14px Iron above
  each step title.
- **Who pays whom.** Inline SVG, hairline strokes in Ink, one Glacier fill on
  our node. Arrows labeled in 14px Inter. Accessible: `role="img"`, a `<title>`
  and `<desc>`, and the same facts in the caption text.
- **Statement band.** Dark band with a 32px to 40px head and one paragraph. No
  ornament.
- **Questions.** Native `<details>`/`<summary>`, hairline between items, a plus
  sign that rotates to a cross. No JavaScript.
- **Buttons.** Primary: Ink fill, white text, 2px radius. On dark bands: white
  fill, Ink text. Secondary actions are underlined text links, not ghost buttons.
- **Forms.** White card, 1px Mist border, labels above inputs, 2px radius
  inputs, focus state: 2px Ink outline with 2px offset.

## Motion
- Hero mosaic: as supplied.
- Specimen toggle: replaced values cross-fade (200ms) between original and label.
  This is the one orchestrated moment below the hero.
- Commission estimate: the figure updates on input. No count-up animation.
- Accordion: the plus rotates 45 degrees (150ms).
- Nothing animates on scroll.
- `prefers-reduced-motion: reduce` disables the mosaic and every transition.

## Rules
- No uppercase labels, no tracked-out eyebrows, no `A · B` strings, no arrows
  appended to links, no single-word highlight in a heading.
- Glacier marks replaced or "us." If a use of Glacier doesn't mean one of those
  two things, remove it.
- One primary button per viewport.
- Every number on the page has its source within the same row or caption.
- Placeholders render as visible bracketed text (`[BUYER]`), never hidden.
- Accessibility floor: 4.5:1 text contrast, visible keyboard focus everywhere,
  form labels on every input, the specimen toggle exposed as buttons with
  `aria-pressed`, the result of the eligibility check in an `aria-live` region.
