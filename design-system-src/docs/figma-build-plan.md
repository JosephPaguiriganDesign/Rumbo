# Figma build plan

There is **no Figma connector** here and no Figma file was created or opened. This document, plus the generated files, is everything a designer needs to build the Rumbo library and pages by hand or with plugins. Nothing was imported into Figma, so every import path below is **unverified against a live file**.

## 0. What to import

| File | Use |
| --- | --- |
| `tokens/tokens-studio.json` | **Tokens Studio for Figma** plugin → Settings → Import → JSON. Sets: `core/palette`, `core/fixed`, `core/type`, `core/space`, `core/shape`, `core/elevation`, `core/motion`, `core/z-breakpoint`, `theme/light`, `theme/dark`. Themes: **Light (day dispatch)** and **Dark (night train)** (dark enables `theme/light` then `theme/dark` so roles that do not change inherit). Tokens Studio can then push to native Figma Variables. |
| `tokens/figma-variables.json` | Payload shaped for the Figma Variables REST API (`POST /v1/files/:key/variables`, Enterprise plan). If you have no Enterprise plan, use it as a spec: 7 collections, 201 variables. |
| `figma-assets/svg/**` | Drag into Figma. 33 SVGs: icons (24px grid, static hex), stamps, graphics, torn edges. SVG filters are stripped (Figma ignores `feTurbulence`): rebuild wobble/worn ink with the recipes in section 2.7. |
| `figma-assets/pages/*.png` | **Reference only**: page-level and section screenshots of the built site at 1280 and 390 (plus 1280 dark). Place them on a "Reference" page, locked, and design over/next to them. |
| `screenshots/*.png` | Storybook renders of each component (light + dark) for checking your components. |
| Fonts | Install: Fraunces (variable, with SOFT + WONK), Atkinson Hyperlegible Next 400/500/700, DM Mono 400/500, Caveat 600/700. All are on Google Fonts (open licence). |

Regenerate everything with `npm run tokens && npm run figma-assets`.

---

## 1. File structure (pages in the Figma file)

Create **one file**: `Rumbo · Design System + Pages`. Pages, in order:

| # | Page | Contents |
| --- | --- | --- |
| 1 | **Cover** | 1440×1024 frame, see 1.1 |
| 2 | **Guide** | How to use the file, see 1.2 |
| 3 | **Foundations** | Colour, type, spacing, shape, elevation, motion swatch boards (light + dark side by side) |
| 4 | **Icons & graphics** | Imported SVGs as components |
| 5 | **Components** | Component library with variants, see section 3 |
| 6 | **Home · Desktop 1280** | see 4.1 |
| 7 | **Home · Mobile 390** | see 4.2 |
| 8 | **Sample pages** | Trip detail, Apply, FAQ, Cost, Team, Blank template (5.1 – 5.6), each at 1280 + 390 |
| 9 | **Reference (locked)** | `figma-assets/pages/*.png` |
| 10 | **Archive / scratch** | Empty |

### 1.1 Cover (1440×1024)

- Ground: paper `#f4ecdb` + paper-noise tile (`svg/graphics/paper-noise-tile.svg`, 10% opacity overlay).
- Top-left: brand mark + "Rumbo" (Fraunces 800, 64px, SOFT 100 WONK 1). Under it: `DESIGN SYSTEM STARTER · v0.1` in DM Mono 14px uppercase, tracking 0.14em, clay, inside a 2px clay box rotated −2° (the stampline).
- Centre-right collage (same recipe as the hero): tactics board card rotated −3.5° (`svg/graphics/tactics-board.svg`), duotone photo print rotated 4.5° with yellow tape, boarding pass rotated −2.5° (component), round stamp rotated −14° at 92% multiply.
- Bottom-left, Caveat 700 24px clay: "a travel dispatch pinned to a tactics board".
- Bottom row: five swatches (paper, ink, cobalt, clay, sun) 96×96 with 2px ink border and elevation/2 shadow, hex in DM Mono.
- Status chip (component `Tag`): `Draft` / `In review` / `Ready`. Update it per release.

