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

---

## D-022 — Visual Art Direction — Editorial Product Storytelling

**Status:** Approved

**Date**
2026-08-10

**Decision Owner / Originator**
Nelson Secco

**Attribution**
The direction originated from Nelson Secco. AI-assisted analysis was used to refine, articulate, and document the decision.

**Scope**
Case-study imagery strategy for the Nelson Secco Product Design Portfolio.

**Context**
The portfolio currently uses intentional reconstruction placeholders while publication safety is being resolved, legacy/unapproved imagery is removed, and final case imagery is still pending art direction. The placeholders are temporary by design and were introduced to prevent rushed visual asset publication before the technical and editorial foundation is complete. Final imagery work happens after the current structural and release work.

**Decision**
Adopt Editorial Product Storytelling as the visual direction for final case-study imagery.

Core principle:
Product/interface is the protagonist.
Real-world context provides narrative.
Atmosphere and art direction provide finish.

The objective is not generic "beautiful mockups". The objective is to communicate what kind of product this is, where and how it is used, what experience the case discusses, and the complexity and character of the design problem.

**Approved Visual Principles**
- Premium editorial composition.
- Contextually plausible environments.
- Product storytelling over decoration.
- Interfaces treated as evidence, not visual props.
- Scenario/device/context may be art-directed or AI-generated.
- UI, data, and representation of the work must remain factually coherent.
- Confidentiality and publication constraints must be respected.
- Reconstructed/editorial visuals must not be presented as literal production screenshots when they are not.
- Few excellent images are preferable to many mediocre screenshots.

**Avoid**
- Generic Dribbble-style device mockups.
- Gratuitous glassmorphism.
- Abstract 3D without narrative function.
- Excessive glow.
- Impossible device perspectives.
- Generic stock-photo people.
- Stereotypical "AI startup" aesthetic.
- Visual spectacle that obscures the product story.

**Case-Specific Direction**

HORIZON HIS:
Product plus contemporary clinical environment.

Intent:
Communicate healthcare-system complexity, calmness, institutional quality, and product vision.

Important boundary:
HORIZON was a prototype, not a production deployment. Final imagery must not imply that generated clinical scenarios are documentary evidence of a deployed product.

SUBITER:
Product plus operational context.

Intent:
Use a more spatial/cinematic composition that shows technology integrated into the operational world. The direction may be visually bolder than HORIZON while remaining credible and product-centered.

REDE DCC 1.0:
Interaction plus transaction.

Intent:
Prioritize tactile payment experience centered on device/interface and transaction journey states (for example: amount, authentication/PIN, processing, confirmation/receipt). Avoid generic business-person-with-terminal imagery. The interaction is the protagonist.

DASA — Canal do Consultor:
Complexity plus research plus systems plus synthesis.

Intent:
Represent discovery and organization of a complex service ecosystem without inventing confidential product screenshots.

Relevant project evidence, where appropriate:
- 37 participants interviewed.
- 3 NACs visited.
- 4 systems analyzed.
- 290 research quotes mapped.
- 57 business rules/features mapped.

The visual language may be more editorial/systemic because literal confidential UI should not be simulated as authentic public evidence.

**Home vs Case Imagery Roles**

Home / Featured Project Cover:
- Condensed visual narrative.
- Immediate readability at smaller sizes.
- Strong focal point.
- Sufficient breathing room.
- Recognizable case personality.

Case Hero:
- Expanded storytelling.
- Richer context.
- Stronger product-environment relationship.
- More cinematic/editorial composition when appropriate.

The home cover and case hero may derive from the same direction but do not need to be identical crops.

**Asset Strategy**
Preferred minimum per case:
- Featured Project cover.
- Case hero image.
- One or two high-value narrative/evidence images when useful.

Do not create imagery only to fill space. Quality over quantity.

**Creation Workflow**
Imagery production happens one case at a time:
1. Review the case narrative.
2. Inspect available Figma source material.
3. Identify the strongest product-defining screens.
4. Review publication/confidentiality constraints.
5. Define what the image must communicate.
6. Propose 2–3 art-direction concepts/compositions.
7. Select one direction.
8. Generate/build the visual.
9. Review factual fidelity.
10. Review composition, lighting, device/context, hierarchy, and accessibility.
11. Integrate into the portfolio.
12. Validate responsive behavior.

Do not mass-generate all case imagery before individual review.

