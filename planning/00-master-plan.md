# Master Plan — New Senior Product Designer Portfolio

## Goal
Build a new portfolio that is elegant, fast, and verifiable, with premium product language, **light theme by default**, optional dark mode, and **Xbox Green (`#107C10`)** as the accent color. References such as OpenAI, Apple, and Samsung define the finish benchmark without copying their interfaces.

## Mandatory rules
1. UX validated through NN/g best practices and heuristics.
2. No feature/component is complete without a basic test.
3. Conventional Commits across all Git history.
4. BEM for semantic custom CSS classes; Tailwind may coexist.
5. Responsiveness validated at 1920+, 1366, tablet, and mobile.
6. SEO, accessibility, and performance are built from the foundation.
7. Images must be local and optimized; the site must never depend on temporary Figma URLs.
8. Product evidence must never be fabricated. Editorial representations must be explicitly labeled as such.

## Editorial architecture
**01 — HORIZON HIS** — flagship: Healthtech · UX Leadership · strategy · prototype · validation.

**02 — SUBITER** — complex systems: inspections · enterprise · post-inspection · AI.

**03 — REDE DCC 1.0** — Payments · Interaction Design · transactional states.

**04 — DASA — Canal do Consultor** — Discovery · research · synthesis · systems thinking.

**Selected Work — ConnectCar / Freeflow** — Mobility · responsive UI · Design Systems.

The professional reading sequence should be: **Strategy → Complex Systems → Delivery → Discovery → Design Systems**.

## Development order
- [ ] 00. Initialize the project and register the testing baseline.
- [ ] 01. Configure tokens, typography, light/dark theme, and containers.
- [ ] 02. Configure Vitest + RTL + jest-dom before the first product component.
- [ ] 03. Configure shell: header, navigation, locale, theme, main, footer, and skip link.
- [ ] 04. Test shell and keyboard accessibility.
- [ ] 05. Build typographic Home and case structure.
- [ ] 06. Implement ProjectCard with responsive covers from this kit.
- [ ] 07. Test ProjectCard rendering, link, alt, and keyboard behavior.
- [ ] 08. Implement reusable case-study template.
- [ ] 09. Build HORIZON and validate the full template.
- [ ] 10. Build SUBITER while respecting publication constraints recorded in the manifest.
- [ ] 11. Build REDE DCC with curated state sequence.
- [ ] 12. Build DASA using only safe editorial representations.
- [ ] 13. Build Selected Work / ConnectCar Freeflow.
- [ ] 14. Implement microinteractions and `prefers-reduced-motion`.
- [ ] 15. Add metadata, canonical, hreflang, OG, sitemap, robots, and JSON-LD.
- [ ] 16. Configure Playwright smoke tests.
- [ ] 17. Run QA at 1920 / 1366 / 1024 / 768 / 430 / 390 / 360.
- [ ] 18. Lighthouse, Core Web Vitals, links, contrast, and claims review.
- [ ] 19. Release.

## Home visual strategy
The hero should be mostly typographic and lightweight. Heavy images start in the project area to avoid harming LCP. Covers use negative space and titles remain in HTML, allowing translation, SEO, and responsive reflow.

## Asset strategy
Raster covers include `640 / 1024 / 1440 / 1920` WebP variants. DASA editorial diagrams are scalable SVG. OG cards are 1200×630. The manifest records provenance, publication status, PT/EN alt text, and cautions for each visual.

## First commit when we move into VS Code
After the foundation is created, tested, and validated:

`feat(app): establish portfolio foundation and test baseline`

No feature commit should be accepted if its corresponding tests are failing.
