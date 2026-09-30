# Nav drawer (ticket stub)

Modal navigation that slides in from the right as a full-height ticket stub with a perforated left edge and numbered links.

**Extracted from the site:** `.scrim`, `.drawer`, `.drawer__item`, `.drawer__n`, `setDrawer()` in app.js.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| id | string | auto | Referenced by `aria-controls` and `data-drawer-open`. |
| open | boolean | false | Initial state. |
| current | number | -1 | Index that gets `aria-current="page"` and the sun highlight. |
| tag | string | Summer 2027 · Iberia | Mono kicker. |
| cta | string | Get on the list | Block button at the bottom. |


**Variants and states shown:** closed · open · current item · interactive (trigger + focus trap).

## Usage

### Do

- Number links (01–06) to match the section numerals.
- Close on link click, Escape and scrim click.
- Close automatically if the viewport becomes wide.

### Don't

- Do not nest a second dialog.
- Do not open on hover.
- Do not put forms in the drawer.

## Accessibility

- `role="dialog" aria-modal="true" aria-label="Site navigation"` on a `<div>` (axe rejects role=dialog on `<aside>`).
- Closed = `inert` + `visibility:hidden` so nothing is focusable off screen.
- On open: focus moves to Close; Tab and Shift+Tab wrap inside; Escape closes; focus returns to the opener.
- Page scroll locks with `body.drawer-open{overflow:hidden}`.
- Scrim is a click target only; it is not focusable and not announced.
- Reduced motion: slide becomes an instant swap.

## Storybook

Run `npm run storybook` and open **Components / Nav drawer (ticket stub)**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
