# Accessibility

**Target: WCAG 2.2 Level AA**, plus the bits of AAA that are cheap (7:1 body text, 48dp targets, no motion-only meaning). Everything here was measured from the token values or tested in the built Storybook.

## 1. Contrast (measured)

Computed by `npm run contrast` (WCAG relative luminance, no rounding up). Text needs 4.5:1, large text (≥24px, or ≥18.66px bold) and UI components/graphics need 3:1.

### Light: day dispatch

| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `#221d18` on `#f4ecdb` · on-surface / surface | 14.22:1 | 4.5:1 (text) | AAA | Body text on page |
| `#5a4f42` on `#f4ecdb` · on-surface-variant / surface | 6.79:1 | 4.5:1 (text) | AA | Lead paragraphs, hints, labels |
| `#5a4f42` on `#fbf6ea` · on-surface-variant / surface-container-lowest | 7.40:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `#5a4f42` on `#efe6d2` · on-surface-variant / surface-container-low | 6.43:1 | 4.5:1 (text) | AA | Text on Sample fortnight band |
| `#221d18` on `#fbf6ea` · on-surface / surface-container-lowest | 15.49:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `#1d3b9e` on `#f4ecdb` · primary / surface | 8.23:1 | 4.5:1 (text) | AAA | Links |
| `#fbf6ea` on `#1d3b9e` · on-primary / primary | 8.97:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `#d9e0f8` on `#1d3b9e` · on-primary-muted / primary | 7.35:1 | 4.5:1 (text) | AAA | Stepper body on cobalt |
| `#f3c63d` on `#1d3b9e` · highlight-on-primary / primary | 5.97:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `#0c1a4d` on `#d9e0f8` · on-primary-container / primary-container | 12.57:1 | 4.5:1 (text) | AAA | Info banner |
| `#2b241b` on `#e8dcc3` · on-secondary-container / secondary-container | 11.27:1 | 4.5:1 (text) | AAA | Success banner |
| `#a33f18` on `#f4ecdb` · tertiary / surface | 5.44:1 | 4.5:1 (text) | AA | Mono kickers, margin notes, drawer numbers |
| `#a33f18` on `#fbf6ea` · tertiary / surface-container-lowest | 5.93:1 | 4.5:1 (text) | AA | Sheet kicker, day date |
| `#fffaf2` on `#a33f18` · on-tertiary / tertiary | 6.16:1 | 4.5:1 (text) | AA | Accent button |
| `#3a1204` on `#f6d5c4` · on-tertiary-container / tertiary-container | 12.01:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `#a33f18` on `#f6d5c4` · tertiary / tertiary-container | 4.64:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `#221d18` on `#f3c63d` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `#3a2c00` on `#f8e7ab` · on-sun-container / sun-container | 11.04:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `#a33f18` on `#f8e7ab` · tertiary / sun-container | 5.18:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `#221d18` on `#f8e7ab` · on-surface / sun-container | 13.53:1 | 4.5:1 (text) | AAA | Headline on form band |
| `#ba1a1a` on `#f4ecdb` · error / surface | 5.50:1 | 4.5:1 (text) | AA | Field error text |
| `#ba1a1a` on `#fbf6ea` · error / surface-container-lowest | 5.99:1 | 4.5:1 (text) | AA | Field error text inside form card |
| `#ffffff` on `#ba1a1a` · on-error / error | 6.46:1 | 4.5:1 (text) | AA | "!" badge |
| `#410002` on `#ffdad6` · on-error-container / error-container | 13.26:1 | 4.5:1 (text) | AAA | Error banner |
| `#7d6f5b` on `#f4ecdb` · outline / surface | 4.16:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `#ffffff` on `#2a241d` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 15.34:1 | 3:1 (large text) | AA | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `#221d18` on `#f4ecdb` · on-surface / surface (border) | 14.22:1 | 3:1 (UI) | AA | Field underline, button border |
| `#d3c7ae` on `#f4ecdb` · outline-variant / surface | 1.42:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `#f4ecdb` on `#2a241d` · inverse-on-surface / inverse-surface | 13.06:1 | 4.5:1 (text) | AAA | Cost band |
| `#f3c63d` on `#2a241d` · sun / inverse-surface | 9.47:1 | 3:1 (large text) | AA | Section numeral on ink |
| `#1d3b9e` on `#f4ecdb` · primary / surface (focus ring) | 8.23:1 | 3:1 (UI) | AA | Focus ring, light theme |
| `#f3c63d` on `#1d3b9e` · sun / primary (focus ring on cobalt panel) | 5.97:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `#a49d91` on `#f4ecdb` · on-surface (disabled 38%) / surface | 2.29:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `#221d18` on `#fbf6ea` · receipt-ink / receipt-paper | 15.49:1 | 4.5:1 (text) | AAA | Receipt body |
| `#5a4f42` on `#fbf6ea` · receipt-muted / receipt-paper | 7.40:1 | 4.5:1 (text) | AAA | Receipt kicker/foot |
| `#a33f18` on `#fbf6ea` · receipt-accent / receipt-paper | 5.93:1 | 4.5:1 (text) | AA | Receipt sub line |
| `#f4ecdb` on `#221d18` · footer-on / footer-bg | 14.22:1 | 4.5:1 (text) | AAA | Footer body |
| `#d8ccb4` on `#221d18` · footer-body / footer-bg | 10.51:1 | 4.5:1 (text) | AAA | Disclaimer, credits |
| `#cfc2a9` on `#221d18` · footer-muted / footer-bg | 9.50:1 | 4.5:1 (text) | AAA | Credits note |
| `#b9ab91` on `#221d18` · footer-fine / footer-bg | 7.40:1 | 4.5:1 (text) | AAA | Fine print |
| `#e9865c` on `#221d18` · footer-accent / footer-bg | 6.39:1 | 4.5:1 (text) | AA | Footer tag |
| `#f8e7ab` on `#221d18` · footer-link / footer-bg | 13.53:1 | 4.5:1 (text) | AAA | Footer links |
| `#d9e0f8` on `#1d3b9e` · paper / cobalt (site: primary-container on primary) | 7.35:1 | 4.5:1 (text) | AAA | Site stepper body colour (for reference) |


