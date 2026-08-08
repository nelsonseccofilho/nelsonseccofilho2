# SEO & Performance Plan

## URL / international SEO
Use stable locale-prefixed routes: `/pt-br/...` and `/en/...`. Each page needs canonical URL plus reciprocal `hreflang` alternatives and `x-default` where appropriate.

## Metadata
Unique title and description per page; Open Graph and social card per case; meaningful favicon/app icons; metadata generated server-side. Avoid keyword stuffing.

## Structured data
- Home: `Person` + `WebSite`.
- Case studies: `CreativeWork`/`Article` only with claims actually supported by the case.
- Breadcrumb structured data for case routes.

## Semantics / crawlability
One clear H1 per page; logical H2/H3 hierarchy; real links for navigation; descriptive anchor text; `main`, `nav`, `header`, `footer`, `article`, `figure`, `figcaption` where appropriate.

## Images
- Use `next/image` for raster assets.
- Source variants in this kit: 640 / 1024 / 1440 / 1920 WebP.
- Use accurate `sizes`; do not send 1920px art to a 390px screen.
- Keep project title/copy as HTML, not baked into cover images.
- Only the actual LCP image may receive `priority` / high fetch priority.
- Below-the-fold images stay lazy.
- Every informative image gets meaningful locale-specific alt text; decorative SVGs use empty alt/aria-hidden.
- Reserve aspect ratio to prevent CLS.

Suggested cover `sizes`:
`(max-width: 767px) 100vw, (max-width: 1199px) 92vw, (max-width: 1599px) 82vw, 1440px`.

## Fonts
Prefer `next/font` with a performant web-safe open family such as Geist/Inter. Keep few weights. Do not use proprietary SF Pro assets.

## Rendering / JavaScript
Prefer Server Components by default. Add Client Components only for real interaction (theme, locale control, motion where required). Keep animation libraries out of static sections unless they provide clear value.

## Motion & Core Web Vitals
CSS transforms/opacity only where possible; avoid animating layout properties; avoid scroll-jacking; no autoplay video above fold; respect reduced motion.

## Launch checks
Lighthouse + real browser test, sitemap, robots, canonical/hreflang, 404, noindex on preview/staging, social card preview, broken-link scan, bundle inspection.
