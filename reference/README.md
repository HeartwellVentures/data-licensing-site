# Reference build

A working, dependency-free build of **Home** and **Partners** that shows the
intended look and feel below the hero. Open `index.html` in a browser.

What it is:
- The visual and behavioral target for everything below the hero
  (`design-direction.md`), using copy deck v2 verbatim.
- Working interactions: eligibility check (prefills the request form), the
  specimen toggle, the commission estimate, native accordions, form validation.

What it is not:
- Not the production site. The hero mosaic here approximates the supplied
  ATRIUM spec; the build uses the supplied spec exactly.
- Forms are not connected. Nothing is sent.
- Refer, About, privacy, and partner-terms pages are not included.

Configuration (`assets/site.js`):
- `SITE.PARTNER_PCT` and `SITE.PARTNER_CAP` stay `null` until decided. While
  null, the commission estimate shows the bracketed formula, never a number.

Every `[CONFIRM: ...]` item is rendered visibly (dashed underline) so it cannot
ship unnoticed.