### 1.2 Guide page (1440×auto)

Sections, each a 1200-wide frame on paper with a mono kicker `01`…`06` and a Fraunces headline:

1. **What this is**: two sentences; link to Storybook (local) and the repo folder.
2. **How the file is organised**: the page table above.
3. **Variables**: explain the 7 collections and which modes exist (table in section 2). "Never use a raw hex. Bind fills to `Theme/md-sys-color/*`."
4. **Light and dark**: how to flip the mode on a frame (frame → Layout → Variable mode → Theme: Dark). Provide one example frame pair.
5. **Components**: naming (`Button/Filled/Default`), how to swap variants, "detach nothing".
6. **Do / Don't** (from the Usage guide) and **Voice** (specific, warm, wry; banned words list).
7. **Adding a page**: duplicate `Sample pages / Blank template`, keep header and footer instances, set the frame to the right size, use the section recipes.
8. **Accessibility checklist** for designers: contrast pairs from `docs/accessibility.md`, 48dp targets, focus states designed for every interactive component, alt text and photo credit written on the frame as a sticky note, reduced-motion note for anything animated.
9. **Changelog**.

---

## 2. Variable collections

Create these collections (names exact; they map 1:1 to `figma-variables.json`). Use slash groups.

| Collection | Modes | Variables | Types |
| --- | --- | --- | --- |
| **Primitives** | Default | `palette/paper|ink|cobalt|clay|sun|paper-light|night|night-text`, `fixed/receipt-*`, `fixed/footer-*`, `fixed/duo-*`, `fixed/ink-line` | COLOR |
| **Theme** | **Light**, **Dark** | `md-sys-color/<role>` for all 42 roles: primary…on-primary-container, secondary…, tertiary…, error…, background, surface, on-surface, surface-variant, on-surface-variant, outline, outline-variant, shadow, scrim, inverse-*, surface-container-lowest…highest, surface-tint, **sun, on-sun, sun-container, on-sun-container**, **highlight-on-primary, on-primary-muted, sun-outline** | COLOR |
| **Type** | Default | `family/display|body|label|hand` (STRING), `size/*` (FLOAT px, max of fluid range), `weight/*`, `leading/*`, `tracking-em/*` | mixed |
| **Space** | Default | `space/0…24` (0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96) | FLOAT |
| **Shape** | Default | `corner/*`, `border/*`, `cut/<name>/tl|tr|br|bl`, `elevation/1|2|3/offset`, `elevation/*/color`, `elevation/*/color-dark` | FLOAT, COLOR |
| **Motion** | Default | `duration/*` (ms), `easing/*` (STRING bezier) for prototype smart-animate | FLOAT, STRING |
| **Layout** | **Mobile 390**, **Desktop 1280** | `bar-h` (64/72), `gutter` (19.5/48), `max-width`, `touch-target`, `z/*` | FLOAT |

Notes:
- In **Theme**, values for light and dark must equal `tokens.json` `color.light.*` / `color.dark.*` (dark falls back to light where the site does not override).
- Fluid type: Figma has no `clamp()`. Store the **max** in `Type/size/*`, then on 390 frames override with the min from `tokens.json` (`$extensions.rumbo.min`): display 44px (2.75rem), headline-large 33.6px, headline-medium 25.6px.
- Cut corners: Figma supports per-corner radius, so bind each corner (`cut/primary/tl` = 22, `tr` = 5, `br` = 22, `bl` = 5). Alt diagonal: 5, 20, 5, 20.
- Hard shadows: drop shadow, x = y = 2/3/5, blur 0, colour `ink @ 90%` (light) or `#000 @ 80%` (dark). Make three **Effect styles**: `Elevation/1|2|3`, and `Soft/pinned` (two layers: 0/1/1 @18%, 0/10/20/−8 @35%).
- Text styles (create from `Type`): `Display/Large` (Fraunces Bold 700, 90px max, line 98%, tracking −2.5%, SOFT 40 WONK 1), `Headline/Large` (700, 56, 104%, −2%), `Headline/Medium` (650, 36, 110%, −1.5%), `Title/Large` (650, 22, 120%), `Title/Medium` (17), `Body/Large` (Atkinson 400, 17/160%), `Body/Medium` (15), `Label/Large` (Atkinson 700, 14, +2%), `Label/Mono` (DM Mono 500, 12, uppercase, +2%), `Label/Mono Wide` (+8%), `Caption/Mono` (11), `Hand/Margin note` (Caveat 700, 22), `Lead` (20/155%).

