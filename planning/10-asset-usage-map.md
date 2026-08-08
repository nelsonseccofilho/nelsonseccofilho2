# Asset Usage Map

## Home
- HORIZON card: `projects/horizon-his/cover/cover-*.webp`
- SUBITER card: `projects/subiter/cover/cover-*.webp`
- REDE DCC card: `projects/rede-dcc/cover/cover-*.webp`
- DASA card: `projects/dasa-canal-do-consultor/cover/cover-*.webp`
- Selected Work: `projects/connectcar-freeflow/cover/cover-*.webp`

Project names, descriptions and tags remain HTML. Covers intentionally avoid essential baked copy.

## HORIZON case
Use triage prototype, interaction map and (after privacy review) Hospitalar event photo. The result slide is available as secondary proof, but prefer HTML metrics instead of rasterized text.

## SUBITER case
Use the three editorial support visuals until publication clearance allows real UI exports. Label them in the caption as editorial representations when shown.

## DCC case
Use the four curated transactional states in a sequence; do not dump the full Figma canvas.

## DASA case
Use the scalable SVG diagrams as primary visuals in both languages. The Portuguese full editorial board can appear as optional evidence/zoom; it is not a screenshot of the confidential product.

## ConnectCar / Freeflow
Use editorial responsive/component visuals for the Selected Work card. Add real component screenshots from `10:2594` only after export/publication review.

## Future backlog — Theme-aware optimized project covers

Goal: create dedicated optimized cover artwork for Light Theme and Dark Theme for every portfolio project.

Projects:

- HORIZON HIS
- SUBITER
- REDE DCC
- DASA — Canal do Consultor
- ConnectCar / Freeflow

Requirements:

1. Create genuinely adapted Light and Dark artwork.
2. Do not solve this using CSS filters, inversion, brightness hacks or opacity tricks.
3. Preserve the same editorial composition and aspect ratio where practical.
4. Adapt background, contrast, shadows and visual details for each theme.
5. Keep essential textual content in HTML, not baked into raster artwork.
6. Produce responsive image variants for each theme.
7. Optimize file size without meaningful visible quality loss.
8. Theme selection must respect the application's manual theme toggle, not only `prefers-color-scheme`.
9. Theme switching must not introduce layout shift.
10. Review image loading strategy and avoid unnecessary network downloads of both variants if possible.
11. Preserve accessible alt text independently from the theme-specific asset.
12. Validate desktop, tablet and mobile crops.

Suggested asset structure:

```text
public/assets/projects/<project>/cover/
	light/
		cover-640.webp
		cover-1024.webp
		cover-1440.webp
		cover-1920.webp
	dark/
		cover-640.webp
		cover-1024.webp
		cover-1440.webp
		cover-1920.webp
```

Acceptance criteria:

- Light cover visually validated in Light Theme.
- Dark cover visually validated in Dark Theme.
- Manual theme toggle selects the appropriate artwork.
- No CLS during initial render or theme switching.
- No horizontal overflow.
- Responsive crops validated.
- File sizes reviewed and optimized.
- No essential project copy embedded into the raster assets.
- Existing accessibility semantics preserved.
- Performance impact documented before implementation is considered complete.

Note: the current single HORIZON cover is acceptable for the present Phase 2 implementation. This task is intentionally deferred so it does not block Featured Cases development.