### Dark: night train

| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `#eee3cc` on `#1a1611` · on-surface / surface | 14.14:1 | 4.5:1 (text) | AAA | Body text on page |
| `#cfc2a9` on `#1a1611` · on-surface-variant / surface | 10.24:1 | 4.5:1 (text) | AAA | Lead paragraphs, hints, labels |
| `#cfc2a9` on `#14110d` · on-surface-variant / surface-container-lowest | 10.70:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `#cfc2a9` on `#211c16` · on-surface-variant / surface-container-low | 9.61:1 | 4.5:1 (text) | AAA | Text on Sample fortnight band |
| `#eee3cc` on `#14110d` · on-surface / surface-container-lowest | 14.78:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `#a9bbff` on `#1a1611` · primary / surface | 9.63:1 | 4.5:1 (text) | AAA | Links |
| `#0c1a4d` on `#a9bbff` · on-primary / primary | 8.85:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `#1b2f7a` on `#a9bbff` · on-primary-muted / primary | 6.48:1 | 4.5:1 (text) | AA | Stepper body on cobalt |
| `#0c1a4d` on `#a9bbff` · highlight-on-primary / primary | 8.85:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `#dbe2ff` on `#25409f` · on-primary-container / primary-container | 7.06:1 | 4.5:1 (text) | AAA | Info banner |
| `#f0e4cb` on `#4a4034` · on-secondary-container / secondary-container | 8.03:1 | 4.5:1 (text) | AAA | Success banner |
| `#ffb595` on `#1a1611` · tertiary / surface | 10.54:1 | 4.5:1 (text) | AAA | Mono kickers, margin notes, drawer numbers |
| `#ffb595` on `#14110d` · tertiary / surface-container-lowest | 11.02:1 | 4.5:1 (text) | AAA | Sheet kicker, day date |
| `#4a1600` on `#ffb595` · on-tertiary / tertiary | 8.75:1 | 4.5:1 (text) | AAA | Accent button |
| `#ffdbcd` on `#7a2c0c` · on-tertiary-container / tertiary-container | 7.42:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `#ffb595` on `#7a2c0c` · tertiary / tertiary-container | 5.61:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `#221d18` on `#f3c63d` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `#fbe9a8` on `#5b4a10` · on-sun-container / sun-container | 7.12:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `#ffb595` on `#5b4a10` · tertiary / sun-container | 5.06:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `#eee3cc` on `#5b4a10` · on-surface / sun-container | 6.78:1 | 4.5:1 (text) | AA | Headline on form band |
| `#ffb4ab` on `#1a1611` · error / surface | 10.60:1 | 4.5:1 (text) | AAA | Field error text |
| `#ffb4ab` on `#14110d` · error / surface-container-lowest | 11.09:1 | 4.5:1 (text) | AAA | Field error text inside form card |
| `#690005` on `#ffb4ab` · on-error / error | 7.72:1 | 4.5:1 (text) | AAA | "!" badge |
| `#ffdad6` on `#93000a` · on-error-container / error-container | 7.24:1 | 4.5:1 (text) | AAA | Error banner |
| `#9a8c76` on `#1a1611` · outline / surface | 5.47:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `#ffffff` on `#eee3cc` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 1.27:1 | 3:1 (large text) | FAIL | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `#eee3cc` on `#1a1611` · on-surface / surface (border) | 14.14:1 | 3:1 (UI) | AA | Field underline, button border |
| `#4a4034` on `#1a1611` · outline-variant / surface | 1.78:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `#2a241d` on `#eee3cc` · inverse-on-surface / inverse-surface | 12.05:1 | 4.5:1 (text) | AAA | Cost band |
| `#f3c63d` on `#eee3cc` · sun / inverse-surface (SITE BUG in dark) | 1.27:1 | 3:1 (large text) | FAIL | Site keeps a sun numeral + #fff headline on the Cost band; in dark the band turns cream (inverse-surface), so both fail. DS receipt/inverse panels use fixed ink instead. |
| `#f3c63d` on `#1a1611` · sun / surface (focus ring) | 11.10:1 | 3:1 (UI) | AA | Focus ring, dark theme |
| `#f3c63d` on `#25409f` · sun / primary (focus ring on cobalt panel) | 5.60:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `#6b6458` on `#1a1611` · on-surface (disabled 38%) / surface | 3.08:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `#25409f` on `#a9bbff` · site: primary-container on primary (dark, for reference) | 4.86:1 | 4.5:1 (text) | AA | What the site does in dark for stepper body: fails, DS uses on-primary-muted |