### 2.7 Effect recipes (Figma has no SVG filters)

- **Wobble (hand-drawn lines)**: draw with the pen tool and Pencil at 1–2px jitter, or apply *Distort* via a plugin (Distort/Noise). Or use the exported `tactics-board.svg`/`route-map.svg`, which already contain the wobbly paths.
- **Worn ink (stamps)**: apply a Noise effect (Figma "Noise", mono, 30–40% density, size 1) as a **mask** on the stamp group; use Multiply blend.
- **Duotone photo**: image → Fill 1 = photo, Adjustments: Saturation −100%, Contrast +15%, Blend *Multiply* over a Fill 2 = colour (cobalt/clay). Overlay a `halftone-5px` pattern (tile 5px) at 55%, Multiply.
- **Torn edges**: import `svg/edges/torn1…5, wave1`; set the fill to the section's fill variable; place the top of the section at y = −29.
- **Ticket notches**: boolean subtract circles r = 8 at 74% from the top and bottom of the pass; or `svg/graphics/ticket-punch-notch.svg` for the chip.
- **Paper noise**: `paper-noise-tile.svg` as an image fill, tile, 10%.

---

## 3. Component library (page "Components")

Build each as a component set. Property names in **bold**; values after `=`. Use auto-layout everywhere. Each component set has variants for **Theme mode is handled by the variable mode**, so do not create light/dark variants; just check both modes.

Layout for the page: a 1440-wide frame per component: title (Fraunces 40), description, the set, a "Do / Don't" pair, an a11y sticky. Row order below.

