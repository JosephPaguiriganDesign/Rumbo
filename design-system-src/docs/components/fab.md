# FAB / extended button

A little sticker that follows the reader down the page and points at the interest form. Tilted −3°, tonal yellow, hard shadow.

**Extracted from the site:** `.fab`, `.fab.is-visible` (hidden until the hero has passed; hides again when the form is on screen).

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| label | string | "Get on the list" | Visible text (extended) or aria-label (icon/small). |
| kind | extended \| icon \| small | extended | 52dp / 56dp / 48dp |
| href | string | #interest | It is a link, not a button. |
| floating | boolean | false | `true` = position:fixed bottom-right as on the site. |
| state | hover \| focus \| pressed | – | Force a state for docs. |


**Variants and states shown:** extended · icon (56) · small (48) · floating inside a frame.

## Usage

### Do

- Show one FAB per page, aimed at the single conversion.
- Wrap the floating FAB in `<nav aria-label="Quick link">`.
- Hide it when the target is already on screen.

### Don't

- Do not cover content: keep 16px / 28px from the edges and pad the footer.
- Do not add a second floating element.
- Do not animate it in for reduced-motion users (transition drops to 0.01ms).

## Accessibility

- Rendered as a link: activation on Enter.
- Hidden state uses `pointer-events:none` + opacity 0; the site also sets `hidden` until JS runs. Toggle `hidden`/`inert` when off screen so keyboard users cannot tab to an invisible link.
- Contrast on-sun/sun 10.3:1.
- Icon and small kinds need `aria-label`.

## Storybook

Run `npm run storybook` and open **Components / FAB / extended button**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
