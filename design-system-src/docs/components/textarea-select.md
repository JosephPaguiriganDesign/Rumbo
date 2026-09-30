# Textarea & select

The same underlined field, for multi-line text and native selects with a hand-drawn chevron.

**Extracted from the site:** `.tf--select`, `.tf__arrow` in styles.css; textarea is a DS addition.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| label | string | – |  |
| hint | string | – | Textarea helper. |
| error | string | – |  |
| rows | number | 4 | Textarea rows. |
| options / value / placeholder | string[] | – | Select options. First option is a real empty value. |
| floating | boolean | false |  |


**Variants and states shown:** textarea: default, floating, error, disabled · select: default, selected, floating, error, disabled.

## Usage

### Do

- Use a native `<select>`: it is the best mobile picker.
- Make the first option a human sentence: “Pick one (or don’t)”.
- Let textareas resize vertically.

### Don't

- Do not build a custom listbox for five options.
- Do not cap length silently: show the limit.
- Do not disable resize horizontally-only; leave `resize:vertical`.

## Accessibility

- Native select and textarea semantics, keyboard and mobile pickers come free.
- Chevron is `aria-hidden` and `pointer-events:none`.
- Same error and label pattern as Text field.
- Options set `color` to ink on paper so the open list is readable in dark mode.

## Storybook

Run `npm run storybook` and open **Components / Textarea & select**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