| # | Component | Properties → variants (count) | Sizes / notes | Storybook story |
| --- | --- | --- | --- | --- |
| 1 | **Button** | **Variant** = filled, tonal, outlined, accent, text · **Size** = sm 40, md 48, lg 56 · **State** = default, hover, focus, pressed, disabled · **Icon** = none, trailing, only (5×3×5×3 = 225; build the 75 that differ, put Icon as boolean) | cut corners, 2px ink border, elevation/2 (filled, accent), /1 (tonal), none (outlined, text); text button = wavy underline (draw as a 1.5px wave line component) | Components/Button |
| 2 | **FAB** | **Kind** = extended 52, icon 56, small 48 · **State** = default, hover, pressed, focus | sun fill, rotated −3° | Components/FAB |
| 3 | **Top app bar** | **Layout** = wide 1280×72, compact 390×64 · **Scrolled** = off/on · **Current** = 0…5 or none · route line progress as a nested component | paper 94% + noise; bottom 1.5px ink; dotted route line 6px at the bottom | Components/Top app bar |
| 4 | **Nav drawer** | **Open** = closed (hidden), open · **Current** = none, 1…6 | 360w (88vw max), full height, left edge = perforation (radial dots 12×24), 2px ink left border, items 56dp, numbers clay mono | Components/Nav drawer |
| 5 | **Folder tabs** | **Tabs** = 2, 3 · **Selected** = 1…3; Tab is a sub-component **State** = selected, unselected, hover, focus, disabled | selected: sun-container, lifted 3px, top-padding 14; unselected: surface-container, scaled 97%; panel attached (sun-container, 2px ink, elevation/3) | Components/Folder tabs |
| 6 | **Card** | **Variant** = paper, sun, tonal, flat · **Media** = off/on · **Tape** = off/on · **Tilt** = off/on · **State** = default, hover (interactive), focus | 20/22 padding, 2px ink, cut/day radius; media 16:9 duotone | Components/Card |
| 6b | **Receipt** | **Layout** = desktop 640 (2-col ledger), mobile (1-col) | paper-light fixed; top 8px stripe cobalt/clay 20px; bottom zigzag mask 16×8; price 128px max | Components/Card → Receipt |
| 7 | **Chip (ticket punch)** | **Type** = radio, checkbox · **State** = default, hover, focus, selected, disabled, disabled-selected, error | 56dp, cut/ticket radius, left half-circle notch (14px) | Components/Chip |
| 8 | **Text field** | **Style** = label-above, floating · **State** = default, hover, focus, filled, error, disabled · **Hint** = off/on · **Width** = full, short 240 | 52dp min, 2.5px ink underline; focus: cobalt underline + 3px cobalt shadow + sun 34% wash; error: error underline + error-container 55% wash + "!" badge message | Components/Text field |
| 9 | **Textarea / Select** | **Type** = textarea, select · **Style/State** same as field | textarea min 120; select chevron 24px right | Components/Textarea & select |
| 10 | **Accordion** | **Item state** = closed, open, hover, focus, disabled · group **Variant** = rule, card | header 64dp; icon 36px wobbly ring, rotates 135° + sun fill when open | Components/Accordion |
| 11 | **Stepper** | **Tone** = primary (on cobalt), paper · **Step state** = default, current, done | 56px wobbly ring numerals; dashed 1.5px rules | Components/Stepper |
| 12 | **Timeline day** | **Kind** = normal, wk, match, fly · **Current** = off/on | 54px number column; left border 6px; odd/even rotate ∓0.35° | Components/Timeline |
| 13 | **Banner** | **Tone** = note, info, warn, error, success · **Dismiss** = off/on | dashed 1.5px (note, info, warn, success), solid 2px (error); cut/banner | Components/Banner |
| 14 | **Stamp** | **Kind** = round, draft, box · **Colour** = clay, cobalt, error | multiply | Components/Stamp |
| 15 | **Tape** | **Colour** = yellow, clay · **Position** = a, b, corner | 72×22 (yellow), 84×24 (clay) | Components/Tape & photo frame |
| 15b | **Photo frame** | **Shape** = tall 3:4, wide 4:3, square · **Duotone** = cobalt, clay, ink, sun, plain · **Credit** = off/on | print: paper-light, 6/6/22 padding, 1.5px ink, soft shadow; caption DM Mono 11px | same |
| 16 | **Boarding pass** | **Size** = small (hero), large · **Tilt** = off/on | 2-col 1fr/26%; stub dashed 2px | Components/Boarding pass |
| 17 | **Team-sheet row** | **Row** = default; container **Sheet** = tilted, flat | 28/86/1fr columns | Components/Team sheet |
| 17b | **Person card** | **Tone** = default, sun · **Tags** = 0…3 | 56px ring number | same |
| 18 | **Section divider** | **Edge** = torn1…5, wave1 · **Fill** = paper, lowest, cobalt, clay, ink, sun (bound to variable) | 1200×30, overlaps −29 | Components/Section divider |
| 19 | **Route line** | **Progress** = 0, 25, 50, 75, 100 · **Stops** = 3 | dotted 10×6 | Components/Route line |
| 20 | **Footer** | **Credits** = closed, open · **Layout** = desktop, mobile · **Tear** = on/off | ink `#221d18` fixed | Components/Footer & credits |
| — | **Tag** | **Style** = ink (match day), clay outline | mono 11px, rotate −2° | (inside Timeline/Person) |
| — | **Section header** | **Numeral** = 01…07 · **Tone** = paper, primary, ink, tertiary | numeral is 144px Fraunces 800 at −5°, behind headline (z −1) | (page pattern) |
| — | **Facts list (dl)** | rows 2…6 | 6.4rem term column, dashed rows | (inside Card / Trip detail) |
| — | **Ledger list** | **Kind** = in (tick), out (cross) | | (Receipt) |
| — | **Margin note** | **Arrow** = off/on | Caveat 700, clay, rotate ±3° | (page pattern) |

