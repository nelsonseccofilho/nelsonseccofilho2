# Implementation Checklist — execução um passo por vez

Cada bloco abaixo termina em **teste + validação + commit**.

### A. Foundation
- [ ] Next.js / TypeScript / App Router / Tailwind
- [ ] Design tokens
- [ ] Light default + dark theme
- [ ] Locale PT-BR/EN
- [ ] Test runner baseline
- [ ] `lint` + tests verdes

Commit: `feat(app): establish portfolio foundation and test baseline`

### B. App Shell
- [ ] Header
- [ ] navigation
- [ ] locale control
- [ ] theme control
- [ ] skip link
- [ ] footer
- [ ] keyboard/focus tests

Commit: `feat(layout): add tested responsive application shell`

### C. Home
- [ ] Hero
- [x] Featured cases structure / ProjectGrid
- [ ] ProjectCard
- [ ] Selected Work
- [ ] seniority/value narrative
- [ ] contact CTA
- [ ] responsive + accessibility tests

Commit: `feat(home): build tested senior product design portfolio home`

### D. Case template
- [ ] semantic article structure
- [ ] reusable metadata
- [ ] evidence figures/captions
- [ ] next/previous navigation
- [ ] tests

Commit: `feat(case-study): add tested evidence-led case template`

### E. Cases
One project at a time: HORIZON → SUBITER → REDE DCC → DASA → ConnectCar.

Each project requires: content check, claim guardrail, image manifest check, alt PT/EN, responsive QA, test, commit.

Example: `feat(horizon): publish tested flagship case study`

### F. Motion
- [ ] feedback first
- [ ] no scroll hijacking
- [ ] reduced motion
- [ ] focus/touch equivalent for hover
- [ ] smoke tests

Commit: `feat(motion): add accessible restrained portfolio interactions`

### G. SEO / Performance
- [ ] per-page metadata
- [ ] canonical/hreflang
- [ ] OG cards
- [ ] sitemap/robots
- [ ] JSON-LD
- [ ] image sizes/loading
- [ ] font strategy
- [ ] Lighthouse/browser check

Commit: `feat(seo): add international metadata and structured data`

### H. Launch QA
- [ ] 1920+
- [ ] 1366
- [ ] 1024
- [ ] 768
- [ ] 430
- [ ] 390
- [ ] 360
- [ ] light/dark
- [ ] PT-BR/EN
- [ ] keyboard/touch
- [ ] tests/lint/build
- [ ] claim review

Commit: `chore(release): complete portfolio launch validation`