Reading the tables:
- **AAA** = ≥7:1 for text. **AA** = passes its target. **FAIL** rows are either decorative (`outline-variant`) or documented site issues the DS replaces (see Foundations / Color).
- Disabled controls are exempt from 1.4.3 but stay legible (38% ink label).
- Never put **sun** text on paper (1.4:1). Sun is a fill, a highlighter, or a focus ring on dark or cobalt.
- **Clay on paper** is 5.4:1: fine for text, but mono at 11px in clay is only for kickers of 3+ words, never for the only copy of a fact.

## 2. Focus

- `:focus-visible` = **3px solid ring, 3px offset**, colour `primary` (cobalt, 8.2:1 on paper), switching to **sun** on dark surfaces and on cobalt/ink panels. Ring contrast is measured above (≥5.6:1 everywhere).
- Fields do not use the ring: focus paints a 3px cobalt underline, a yellow wash and a shadow line (cobalt 8.2:1 vs paper).
- Tabs and accordion headers use an **inset** ring (−3px) so it is not clipped by overflow.
- The state layer (currentColor at 12%) is additive. Focus never relies on it alone.
- Sticky app bar + drawer: `scroll-padding-top: bar-h + 16px` keeps focused elements from hiding under the bar (2.4.11 Focus Not Obscured).
- Never `outline:none` without a replacement.

## 3. Target size (2.5.8)

WCAG 2.2 AA asks for 24×24 CSS px. Rumbo holds **48dp**: buttons 48/56, small button 40 + 4px hit-area extension, menu button 48, chips 56, accordion header 64, drawer links 56, tabs 56, close buttons 48×48, credits summary 48. Inline text links inside sentences are exempt but underlined and thick on hover.

## 4. Keyboard patterns

| Component | Keys |
| --- | --- |
| Button / link | Enter (link, button), Space (button) |
| Folder tabs | ← → ↑ ↓ move + select, Home / End; only the selected tab is in the tab order; Tab moves into the panel |
| Accordion | Enter / Space toggle; ↑ ↓ Home End between headers |
| Drawer | Opens from Menu; focus goes to Close; Tab and Shift+Tab loop; Escape closes; focus returns to Menu; also closes if the viewport passes 900px |
| Choice chips | Native radio: arrows move within group, Space selects; checkbox: Space |
| Text fields | Native. Enter submits the form; invalid submit moves focus to the first invalid field |
| Credits | `<summary>`: Enter / Space |
| Skip link | First Tab on every page → “Skip to content” |

## 5. Reduced motion (2.3.3, 2.2.2)

