# Cebu Marathon 2027 — website

Single-page site for the Cebu Marathon 2027 (Sunday, 10 January 2027, SM Seaside City Cebu). Astro 7 + Tailwind CSS 4, static output, deployed to Netlify from `main`.

## Commands

```
npm install
astro dev --background   # start dev server in the background
astro dev status         # check it; `astro dev stop` / `astro dev logs`
npm run build            # static build to dist/
```

The dev server takes the first free port from 4321. Another local project often holds 4321, so check the port in the `astro dev` output.

## Deploying

- Netlify builds automatically on every push to `main`. Each build costs build credits, so **do not push without being asked**; commit locally and batch changes.
- To push without triggering a build, put `[skip netlify]` in the commit message.
- Netlify needs `PUBLIC_MAPBOX_TOKEN` set as an environment variable (see below).

## Environment

- `.env` holds `PUBLIC_MAPBOX_TOKEN` (a public `pk.` token) for the route map. It is git-ignored; `.env.example` documents it.
- The token ends up in built HTML. GitHub push protection flags it as a secret when pushing build output to a repository.

## Layout

- `src/pages/index.astro` — the page, in section order: Navbar, Hero, LogoMarquee, Distances, Prizes, RaceBento, Route, Stats, History, Perks, Faq, Film, Footer.
- `src/data/event.ts` — **all content**: event facts, categories and race-kit items, prizes, sponsors (with logo pixel sizes), history timeline, hotels, training runs, launch photos, FAQs, footer credits. Change copy here, not in components.
- `src/styles/global.css` — design tokens (`@theme`), fonts, the heading scale and every component style that is not a Tailwind utility.
- `src/components/` — one file per section, plus `CtaButton.astro` (the gold feathered Register button) and `RouteMap.astro` (Mapbox flyover).
- `src/lib/marathonRoute.ts` — 21K route coordinates for the flyover. `scripts/snap-route.mjs` snaps them to real roads via Mapbox Map Matching.
- `src/assets/kit/<distance>/` — race-kit renders, optimised by `astro:assets`.
- `public/images/` — everything else served as-is: sponsor logos, history photos, the feather SVGs in `leaves/`, the launch photo strip in `moments/`.

Source material that is not served lives in the project root and is git-ignored: `Race Kit Entitlements/`, `timeline-photos/`, `0929/`, `bg pattern assets/`, `Leaves.svg`, the Dirtylane `.otf`.

## Design system

- Type: **Noto Sans JP** for headings (900) and body (400); **Dirtylane** (demo cut) for script words. Archivo is loaded only as the fallback that supplies the peso sign (₱), which Noto's Latin subsets lack.
- Every font size is in `rem`. The root font size is fluid between 992px and 1440px wide, so desktop type scales down on smaller laptops; below 992px it stays 16px.
- Headings use the scale in `global.css`: `.type-h1`, `.headline` (section H2), `.type-h3`–`.type-h5`, and `.type-stat*` for numerals. Don't hand-set heading sizes.
- Script words: `<span class="script feather-text">`. On light grounds add `feather-text--deep` so the gradient keeps its contrast.
- Colours: navy grounds (`navy-950/900`), cream sections, gold CTAs. Each distance has its own gradient in `distancePalette` (data file), shared by the distance cards and the prize table.
- Text wrapping: paragraphs use `text-wrap: pretty`, headings `balance` (no orphans).

## Conventions and gotchas

- **Scoped `<style>` in components is unreliable here.** A scoped rule silently failed to apply once. Put styles in `global.css`.
- **Unlayered CSS beats Tailwind utilities.** `global.css` is unlayered, so a rule there that sets `display` will override `hidden` on the same element. Wrap the element and put the responsive utility on the wrapper instead.
- **Arbitrary Tailwind variants that target BEM classes** (`[&_.cta__button]:…`) get mangled. Use component props or a global rule.
- Numeric weight utilities (`font-600`) don't exist in Tailwind 4; use `font-semibold`, `font-bold`, etc.
- Hover-only effects go inside `@media (hover: hover)`. On touch devices a tap leaves a sticky `:hover` that otherwise holds things open (the pricing cards flip on tap via an `is-flipped` class instead).
- Sponsor logos are sized optically from their pixel dimensions (`w`/`h` in data, optional `boost` for thin marks). When replacing a logo, trim it to the artwork and update `w`/`h`.
- The training-run list marks runs done by date (`on` field) at build time and again in the browser.
- Large video: the hero plays `public/video/hero-2027.mp4` (720p). The film section loads from Wix's CDN and only when scrolled near.

## Content still to confirm with the organisers

- The **15 November 2026** registration deadline and the **World Athletics** badge are not backed by the official site.
- Several history photos (2015, 2019, 2023, 2026) come from news outlets and blogs and need permission or replacing with the organisers' own.
- The flyover route is a hand trace, not the official GPX.
