# Chip (ticket punch)

A choice chip shaped like a ticket with a half-circle punch notch on its left edge. Selecting it fills it cobalt and nudges it right.

**Extracted from the site:** `.choice`, `.punch`, `.punch__body`, `.punch__t`, `.punch__s`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| title / sub | string | – | Bold label + mono sub-label. |
| type | radio \| checkbox | radio | Single or multiple choice. |
| checked | boolean | false |  |
| disabled | boolean | false | Dashed border, 50% opacity. |
| name / value | string | – | Native form fields. |


**Variants and states shown:** default · hover · focus-visible · selected · disabled · disabled + selected · group · checkbox group · group with error.

## Usage

### Do

- Wrap chips in a `<fieldset>` with a `<legend>`.
- Offer a “Not sure yet” option instead of forcing a choice.
- Keep titles under ~16 characters.

### Don't

- Do not use chips as buttons or filters that act instantly.
- Do not hide the native input with `display:none` (breaks keyboard).
- Do not use more than 5 options in a row; use a select.

## Accessibility

- A real `<input>` covers the whole chip (opacity 0, full hit area): native keyboard (arrows for radios, Space for checkboxes) and form semantics.
- Selected is shown by fill, tick (✓), and translation, not colour alone (1.4.1).
- Focus-visible draws a 3px ring around the chip body.
- Group error: `aria-describedby` on the fieldset pointing at the error message.
- Height 56dp. Contrast: on-primary/primary 9.0:1 selected; on-surface/surface-container-lowest 15.5:1 default.

## Storybook

Run `npm run storybook` and open **Components / Chip (ticket punch)**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