Every interactive component set must contain a **Focus** variant: 3px `Theme/md-sys-color-primary` outline (sun in dark), offset 3, drawn *outside* the frame.

### 3.1 Icons & graphics (page "Icons & graphics")

Import `figma-assets/svg/icons/*.svg` as components (24px frame, `Color` = ink bound to a variable via fill override). Import stamps and graphics as components. Group: `Icon/…`, `Stamp/…`, `Graphic/…`, `Edge/…`.

---

## 4. Full page designs: Home

Source of truth: the built site (`figma-assets/pages/site-full-1280.png`, `site-full-390.png`, plus per-section PNGs). Copy layout, then bind every fill/text to variables and replace groups with component instances.

Common: paper ground, max content width **1180**, gutter 48 (desktop) / 19.5 (mobile), 12-col grid with 24 gutter on desktop; 4-col grid on mobile with 16 margin. Section vertical padding: `clamp(72, 11vw, 132)` → 132 desktop, 72 mobile.

### 4.1 Home · Desktop 1280 (frame 1280 × ~10 260, auto-layout vertical, gap 0)

Reference heights from the built site (1280 wide): header 72, hero 883, route 2027, how 1092, week 1538, people 1209, cost 1144, faq 820, form 1068, footer 489.

| # | Section | Frame | Layout | Components |
| --- | --- | --- | --- | --- |
| 0 | **Top app bar** (fixed, drawn at top of frame, overlays hero) | 1280×72 | brand left; 6 links; CTA right | Top app bar / wide, Button / tonal / sm (44) |
| 1 | **Hero** `#top` | 1280×883, paper + sun radial glow (560px circle, top 8% right −8%) | 2 columns 7fr/6fr, gap 40, vertically centred. Left: Stamp/box "Summer 2027 · Iberia", Display (`Lisbon to Málaga, two weeks, one ball.` with italic clay `one ball.`), Lead, Actions (Button filled lg + text lg), Hand note. Right: **collage** 620×670: board-back (cobalt tint tile, rotate 5°), Tactics board card (rotate −3.5°), Photo frame wide (bridge, cobalt, tape a, rotate 4.5°), Boarding pass (rotate −2.5°), Stamp round (rotate −14°), Margin note w/ arrow (right top, rotate 3°) | Button, Stamp, Photo frame, Tape, Boarding pass, Margin note |
| 2 | **Route** `#route` (01) | 1280×2027, surface-container-lowest, top **Section divider torn1** | Section header (numeral 01, headline `Two coasts, seven days each` with `.hl`, lead 36em max) → Map card (1180×~640, 2px ink, elevation/3, rotate −0.6°) with Stamp/draft top-right → Folder tabs (2) + leg panel: 2-col 6fr/5fr, left: two Photo frames (tall + wide), right: title-xl, body, Facts list (4 rows), Button filled | Section header, Divider, Route line (map version), Folder tabs, Photo frame, Facts list, Button |
| 3 | **How** `#how` (02) | 1280×1092, **primary** ground + azulejo overlay (masked to the right 70%), divider torn2 | Section header (numeral sun); Stepper/primary (5 steps, max 672w, left margin 8%); play-arrow graphic right (120×220, sun, rotate) | Stepper, Divider |
| 4 | **Week** `#week` (03) | 1280×1538, surface-container-low, divider torn3 | Header row 1.4fr/1fr: header + lead left; **image slot** card (380w, rotate 1.4°, illustration or real photo + caption) right. Timeline: 2 columns × 7 rows of Timeline day (gap 14/32), second column offset +56 | Timeline day ×14, Photo frame/slot |
| 5 | **People** `#people` (04) | 1280×1209, tertiary-container, divider torn4 | Header full width; grid 5fr/6fr gap 64: Team sheet (rotate −1.4°) | Team sheet; **Care list** (dl, 4 rows: 72px Fraunces ratio `1:6` + text, 2px ink rules) |
| 6 | **Cost** `#cost` (05) | 1280×1144, inverse-surface, divider torn5 | Header (headline white); Receipt (640w, margin-left 6%, rotate 1°) | Card / Receipt |
| 7 | **FAQ** `#faq` (06) | 1280×820, paper | 2 columns 5fr/7fr sticky header left with Margin note ("the first one matters most"); Accordion ×6 right | Accordion |
| 8 | **Interest form** `#interest` (07) | 1280×1068, sun-container, divider torn1 | 2 columns 5fr/6fr: header sticky left; **Form card** right (640w, paper-light, 2px ink, elevation/3, rotate 0.5°, clay tape on top-left): Banner/note, Text field ×3 (name, email, age short), Select, Choice group (3 chips, 3 cols), Button filled lg block | Text field, Select, Chip group, Banner, Button, Tape |
| 9 | **Footer** | 1280×489, ink, divider torn3 | as component | Footer |
| 10 | **FAB** (floating, shown in one state frame) | 52px | right 28 bottom 28 | FAB |

