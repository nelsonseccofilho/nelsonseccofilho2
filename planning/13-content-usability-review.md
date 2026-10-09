# Content and Usability Review — 2026-10-08

## Scope and evidence

Owner request: review recent content evolution, identify usability inconsistencies against documented rules, record decisions, and propose secondary actions for the AI practice and Spotify.

Baseline: `6806f5d0f53083bf175587293f2c7c7afadb4785`. Recent reviewed units: Home grouping (`bb7e996`), AI practice on Home (`6806f5d`), AI case responsiveness (`53e4dc6`), and current localized Home/case contracts. The existing untracked `AGENTS.md` and `CLAUDE.md` are outside this change.

Authority: `PROJECT_RULES.md`, D-021–D-024 in `DECISIONS.md`, content guardrails, source map, provenance rules, motion specification, Definition of Done, responsive matrix, and external QA handoff. Documentation is English; public Portuguese remains canonical. This review records source findings and proposals, not an implementation or release approval.

## Findings

| ID | Priority / evidence status | Finding and consequence | Recommended decision |
| --- | --- | --- | --- |
| CU-001 | Medium / confirmed in source | `home-page.tsx` hardcodes `aria-label="Professional positioning"` in both locales. The Portuguese page exposes an English list name to assistive technology. | Localize the accessible name through the typed content contract, or remove the redundant label if the surrounding heading supplies sufficient context. Verify the chosen accessible structure in both locales. |
| CU-002 | Medium / confirmed documentation conflict | `PROJECT_RULES.md` §3 and D-011 require 1920×1080, 1366×768, 820×1180, and 440×956. `03-responsive-qa-matrix.md` instead lists different tablet/mobile sizes. An agent following only that matrix can omit official gates. | Keep the normative presets mandatory and add 1024, 768, 430, 390, and 360 widths as supplemental coverage. Do not silently replace D-011. |
| CU-003 | Medium / confirmed documentation conflict | D-004 and `PROJECT_RULES.md` §§7/13 specify `next-themes`; `package.json` has no such dependency and `theme-provider.tsx` implements a custom provider. The README reflects the custom implementation. | Reconcile the normative stack through a separate decision after inspecting the rationale and theme tests. This review does not authorize replacing the provider or adding a dependency. |
| CU-004 | Low / confirmed documentation defects; fence repaired | D-023 left its fenced directory example unclosed before D-024, which can hide the next decision in Markdown rendering. D-024 is Portuguese despite the planning language rule. Recent Home/AI evolution had no corresponding rationale entry after D-024. | The closing fence was restored and D-025/D-026 record this review and proposal append-only. Preserve D-024's original record; an English historical clarification remains a separate documentation correction. |
| CU-005 | Medium / confirmed order mismatch; UX impact inferred | Home shows additional work as DASA → REDE; `CaseNavigation` derives progression from `featuredCases.projects`, where it is REDE → DASA. Home grouping and next-case browsing communicate different sequences. | Define whether browsing follows Home order or an independent curated sequence, then make that sequence explicit and test it. Do not reorder public content during this review. |
| CU-006 | Low / confirmed styling; visual assessment pending | AI Home and Spotify use `text-link text-link--hit-area`; the primary WhatsApp action uses `.whatsapp-action`. The existing links already declare a 44px minimum height. A secondary button is a hierarchy proposal, not evidence that these links are untappable. | Replace each existing action visually with an outlined secondary anchor; retain its destination and position. Avoid adding a duplicate CTA for the same destination. See the proposal below. |
| CU-007 | Medium / confirmed structure; usability hypothesis | The AI case contains 14 narrative sections plus contact, while `CaseNavigation` only handles portfolio return and next project. The header points to Home sections, not the case's own sections. Scanning and returning within a long case may require excessive scrolling. | Consider a concise local section index and a back-to-top action in a later unit. Measure reading/navigation behavior before adding sticky UI. This is not a verified user failure. |
| CU-008 | Low / confirmed source contract | Mobile navigation includes `!translate-x-0 !translate-y-0`; the theme provider injects transition suppression using `!important`. `PROJECT_RULES.md` §5 prohibits `!important` without a documented exception. | Review necessity and document narrowly scoped exceptions or remove the overrides in a dedicated change. Do not remove behavior-critical styles as part of this content audit. |
| CU-009 | Medium / evidence clarification pending | ConnectCar's Home copy describes responsive UI/design-system studies and labels the visual editorial. The source map distinguishes benchmark node `4005:3469` from responsive-component evidence `10:2594`. An editorial label explains image provenance, not authorship of the underlying work. | Keep the current boundary; before expanding copy, map each claim to authored component evidence and explicitly identify any benchmark contribution. This review found no proof that the current image uses the benchmark node. |