**Figma and AI Role**
Available Figma material is the primary design reference where accessible.

AI-generated imagery may support:
- Environments.
- Contextual scenes.
- Device presentation.
- Lighting.
- Composition exploration.
- Editorial reconstruction.

AI must not invent:
- Project outcomes.
- Product features.
- Research evidence.
- Client facts.
- Production status.
- Confidential interfaces represented as authentic public screenshots.

Human approval is required for every final image.

**Portfolio-Level Consistency**
Consistency should come from composition quality, editorial sophistication, lighting discipline, hierarchy, product-first framing, and restrained visual language.

Consistency must not come from forcing all cases into the same mockup template. Each case keeps its own personality.

**Future Note**
After portfolio completion, revisit this decision and image-production process as source material for a LinkedIn article about Product Storytelling, art direction for Product Design case studies, moving beyond generic portfolio mockups, responsible use of generative AI, and maintaining factual integrity while creating editorial imagery.

---

## D-023 — Visual Asset Packaging and Directory Convention

**Date:** 2026-08-10  
**Status:** Approved  
**Decision approved by:** Nelson Secco

**AI-assisted collaboration:** The operational structure was proposed through AI-assisted collaboration and approved by Nelson Secco for the portfolio workflow.

### Context

The portfolio is entering its dedicated visual production phase after the technical baseline was completed.

Final case-study imagery will be created progressively under D-022 — Visual Art Direction — Editorial Product Storytelling.

The project needs a consistent convention for organizing, reviewing, exporting, packaging, and integrating visual assets without mixing final public imagery with working references, Figma source material, unpublished evidence, or assets without confirmed publication clearance.

The convention must support:

- Featured Project covers on the Home page;
- richer case-study hero imagery;
- narrative imagery that supports storytelling;
- evidence imagery when publication is appropriate;
- responsive image derivatives;
- the portfolio meta-case itself;
- direct extraction of approved asset packages into the repository.

### Decision

`public/assets/projects/` remains the canonical root for public, approved project imagery.

Each project may use the following directory structure when the corresponding asset category exists:

```text
public/assets/projects/
└── <project-id>/
    ├── cover/
    ├── hero/
    ├── narrative/
    └── evidence/

---

## D-024 — HORIZON HIS: uso de dados fictícios em assets visuais do portfólio

### Context
O case HORIZON HIS inclui telas de um protótipo de alta fidelidade apresentado na Hospitalar 2025. Para garantir integridade factual, privacidade e segurança de publicação, foi necessário definir se os dados exibidos nas interfaces poderiam ser usados como base visual para os assets do portfólio.

### Decision
Foi confirmado por Nelson Secco que os dados presentes nas telas do protótipo HORIZON HIS são fictícios, não representam pacientes reais e foram curados previamente para demonstração pública na feira como personas e cenários simulados.

Com base nisso, as telas do protótipo podem ser utilizadas como referência visual para construção dos assets do portfólio, incluindo capas e imagens editoriais internas do case, desde que a narrativa continue correta quanto à natureza do artefato.

### Rationale
Essa decisão permite preservar melhor a riqueza visual e a credibilidade do trabalho de produto, mostrando mais detalhes da interface sem depender excessivamente de blur ou mascaramento. Ao mesmo tempo, mantém a integridade do portfólio ao não sugerir que se trata de dados reais ou de um sistema em produção.

### Constraints
- O HORIZON HIS deve continuar sendo descrito como protótipo de alta fidelidade / experiência proposta.
- Os assets não devem sugerir que o sistema estava implantado em produção.
- As imagens finais devem seguir direção editorial, evitando aparência de screenshot cru.
- Mesmo com dados fictícios, a composição deve priorizar leitura de produto, contexto e narrativa visual.

### Consequences
- As telas do HORIZON HIS podem ser usadas com maior nitidez e legibilidade nos assets.
- A home e o case interno podem receber composições mais fortes e mais fiéis ao produto.
- A direção visual seguirá o princípio de Editorial Product Storytelling já aprovado.
- Essa decisão se aplica especificamente ao HORIZON HIS com base na confirmação explícita do autor do portfólio.

### Decision Owner / Originator
Nelson Secco

### AI Contribution Note
The confirmation originated from Nelson Secco. AI-assisted analysis was used to structure and document the decision and to translate it into visual direction guidelines for the portfolio.