Also produce **states frames** next to the page (not in it): drawer open (see mobile), route-map drawn at 0/50/100%, FAQ item open/closed, form in error state (all three required fields invalid, focus on the first).

### 4.2 Home · Mobile 390 (frame 390 × ~12 570)

Reference heights (390 wide): header 64, hero 1209, route 1709, how 1200, week 2644, people 1745, cost 1234, faq 888, form 1335, footer 614.

| # | Section | Layout changes vs desktop |
| --- | --- | --- |
| 0 | Top app bar / compact | Brand + Menu button (48). No links, no CTA (CTA lives in the drawer + FAB). |
| 1 | Hero | Single column, gap 44: copy first (Display at 44px, Lead 17px), Actions wrap (gap 14/18), Hand note. Collage below: 342×~400 (aspect 1/1.18), same pieces at 58/56/52/74% widths; margin note hidden. |
| 2 | Route | Header, Map (342 wide, 2px ink, elevation/3), Folder tabs (2 tabs share the row, tab text 16px), leg panel single column: photos 5fr/6fr row, then text and facts (term 6.4rem), Button. |
| 3 | How | Header, Stepper 1 column (ring 56 + text), no arrow. |
| 4 | Week | Header, image slot 342w, Timeline one column (14 cards, gap 12). |
| 5 | People | Team sheet full width (rotate −1.4°), Care list 1 column: ratio 48px above label. |
| 6 | Cost | Receipt full width, columns stacked, price 72px. |
| 7 | FAQ | Header, Accordion full width. |
| 8 | Form | Header, Form card full width, chips stacked 1 column, all fields full width. |
| 9 | Footer | Stacked, credits summary 48dp. |
| — | FAB | Right 16, bottom 16. |
| — | **Drawer (state frame)** | 390×844: scrim 50% ink, drawer 343w (88vw), items 56dp, Close 48, CTA block. |

Deliver both frames with **Layout** variable mode set (Mobile 390 / Desktop 1280) so `bar-h` and `gutter` bind.

---

## 5. Sample pages (page "Sample pages")

Each sample uses the **Top app bar** and **Footer** instances, the same 1180 content width and section rhythm, and exists at **1280 (desktop)** and **390 (mobile)**. Copy is placeholder (mark sample values), voice rules apply. Every page gets a top **hero-lite**: Section header with a mono kicker + Fraunces headline + lead (no collage), then sections. Between colour bands, use Section dividers (vary the edge).

### 5.1 Trip detail (`/trip`)

