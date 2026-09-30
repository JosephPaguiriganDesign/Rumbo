# Stamp

A worn-ink rubber stamp: SVG with the shared `#wear` filter, multiplied onto paper. Round, draft box, and the hero’s boxed kicker.

**Extracted from the site:** `.stamp`, `.stamp--draft`, `.stampline__box`, `<filter id="wear">`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| kind | round \| draft \| box | round |  |
| word / date / ring / sub | string | – | Words on the stamp. |
| color | tertiary \| primary \| error | tertiary | Ink colour role. |
| still | boolean | true | `false` = site rotation (−14°, 6°). |
| ariaLabel | string | auto | What the stamp says, in a sentence. |


**Variants and states shown:** round · draft · box · colours · tilted.

## Usage

### Do

- Keep the message in `aria-label` (role=img).
- Use at most two stamps in one view.
- Use the box for the section kicker.

### Don't

- Do not use a stamp as the only way to mark “draft” (also say it in text).
- Do not use yellow ink: it is 1.4:1 on paper.
- Do not animate it.

## Accessibility

- `role="img"` with a full-sentence `aria-label` (SVG text is not announced reliably).
- Clay on paper 5.4:1.
- `mix-blend-mode:multiply` on paper; `screen` in dark so the ink still shows.
- Filter is `x=-4%…108%` so worn edges are not clipped.

## Storybook

Run `npm run storybook` and open **Components / Stamp**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
