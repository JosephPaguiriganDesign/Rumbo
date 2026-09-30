# Segmented folder tabs

A pair (or trio) of manila-folder tabs that switch panels. The selected tab lifts, turns yellow, and fuses with its panel.

**Extracted from the site:** `.folder-tabs`, `.ftab`, `.leg[role=tabpanel]`; `selectTab()` in app.js.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| tabs | {n,t,h,p}[] | 2 legs | n = mono kicker, t = tab title, h/p = panel heading and copy. |
| selected | number | 0 | Selected index. |
| label | string | Choose a leg… | `aria-label` of the tablist. |


**Variants and states shown:** first selected · second selected · three tabs.

## Usage

### Do

- Keep tab titles short (2–3 words) with a mono sub-label.
- Use for parallel views of the same thing (two legs of a trip).
- Give every panel `tabindex="0"` when it has no focusable child at the start.

### Don't

- Do not use tabs to hide required form steps.
- Do not use more than 4 tabs on mobile.
- Do not navigate to a new URL from a tab: use links.

## Accessibility

- Pattern: WAI-ARIA Tabs (automatic activation).
- Roving tabindex: only the selected tab is in the tab order.
- Keys: ← → ↑ ↓ move and select, Home/End jump.
- `aria-selected`, `aria-controls`, panel `aria-labelledby`, `hidden` on inactive panels.
- Selected vs unselected is shown by fill + lift + scale, not colour alone. Contrast on-sun-container/sun-container 11.0:1 (light), 7.1:1 (dark).
- Panel entrance animation (`legIn`) is disabled under reduced motion.

## Storybook

Run `npm run storybook` and open **Components / Segmented folder tabs**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
