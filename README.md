# Rumbo: preview

A **preview** of the Rumbo Summer 2027 youth soccer travel site (Lisbon → Málaga) and its Storybook design system.

> All trip details, prices, dates, names, safeguarding statements and the contact address are **sample content**, not fact. Nothing here is bookable and the form sends nothing. The page is marked `noindex,nofollow`.

- Site: https://josephpaguirigandesign.github.io/Rumbo/
- Storybook: https://josephpaguirigandesign.github.io/Rumbo/design-system/

## Layout

| Path | What |
| --- | --- |
| `docs/` | GitHub Pages root (served from `main` / `docs`): `index.html`, `styles.css`, `app.js`, `assets/photos/web/` |
| `docs/design-system/` | Built Storybook (relative paths, works under `/Rumbo/design-system/`) |
| `design-system-src/` | Design-system source: tokens, components, stories, docs, scripts, SVG assets (no `node_modules`) |

## Photo credits

Photos are from Wikimedia Commons and are credited in the site footer ("Photo credits") and in `docs/assets/photos/CREDITS.md`. Vasco da Gama Bridge (André B. Matos), Torre de Belém (Rodrigo.Argenton), Tamariz beach (Matti Blume), Alcazaba of Málaga (Diego Delso): CC BY-SA 4.0. Muelle Uno (Zarateman): CC0.

## Rebuild Storybook

```bash
cd design-system-src && npm install && npm run build-storybook
# copy storybook-static/ to ../docs/design-system/
```
Photos are read from `../docs/assets/photos/web` (paths in `src/lib/photos.js` are relative so the build works under a sub-path).