## Content contracts preserved

- Home PT/EN maintain equivalent AI-practice positioning and four process steps. Product cases and the AI practice remain distinct presentations within the projects area.
- HORIZON remains a high-fidelity navigable prototype; SUBITER remains production work; DASA preserves its editorial/confidentiality boundary. No new result or metric is proposed.
- The AI case distinguishes owner-confirmed private operational use from public repository screenshots. It states that snapshots do not independently prove client operations or current repository version, and that unavailable hosted CI is not CI PASS.
- The full reference SHA remains in source; local `overflow-wrap: anywhere` and `min-width: 0` remain on evidence descriptions. Current rendered overflow is not verified by this audit.
- Spotify remains secondary artistic context inside About. It does not become a product case or a primary conversion action.

## Secondary-action proposal

Recommendation: an outlined pill, visually related to the existing neutral filled primary. Reuse the existing token family, font weight 600, radius, focus treatment, and 160ms feedback. The green accent remains restrained.

| Property | Recommended specification |
| --- | --- |
| Semantic element | Anchor for navigation; use Next `Link` for the internal AI route. Do not give a navigation link `role="button"`. |
| Base | `inline-flex`; centered content; gap `--spacing-2`; `min-height: 44px`; `min-width: 44px`; horizontal padding `--spacing-5`; vertical padding `--spacing-3`; radius `--radius-pill`; weight 600. |
| Rest | Transparent background; text and 1px outline `--color-text-primary`. This deliberately uses a stronger boundary than the subtle surface-border token. |
| Hover | Background `--color-surface`; text `--color-brand-text`; outline `--color-brand-text`. No translation or size change. |
| Active | Background `--color-surface`; text/outline `--color-brand-text-active`. |
| Focus-visible | 2px `--color-focus` outline with 2px offset, independently visible from the border; no dependence on hover. |
| Motion | Color/background/border transitions using `--transition-fast`; disable nonessential transitions for reduced motion. |
| Responsive | Intrinsic width on desktop; `max-width: 100%`; allow labels to wrap and height to grow; no fixed height, ellipsis, or clipping. |

The shared style should be a BEM block such as `.secondary-action`, not another WhatsApp-specific class. Extract a common primary/secondary component only if the implementation needs shared behavior; a CSS style alone may be sufficient.

| Placement | PT-BR / EN label | Navigation |
| --- | --- | --- |
| Existing AI Home action | `Conheça a prática` / `Explore the practice` | Existing typed internal case route; same tab. Optional decorative right-arrow icon hidden from assistive technology. |
| Existing About music action | `Ouvir N3LX no Spotify` / `Listen to N3LX on Spotify` | Existing `N3LX_SPOTIFY_URL`; preserve new-tab behavior and `rel`. Use a decorative external-link icon plus localized accessible text announcing the new tab. |

The two links at the end of the AI case should receive a separate local hierarchy review: GitHub explores the framework; consulting returns to Home contact. Do not apply a filled primary to both. This proposal's initial implementation scope is the two Home actions requested by the owner.

[Visual specimen](./secondary-action-proposal.svg) compares current primary styling with the proposed secondary in Light/Dark. It is a static design proposal using current token values, not a screenshot of the application or rendered QA evidence.

Accessibility references: [W3C target size enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html) describes 44×44 CSS pixels at AAA; 44×44 is also this project's recommended target. [W3C non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) explains contrast requirements for identifying controls and states. Assess actual adjacent colors and focus states during implementation; token reuse alone does not certify conformance.

## Initial audit validation and limitations

- Focused existing Vitest suites: Home, localized content, project pages, and case navigation — **42 tests / 4 files passed**. JSDOM emitted its expected unsupported document-navigation messages; these tests do not prove real browser navigation or geometry.
- Local Home returned HTTP 200 at `http://localhost:3002`. A subsequent localized route probe did not complete and was stopped; it supplies no route-validation evidence. External Spotify reachability was not checked.
- Browser integration could not start; headless capture produced an empty image. Discarded as evidence. Visual composition, hydrated behavior, keyboard journeys, Light/Dark appearance, zoom, focus contrast, and the responsive matrix remain **PENDING**.
- No production code, public copy, public assets, permanent rules, dependencies, or historical evidence were changed. D-023's Markdown fence was repaired; review decisions and a static proposal specimen were added. Full build/typecheck/lint were not rerun for this documentation-only proposal.