- **Frame:** 1280 × ~3600, 390 × ~5200.
- **Sections:**
  1. **Page header** (paper): Stamp/box `Summer 2027 · Iberia`, headline "Two weeks, two coasts, one squad", lead, Route line (progress 0, 3 stops), Button filled (`Get on the list`) + text (`See the cost`).
  2. **Overview strip** (surface-container-low, divider torn3): 3 Cards (sun, paper, paper): Dates (Boarding pass inside), Where we stay, Football per day. Mobile: stacked.
  3. **The legs** (lowest, divider torn1): Folder tabs (Lisbon / Málaga) + panel with two Photo frames, Facts list, Button. Same as home route, no map.
  4. **Day by day** (paper): Timeline ×14 in two columns (desktop) / one column (mobile), match days flagged.
  5. **What's included** (tertiary-container, divider torn4): Receipt mini (no price) with ledger in/out.
  6. **CTA band** (primary, divider torn2): Headline white, Stepper/primary (3 steps), Button tonal lg.
- **Components:** Top app bar, Stamp, Route line, Button, Card, Boarding pass, Folder tabs, Photo frame, Tape, Facts list, Timeline day, Receipt/Ledger, Stepper, Section divider, Footer, FAB.

### 5.2 Apply / interest form (`/apply`)

- **Frame:** 1280 × ~2100, 390 × ~2900.
- **Sections:**
  1. **Header** (sun-container, no divider): Section header (numeral 01), lead "No payment, no commitment."
  2. **Two columns** (desktop 5fr/6fr): left sticky: Stepper/paper (3 steps: interest list → chat → deposit) + Margin note; right: **Form card** with Banner/note, Text fields (name, email), short (age), Select (position), Chip group (age group, radio), **Chip group (checkbox)** "Anything we should know?", Textarea (notes, optional), consent line, Button filled lg block.
  3. **Confirmation state frame** (separate): Form replaced by Card/sun "Thanks. You're on the list." + `role=status` Banner/success + Button text (`Back to the trip`).
  4. **Error state frame**: Banner/error at top ("Two things need another look"), first invalid field focused, error messages under each.
  5. **Footer.**
- **Components:** Top app bar, Section header, Stepper (paper), Form card (Card variant + tape), Text field, Select, Textarea, Chip (radio + checkbox), Banner (note, error, success), Button, Margin note, Footer.

### 5.3 FAQ (`/faq`)

- **Frame:** 1280 × ~2000, 390 × ~2600.
- **Sections:**
  1. **Header** (paper): Section header + lead; a **filter row** of 4 Chips (checkbox style, "All / Money / Safety / Travel") above the list.
  2. **Accordion groups** (paper, two columns 5fr/7fr desktop, sticky heading per group): `Safety and staff` (5 items), `Money and paperwork` (4), `Travel and kit` (5). Each group has a mono kicker with count.
  3. **Still stuck?** Card/sun with Button filled (`Ask us`) + Margin note.
  4. **Footer.**
- **Components:** Top app bar, Section header, Chip, Accordion (rule variant, open state on first item), Card/sun, Button, Margin note, Footer.

### 5.4 Cost (`/cost`)

- **Frame:** 1280 × ~2800, 390 × ~3600.
- **Sections:**
  1. **Header** (inverse-surface, divider torn5 on top): Section header (numeral sun), headline white.
  2. **Receipt** (same band): Receipt large (price, ledger in/out). Beside it (desktop, 5fr/6fr): Card/tonal "How payment works" with 3 rows (deposit $500, balance due 1 Apr 2027, what to expect).
  3. **Payment plan** (paper, divider torn3): Stepper/paper (4 steps: chat → deposit → balance → travel docs), each with a date in mono.
  4. **Compare** (surface-container-low): Table-style Facts list: "Rumbo vs an academy camp" with two columns of Facts (no club names on the page: say "an academy camp").
  5. **FAQ mini**: Accordion ×3 (money questions).
  6. **CTA + Footer.**
