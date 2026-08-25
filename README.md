# fernflores.dev

Personal site of Fernando Flores Hernandez — a static [Astro](https://astro.build) site deployed to
GitHub Pages at **[fernflores.dev](https://fernflores.dev)**.

## Stack

- Astro (`output: "static"`) — no SSR, no client-side framework
- Hand-written global CSS with custom-property colour tokens (light + dark via
  `prefers-color-scheme`, with `data-theme` / `data-palette` overrides on `<html>`)
- Self-hosted fonts via Fontsource: Instrument Sans (prose) and IBM Plex Mono (metadata and the
  brand)
- `@astrojs/sitemap`; `@astrojs/mdx` and `@astrojs/rss` are installed for planned content but not
  yet in use

The header brand plays an intro on every page load: the mark `f2h1` (the initials FFH as a
numeronym) expands in place directly into the full name in one continuous morph. It replays on
click and renders the final frame with no animation under `prefers-reduced-motion`.

## Developing

Requires Node ≥ 22.12.

```sh
npm install
npm run dev      # dev server with HMR, localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built dist/ locally
```

There is no test suite or linter; `npm run build` is the check — it type-checks `.astro` files and
fails on broken imports.

## Layout

```text
src/
├── layouts/BaseLayout.astro   # <html> shell, fonts, header/footer chrome
├── components/                # Header (brand + intro), Footer, RowSection
├── pages/index.astro          # the homepage (currently the only route)
└── styles/global.css          # colour tokens + all site styles
public/CNAME                   # keeps the custom domain attached — do not delete
```

## Deploying

Every push to `main` builds and publishes via GitHub Actions
(`.github/workflows/deploy.yml`). `public/CNAME` and `site` in `astro.config.mjs` are what keep the
custom domain and sitemap URLs correct.