- `prefers-reduced-motion: reduce`: transitions/animations set to 0.01ms, smooth scroll off, reveals shown immediately, tactics board arrows and map route drawn in one step, FAB does not slide.
- Nothing flashes. Nothing auto-plays. The only continuous motion is scroll-linked (route line) and it is fully replaced by the final state.
- Storybook: toolbar **Motion: reduced** applies the rule to any story.

## 6. Images, alt text and photo credit rules

1. Every `<img>` has an `alt` that says what is in the frame: “Tamariz beach and pier on the Estoril coast”. No “photo of”, no keyword stuffing, no place-name-only alts.
2. The visible caption (“Tamariz beach, Estoril coast”) is **not** the alt: it may repeat the place, never the whole description.
3. Decorative pieces (tape, halftone, torn edges, dotted route, stamps' texture) are CSS or `aria-hidden` SVG.
4. SVG illustrations that carry meaning (tactics board, map, stamps) use `role="img"` with a sentence label.
5. Text is never baked into a photo.
6. **Credit every photo** in the footer credits list: author, licence link, source link. CC BY-SA requires attribution; CC0 does not but we credit anyway. `assets/photos/CREDITS.md` is the source of truth.
7. Duotone/halftone is applied in CSS on top of the untouched file, and the credits note says photos are shown in a two-colour treatment.
8. No identifiable minors without written consent. No club logos or stadium shots that imply a partnership.

## 6b. Text alternatives for the effects

Mix-blend and filter effects have no accessible name; the underlying content does. If `mix-blend-mode` is unsupported the `<img>` still shows with its border and caption.

## 7. Forms and errors

Pattern (matches `setInvalid()` in app.js):

1. Every field has a visible `<label for>`. Placeholder is never the label.
2. Required fields are announced (“(required)” in `sr-only`), and `required` is set; `novalidate` on the form so we control the message.
3. Hints are linked by `aria-describedby`.
4. On submit, each invalid field gets: `aria-invalid="true"`, a visible message (“Please enter a valid email address.”) with a “!” badge, a 3px error underline. Colour is never the only signal.
5. Focus moves to the **first** invalid field. A `role="status"` line summarises (“Something needs another look”).
6. Errors clear as soon as the field becomes valid, not on every keystroke before.
7. Message copy: say what to do, not what the user did wrong. “Please enter an age between 12 and 17.”
8. Groups (chips): error is linked to the `<fieldset>` via `aria-describedby`.
9. Success/neutral notes use `role="status"`; only genuine errors use `role="alert"`.
10. Inputs use correct `type` and `autocomplete` (2.1 / 1.3.5).

## 8. Screen reader notes

- Landmarks: skip link, `header`, `nav` (Primary), `main`, `nav` (Mobile, inside the drawer), `footer`. Two navs are distinguished by label.
- Heading order: one h1 (display), h2 per section, h3 for cards/steps/days. Components take a `headingLevel` where needed.
- Big decorative numerals (`01`, step rings, day numbers) are `aria-hidden`: the order is carried by `<ol>`.
- Wobbly SVG filters and worn ink are visual only.
- Stamp, map, tactics board: `role="img"` with a full-sentence label; inner text is not read.
- The hero boarding pass is a labelled `role="group"` so its parts read as one thing.
- Tabs and accordion follow the WAI-ARIA Authoring Practices exactly, so VoiceOver/NVDA/JAWS announce “tab 1 of 2” and “expanded / collapsed”.
- Drawer: `role="dialog" aria-modal="true"` on a `div` (axe rejects it on `aside`); background is not inert in the site; recommended to add `inert` to `main` while open.

## 9. Other rules

- Language: `<html lang="en">`; wrap Spanish/Portuguese phrases of more than a word in `lang="es"` / `"pt"`.
- Zoom: layouts reflow at 320px width and 400% zoom without horizontal scroll (1.4.10). Line length capped at 34–46em.
- Text spacing (1.4.12): no fixed-height text containers.
- Forced colors: focus ring becomes `Highlight`; buttons keep `ButtonText` border; shadows are decoration.
- Print: fixed bar, FAB and drawer are hidden.

## 10. Automated results

Last run: **86 stories × light and dark** loaded in headless Chrome with axe-core (tags wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice; the `region` rule is off because stories are fragments). **Stories with violations: 0.** Load errors: 0.

Automated tools find roughly a third of issues. **Not covered by tooling:** real screen-reader passes, voice control, 400% zoom, forced-colors mode and real touch devices. Do those before publishing.

Run it yourself: in Storybook open any story and use the **Accessibility** panel, or `npm run build-storybook && npm run test:stories`.
