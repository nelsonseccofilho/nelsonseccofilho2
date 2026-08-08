# N3LX Portfolio — Decision Log

Objective:

Record product, UX, UI, architecture, technology, content, and process decisions already made during the construction of the new portfolio.

Future decisions may be added chronologically without removing previous decisions.

## D-001 — Full portfolio rebuild

**Status:** Accepted

**Context**
The previous portfolio was moved to `_outofdate/`.

**Decision**
The new portfolio will be rebuilt from scratch within the same repository.

**Rationale**
Legacy code should not automatically influence the new implementation and is excluded from lint/build/test.

**Consequences**
The new implementation can evolve without depending on the previous project.

---

## D-002 — Primary N3LX brand

**Status:** Accepted

**Context**
It was necessary to define a professional and visual brand for the portfolio.

**Decision**
The portfolio's primary visual identity will be N3LX.

**Rationale**
The name works as a professional and visual artistic brand.

**Consequences**
Professional positioning becomes consistently communicated.

---

## D-003 — Primary metadata

**Status:** Accepted

**Context**
It was necessary to establish the project's primary title and description.

**Decision**
The primary title is:

N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design

**Rationale**
Preserve indexable content in the initial HTML whenever possible.

**Consequences**
The project gains a clearer SEO and sharing identity.

---

## D-004 — Technical stack

**Status:** Accepted

**Context**
It was necessary to define the project's technical foundation.

**Decision**
Primary stack:

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS 4
- PostCSS
- Vitest
- React Testing Library
- jsdom
- next-themes

**Rationale**
The project uses modern Next.js rendering and should avoid dependencies without a clear need.

**Consequences**
The technical foundation follows a modern, testable, and scalable standard.

---

## D-005 — Quality before evolution

**Status:** Accepted

**Context**
It was necessary to establish a minimum quality criterion for project evolution.

**Decision**
No new functional stage should advance with broken TypeScript, broken ESLint, broken tests, or broken build.

**Rationale**
Technical quality is a prerequisite for safe evolution.

**Consequences**
The validation flow becomes consistent and auditable.

---

## D-006 — Light as default theme

**Status:** Accepted

**Context**
It was necessary to define the project's initial visual experience.

**Decision**
The site opens in Light Theme and Dark Theme is available through ThemeToggle.

**Rationale**
Light Theme is the default and dark theme is an optional extension.

**Consequences**
The initial experience is cleaner and more accessible.

---

## D-007 — Primary color

**Status:** Accepted

**Context**
It was necessary to define a strong but non-dominant brand color.

**Decision**
The primary color is Xbox Green: #107C10.

**Rationale**
The color should work as accent, focus, interaction, and feedback without dominating the entire interface.

**Consequences**
The brand gains visual consistency without losing elegance.

---

## D-008 — Visual direction

**Status:** Accepted

**Context**
It was necessary to define the portfolio's aesthetic direction.

**Decision**
The experience should be elegant, technological, editorial, mature, and consistent with a Senior Product Designer profile.

**Rationale**
The visual reference must communicate sophistication without copying specific brands.

**Consequences**
The result approaches a premium standard without relying on literal copying.

---

## D-009 — Semantic design tokens

**Status:** Accepted

**Context**
It was necessary to create a consistent visual foundation.

**Decision**
The interface uses tokens for brand, backgrounds, surfaces, text, borders, focus, spacing, radius, transitions, and container.

**Rationale**
Avoid arbitrary values when an appropriate token already exists.

**Consequences**
The visual implementation becomes more consistent and scalable.

---

## D-010 — Maximum container width

**Status:** Accepted

**Context**
It was necessary to define the maximum width of the main layout.

**Decision**
The main container has a maximum width of 1600px with responsive side padding.

**Rationale**
The experience should take advantage of large displays without creating excessively long reading lines.

**Consequences**
The layout gains editorial control and strong readability on large screens.

---

## D-011 — Official QA viewports

**Status:** Accepted

**Context**
It was necessary to define visual validation checkpoints.

**Decision**
The primary QA presets are 1920 × 1080, 1366 × 768, 820 × 1180, and 440 × 956.

**Rationale**
These resolutions act as QA checkpoints without turning the layout into a device-specific build.

**Consequences**
The interface is validated based on relevant size ranges.

---

## D-012 — Accessible ThemeToggle

**Status:** Accepted

**Context**
It was necessary to ensure an accessible theme interaction.

**Decision**
ThemeToggle uses a real button, type="button", minimum 44 × 44 target, keyboard operation, dynamic accessible name, and perceivable state.

**Rationale**
Theme switching must be accessible and predictable.

**Consequences**
The theme experience improves usability and accessibility.

---

## D-013 — Responsible motion

**Status:** Accepted

**Context**
It was necessary to define microinteraction direction.

