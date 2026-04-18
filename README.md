# Alicia & Plants

Landing page for **Alicia & Plants** — a one-woman boutique outdoor plant care service on the Barrier Island, Daytona Beach, Florida.

## What's here

A single-page site with three toggleable visual variations (Postcard scrapbook, Editorial magazine, Field Journal), all rendered client-side from shared hand-drawn botanical SVG illustrations of local flora (saw palmetto, beach sunflower, firebush, muhly grass, plumeria, sea grape, bougainvillea, hibiscus, bird of paradise).

## Files

- `index.html` — entry point (loads fonts, defines palette, mounts variations)
- `illustrations.js` — SVG illustration library
- `vpostcard.js` — Postcard scrapbook variation (default)
- `veditorial.js` — Editorial magazine variation
- `vjournal.js` — Field journal variation

## Local preview

Just open `index.html` in a browser. No build step.

## Switching variations

The variation switcher panel is hidden by default. To preview the other two locally, edit this block near the bottom of `index.html`:

```js
const TWEAK_DEFAULTS = {
  "variant": "postcard" // "editorial" | "journal"
};
```

## Deploy

Served as-is via GitHub Pages from the repository root.