- **Components:** Top app bar, Receipt, Card (tonal), Stepper, Facts list, Accordion, Banner/note ("Draft price, confirmed before registration opens"), Button, Section divider, Footer.

### 5.5 Team / Who's coming (`/team`)

- **Frame:** 1280 × ~2900, 390 × ~4300.
- **Sections:**
  1. **Header** (tertiary-container, divider torn4): Section header (numeral surface-lowest), lead.
  2. **Team sheet** (same band): Team sheet (rotate −1.4°) + care list (ratio `1:6`, checks, medical, updates).
  3. **Meet the adults** (paper, divider torn1): grid 3 columns (desktop) / 1 (mobile) of Person cards (number, name, role, 0–2 Tags), with one `sun` tone card for the founder.
  4. **How we look after players** (surface-container-low): 4 Cards (paper) with kicker (Staff checks, Medical and insurance, Rooming, Parent updates), each a `dl`-style body.
  5. **Safeguarding note**: Banner/note (`Names above are sample…`).
  6. **CTA + Footer.**
- **Components:** Top app bar, Section header, Team sheet, Person card, Tag, Card, Banner, Care list, Button, Section divider, Footer.

### 5.6 Blank page template (`/template`)

- **Frame:** 1280 × 1400 and 390 × 1400, both with auto-layout, `Layout` variable mode set.
- **Contents (all instances, locked structure):**
  1. **Top app bar** (wide / compact) with `Current` = none.
  2. `<main>` frame: padding-block 132 / 72; **Section header** instance (Numeral = 01, Tone = paper) with placeholder headline + lead.
  3. Empty **content slot** frame with a 12-col (desktop) / 4-col (mobile) layout grid visible, labelled `Drop sections here`.
  4. A **Section starter kit** frame to the side: one of each background band (paper, lowest, low, primary, tertiary-container, inverse, sun-container) with its correct divider and text colours, for copy/paste.
  5. **Footer** instance.
  6. **FAB** instance (optional, toggle).
- **Notes layer** (yellow stickies): heading order (one h1, h2 per section), alt text + credit for every photo, focus variants checked, reduced-motion note, "voice: specific, warm, wry".

---

## 6. Page-level references (for the designer)

`figma-assets/pages/`:

- `site-full-1280.png` (1280×10261), `site-full-390.png` (390×12570), `site-full-1280-dark.png`
- Per section, at 1280, 390 and (1280) dark: `site-header-…`, `site-hero-…`, `site-route-…`, `site-how-…`, `site-week-…`, `site-people-…`, `site-cost-…`, `site-faq-…`, `site-interest-form-…`, `site-footer-…`

These were captured from the built `index.html` with reveal animations forced on, the fixed app bar made static and the FAB hidden. They are **references**: do not trace pixel-for-pixel, rebuild from components.

## 7. Build order (suggested)

1. Install fonts; import `tokens-studio.json` (Light + Dark themes) and confirm swatches match `docs/foundations-color.md`.
2. Create text and effect styles (section 2).
3. Icons & graphics; Buttons; Fields; Chips; Banner (the form kit).
4. Top app bar, Drawer, Tabs, Accordion, Stepper, Timeline.
5. Cards, Receipt, Team sheet, Boarding pass, Photo frame, Stamp, Dividers, Footer.
6. Home desktop, then mobile, then sample pages, then the Cover and Guide.
7. Flip every page to Dark and review against `figma-assets/pages/site-*-1280-dark.png` (note: the site's dark theme has known contrast gaps that the DS corrects; see `docs/foundations-color.md`).
8. Run the designer accessibility checklist (Guide §8).

## 8. Not verified

- No Figma file exists; `figma-variables.json` and `tokens-studio.json` were generated and structurally checked, **not imported**.
- Variant counts above are a design target; the exact matrix is the designer's call.
- Fluid `clamp()` values are approximated with a min and max frame (390 / 1280).