**Decision**
Microinteractions will be short, functional, subtle, and respect prefers-reduced-motion.

**Rationale**
Motion should not harm readability or control.

**Consequences**
The interface remains elegant without compromising comfort and accessibility.

---

## D-014 — Main cases

**Status:** Accepted

**Context**
It was necessary to structure the narrative for case studies and selected projects.

**Decision**
The current editorial architecture includes HORIZON HIS, SUBITER, REDE DCC 1.0, DASA — Canal do Consultor, ConnectCar Freeflow, ConnectCar Design System, and additional selected work.

**Rationale**
Case studies should reflect a consistent professional narrative backed by real work.

**Consequences**
Future implementation gains a solid editorial foundation.

---

## D-015 — Portfolio evidence

**Status:** Accepted

**Context**
It was necessary to ensure professional claims are supported.

**Decision**
Important claims must be supported by real evidence and distinguished across research, benchmark, concept, prototype, implementation, and production product.

**Rationale**
Never present benchmark material as authored final solution, and never present a prototype as an implemented product.

**Consequences**
Portfolio credibility increases.

---

## D-016 — Local images and performance

**Status:** Accepted

**Context**
It was necessary to establish an asset distribution standard.

**Decision**
Final assets must stay in the project, with semantic names, proper dimensions, modern formats, optimized versions, alt text, and lazy loading when applicable.

**Rationale**
Avoid depending on temporary Figma URLs in production.

**Consequences**
Portfolio performance and predictability increase.

---

## D-017 — Local network development

**Status:** Accepted

**Context**
It was necessary to allow development through the local network.

**Decision**
During development, the project may be accessed through the local network at 192.168.1.72.

**Rationale**
allowedDevOrigins is used only to properly allow Next.js hydration and assets during network development.

**Consequences**
The local development experience becomes more realistic without making this setting a production dependency.

---

## D-018 — Foundation before visual composition

**Status:** Accepted

**Context**
It was necessary to organize implementation order.

**Decision**
Build order follows: technical Foundation, Design Foundation, Header, Hero, Project Grid, Case Studies, Selected Work, Footer, Motion refinement, SEO/performance/final QA.

**Rationale**
Avoid building final interfaces before the required foundation.

**Consequences**
Implementation gains progressive clarity and reduced rework.

---

## D-019 — External QA handoff timing and evidence policy

**Status:** Accepted

**Context**
It was necessary to define when independent external QA can happen and how to preserve visual-review integrity and security boundaries.

**Decision**
Final external QA will run only after content and microinteractions are complete. Temporary HTTPS access may be used during that QA session, but rendered Playwright evidence remains mandatory for visual review. Findings must be recorded in planning/QA_FINDINGS.md, and temporary access must be terminated immediately after QA.

**Rationale**
External reachability improves independent review, but objective local rendered evidence is still required for reliable visual validation.

**Consequences**
The project keeps a controlled and auditable final QA process without turning temporary external access into a deployment path.

---

## D-020 — Prompt economy and context hygiene as permanent AI practice

**Status:** Accepted

**Context**
It was necessary to reduce avoidable AI credit usage while preserving delivery quality and safety in AI-assisted development.

**Decision**
The project adopts prompt economy and context hygiene as a permanent operating practice, following GitHub Copilot guidance on optimizing AI usage (https://docs.github.com/en/copilot/tutorials/optimize-ai-usage). Stable rules must remain in repository-level instructions so task prompts can stay compact and delta-focused. Major phases should use fresh Copilot Chat sessions when appropriate.

**Rationale**
Compact prompts, controlled context growth, and selective tool usage improve efficiency without reducing quality safeguards.

**Consequences**
The team preserves mandatory validation quality while improving AI cost-efficiency, context clarity, and execution focus.

---

## D-021 — Public localization architecture and canonical language

**Status:** Accepted

**Context**
The portfolio requires complete Brazilian Portuguese and English publication without duplicating page implementations or adding an internationalization dependency without a demonstrated need.

**Decision**
Brazilian Portuguese (`pt-BR`) is the primary, default, and canonical language for public portfolio content. Portuguese uses `/` and `/projetos/...`; English is secondary and uses `/en` and `/en/projects/...`. There are no `/pt` routes. Native Next.js App Router primitives and typed dictionaries will be used without middleware or an i18n dependency at this stage. The typed route map is the authoritative source for equivalent localized paths.

Public facts, metrics, evidence boundaries, and professional claims must remain materially equivalent between locales. Repository documentation remains in English.

**Rationale**
Explicit typed routes and content contracts preserve stable canonical URLs, support static rendering, reduce translation drift, and keep the architecture proportionate to the current route set.

**Consequences**
Future localized routes, metadata, internal links, and the language switcher must consume the shared route map and typed content contracts. Portuguese source content is canonical; English is maintained as an equivalent localized publication.
