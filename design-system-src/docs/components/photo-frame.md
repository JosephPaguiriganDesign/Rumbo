# Tape & photo frame

A paper print with a mono caption, held by a torn strip of tape. Photos get a duotone (paper highlights, one ink in the shadows) and a 5px halftone.

**Extracted from the site:** `.pic`, `.pic--tall/wide`, `.duo`, `.duo--cobalt/clay`, `.tape`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| photo | bridge \| belem \| estoril \| alcazaba \| muelle | bridge | Site photos (read from assets/photos/web). |
| duo | cobalt \| clay \| ink \| sun \| plain | cobalt | Duotone ink. `plain` = no treatment. |
| shape | tall \| wide \| square | wide | 3:4, 4:3, 1:1 |
| caption / alt | string | from photo | Caption is visible; alt describes the picture. |
| credit | boolean | false | Show the author on the print. |
| tilt / halftone / showTape | boolean | true |  |
| tapeKind / tapePos | yellow \| clay / a \| b \| corner | yellow / a |  |


**Variants and states shown:** 5 duotones · tall / wide / square · tape positions · with credit.

## Usage

### Do

- Write alt text that says what is in the frame, not “photo of”.
- Credit every photo (CC BY-SA needs it) in the footer credits list.
- Use CSS filters, not baked-in duotones: the original file stays clean.

### Don't

- Do not use photos where kids are identifiable without consent.
- Do not use club logos or stadium shots that imply a partnership.
- Do not put essential text in a photo.

## Accessibility

- `<figure>` with `<figcaption>`; `alt` on the image is unique (caption is not a substitute).
- Tape is `aria-hidden`.
- Caption contrast on-surface-variant/surface-container-lowest 7.4:1; minimum 11px.
- Duotone uses `mix-blend-mode`; forced-colors users still get the raw `<img>` and border.
- Photos never carry text or information that the page does not repeat.

## Storybook

Run `npm run storybook` and open **Components / Tape & photo frame**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