## Recommended implementation order

1. Resolve CU-001 and the secondary-action proposal as one scoped Home unit, with locale/route tests and representative rendered desktop/mobile Light/Dark review.
2. Reconcile governance drift (CU-002–CU-004 and CU-008) through explicit decisions and documentation corrections.
3. Decide case progression (CU-005), then evaluate long-case navigation (CU-007) with evidence.
4. Clarify ConnectCar provenance if public claims or assets expand (CU-009).

No recommendation above is marked implemented or owner-approved by this review.

## Owner-authorized follow-up — navigation and AI storytelling

After the initial audit, the owner reported the missing AI-case back-to-top action, requested direct WhatsApp behavior with an AI-consulting message, and authorized revising How I Work around the AI case. D-027 records this implementation; the initial audit remains historical evidence.

### Implemented behavior

- The AI case now includes the existing localized `BackToTop`. Its shared visibility contract is preserved: display after 480px scroll and hide when end-of-case navigation is visible. Keyboard activation returned to scroll position 0 in every browser scenario below; existing component tests cover reduced motion.
- Consulting now opens the same WhatsApp recipient in a new tab using the existing primary action styling, send icon, privacy masking, and consent-gated analytics. A distinct `ai-consulting` context selects localized prefilled copy and a contextual event. General header/Home contact messages remain unchanged.
- The case closing narrative now invites applying AI to the visitor's product process. Consulting is visually primary; the public GitHub framework remains a secondary exploratory option.
- How I Work retains its location, ordered-list structure, and five stages, now connecting evidence/context, product decisions, design/implementation, review/QA, and continuity. The introduction keeps product direction, critical review, and accountability human. Both locales remain structurally equivalent; no KPI, new adoption claim, or confidential evidence was added.
- CU-001 was resolved by removing the unnecessary English-only list label from About. The surrounding localized section supplies context.

### Contact-message contract

The PT-BR prefill identifies the AI practice and asks about consulting to integrate AI into the team's Product Design process. Its EN equivalent preserves that intent. The URL is built with `encodeURIComponent`; the existing general contact remains the default. No WhatsApp message was sent during QA.

### Executed validation

Feature-level validation completed: **206 tests / 32 files passed**, typecheck, lint, and production build passed. The browser harness used temporary Playwright tooling in the npm cache, not a new repository dependency, and a local production server bound to `127.0.0.1:3010`.

| Scenario | Browser result |
| --- | --- |
| PT-BR, 1366×768, Light | AI case HTTP 200; keyboard back-to-top = 0; consulting opens expected new-tab URL; Home/case widths 1366/1366; no page errors. |
| PT-BR, 820×1180, Light | Equivalent navigation; widths 820/820; no page errors. |
| PT-BR, 440×956, Dark | Equivalent navigation; widths 440/440; CTA approximately 326×52px; no page errors. |
| EN, 440×956, Light | English consulting prefill; equivalent navigation; widths 440/440; CTA approximately 221×52px; no page errors. |

Keyboard activation used Enter for both actions. The `wa.me` request was intercepted to verify popup navigation without relying on the external service or sending a message. These results establish the site's new-tab behavior and constructed destination; they do not prove WhatsApp service availability.

Persisted evidence:

- [Browser measurements and destinations](./qa/2026-10-08-ai-navigation/results.json)
- [Desktop case contact](./qa/2026-10-08-ai-navigation/pt-BR-1366-light-case-contact.png)
- [Tablet How I Work](./qa/2026-10-08-ai-navigation/pt-BR-820-light-work-process.png)
- [Dark mobile case contact](./qa/2026-10-08-ai-navigation/pt-BR-440-dark-case-contact.png)
- [English mobile How I Work](./qa/2026-10-08-ai-navigation/en-440-light-work-process.png)

The inspected screenshots preserve readable hierarchy, CTA fit, and the editorial grid in representative layouts. This is feature validation, not the full release matrix or a formal accessibility certification. The earlier development-server/browser failures were superseded for this scoped unit by production-build evidence.

CU-002–CU-005, CU-008, CU-009, and the local-index hypothesis in CU-007 remain follow-up work. D-026's Home AI/Spotify outlined secondary remains a reviewable proposal; this follow-up implements the specifically requested case-consulting behavior and storytelling changes.
