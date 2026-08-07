# Portfolio — Development Roadmap v1.0

## Objective
Build a new senior Product Designer portfolio from scratch, using a light-first visual system, optional dark theme, Xbox Green as the controlled accent, evidence-led case studies, and restrained premium motion.

## Information architecture
- `/pt-br` and `/en`
- Home
- HORIZON HIS — flagship
- SUBITER — complex systems / inspections / AI
- REDE DCC 1.0 — payments / interaction design
- DASA — Canal do Consultor — discovery / synthesis
- Selected Work — ConnectCar / Freeflow & Design Systems
- About / contact can live on Home first; split only if content pressure justifies it.

## Phase 0 — Foundation
1. Initialize Next.js + TypeScript + App Router + Tailwind.
2. Install shadcn/ui only for primitives actually needed.
3. Add theme architecture: light default + dark toggle + system-aware option only if explicitly selected.
4. Add locale routing (`pt-br`, `en`) and content dictionaries.
5. Add semantic layout, skip link, focus-visible standard, reduced-motion support.
6. Configure Vitest + React Testing Library + jest-dom before first feature component.
7. Configure metadata base, robots, sitemap and structured-data helpers.

**DoD:** tests pass, no hydration warnings, both locales render, theme persists, keyboard navigation works.

## Phase 1 — Global shell
Header, navigation, locale switcher, theme switcher, footer, container/grid, typography and reusable section header.

**Tests:** render, keyboard access, active route, locale/theme controls, reduced motion.

## Phase 2 — Home
1. Typographic hero: positioning + short value proposition. Avoid a heavy hero image for LCP.
2. Featured cases: HORIZON → SUBITER → REDE DCC → DASA.
3. Selected Work: ConnectCar / Freeflow.
4. Seniority/value section: Strategy → Complex Systems → Delivery → Discovery → Design Systems.
5. About/contact CTA.

**Motion:** reveal only after content is readable; no scroll hijacking; hover is enhancement, never sole affordance.

## Phase 3 — Case template
Create one reusable evidence-led case template: Hero → Context → Challenge → Role → Process → Decisions → Evidence → Result → Reflection/Next case.

Implement HORIZON first, validate template, then SUBITER, DCC and DASA.

## Phase 4 — SEO & performance hardening
Metadata per locale/page, canonical/hreflang, Person + WebSite + CreativeWork JSON-LD, OG cards, image `sizes`, route prefetch review, font loading, bundle audit, Lighthouse/Core Web Vitals pass.

## Phase 5 — Cross-device QA
Required: 1920+, 1366, 1024, 768, 430, 390, 360. Validate visual hierarchy, keyboard, touch targets, overflow, image crops and motion.

## Phase 6 — Launch QA
Content/claim guardrail pass; accessibility pass; tests; broken links; sitemap/robots; social cards; analytics only if privacy-conscious and intentionally selected.
