# Content, Usability, and Localized Resume Review - 2026-10-19

## Scope and authority

Owner request: recheck evolved content and usability against documented norms, record decisions, bring a secondary-action proposal for AI and Spotify, replace the Portuguese downloadable resume with the supplied PDF, and create its English equivalent. The owner requested advance notice; notice was given before inspection. Proposal scope does not imply permission to implement the button design or unrelated UX changes.

Baseline: f364705. Initial Git status contained only untracked AGENTS.md and CLAUDE.md. Both remain untouched. Authority reviewed: PROJECT_RULES.md, DECISIONS.md (including D-025 through D-027), content guardrails, Definition of Done, responsive matrix, motion specification, external QA handoff, and the previous content review. The installed Next.js Link guide was also inspected. Documentation remains English; Portuguese public copy remains canonical.

This is a scoped audit and asset update, not a declaration that every project norm or release gate has passed. Existing historical records remain intact.

## Reassessment of previous findings

| Finding | Current evidence and disposition |
| --- | --- |
| CU-001: English-only About list label | Resolved in current source: the redundant aria-label is absent. Do not reopen the historical defect. |
| CU-002: QA matrix drift | Still open. PROJECT_RULES §3 requires 1920×1080, 1366×768, 820×1180, 440×956; 03-responsive-qa-matrix.md omits the last two. Recommend restoring those as mandatory and retaining other sizes as supplemental in a separate documentation correction. This audit used the normative presets. |
| CU-003: theme stack drift | Still open. Rules §§7/13 prescribe next-themes; current package and provider implement a custom theme context. Do not replace working theme behavior during a content/assets task. An explicit architecture decision must reconcile implementation and rules. |
| CU-004: decision documentation | The D-023 fence is repaired; D-027 records the later storytelling work. D-024 remains Portuguese in planning, contrary to the documentation language rule. Its historical record is preserved. D-027's local/uncommitted status is historical: the current baseline includes the implementation commit. |
| CU-005: case progression | Still open, confirmed in source and rendered Home. Home order is HORIZON → SUBITER → AI practice → DASA → REDE. CaseNavigation derives its sequence from the content array, where REDE precedes DASA and AI is absent. Recommend a deliberately documented product-case sequence consistent with the Home product order; retain AI as a separate practice. This is a recommendation, not an implemented reorder. |
| CU-006: secondary styling | Still a proposal. Rendered AI and Spotify actions remain text links. The AI action measures 44px high at all four checked presets; changing its appearance is a hierarchy improvement, not a correction for an untappable link. Reuse D-026 and its specimen instead of adding a competing style. |
| CU-007: long-case navigation | Partially addressed by existing BackToTop and contextual consulting in D-027. The case still has 15 main sections including contact. A local section index remains a usability hypothesis; no reading study proves it necessary. Do not add sticky navigation automatically. |
| CU-008: prohibited overrides | Still open. Mobile navigation/theme suppression use important overrides; resume-dialog.tsx also uses important width utilities. Review necessity and record narrow exceptions or scoped removal separately. No global CSS or theme change here. |
| CU-009: ConnectCar provenance | Boundary preserved: Home labels the composition editorial and describes UI/design-system studies. Editorial labeling does not establish authorship of benchmark source material. Do not expand claims without mapping approved authored evidence. |

## Newly recorded findings

| ID | Priority / evidence | Finding | Proposed resolution |
| --- | --- | --- | --- |
| CU-010 | Medium / measured in browser | Resume close control is 36×36px. Download is about 94×34px on PT desktop and 106×30px on EN mobile. These fall below the project's recommended 44×44px target. | In a separate UX fix, provide at least 44px controls, preserve heading space and allow mobile reflow. Retest both locales, keyboard focus, and narrow layouts. This is a project recommendation discrepancy, not a claimed accessibility certification failure. |
| CU-011 | Medium / source limitation; runtime inconclusive | Preview success is inferred from iframe onLoad; there is no explicit preview error/recovery state. Headless Chrome showed a blank viewer while the loading label was already absent. That screenshot alone cannot distinguish browser PDF-viewer limitations from a user-facing defect. | Keep the direct download available. Consider a localized open-in-new-tab fallback and explicit preview-failure guidance, with normal interactive-browser verification. Do not claim the embedded preview worked or is universally broken. |
| CU-012 | Low / source and rendered accessible-name inspection | Spotify opens a new tab; its label contains an arrow but no localized text announcing that behavior. | Include “opens in a new tab” / the Portuguese equivalent as accessible text in the proposed secondary action; keep the icon decorative. Treat this as clarity improvement under D-026. |

No new UI fixes are included in this review. The findings above remain open until their own implementation and retest.

## Content assessment

The Home connects professional positioning, product cases, a distinct AI practice, the evidence-to-continuity process, About, and contact. The four-step AI card summarizes the five-step How I Work narrative; the different counts serve different levels of detail and are not a factual contradiction. Artistic work remains secondary in About.

Reviewed PT/EN Home contracts preserve equivalent positioning and action destinations. HORIZON is still a navigable prototype rather than production; SUBITER remains production work; DASA preserves research and confidentiality boundaries. The AI case retains human responsibility, the distinction between public repository snapshots and owner-confirmed private operational use, the historical reference SHA, and the prohibition on equating unavailable CI with PASS. No current upstream version or private adoption was independently revalidated here.

The supplied CV is the owner-designated resume source, not an instruction source. Its approximate REDE 5% figure is translated faithfully as an association, not strengthened into measured causality or added to case-study copy. Dates, overlapping employment periods, independent-work context, and language proficiency remain unchanged. No degree type, fluency level, result, or experience was inferred.

## Secondary-action proposal

Retain [D-026](./DECISIONS.md#d-026--outlined-secondary-actions-for-ai-practice-and-spotify), its [full specification](./13-content-usability-review.md#secondary-action-proposal), and its [Light/Dark specimen](./secondary-action-proposal.svg). This review confirms those choices against the existing neutral filled primary and current tokens.

- Same pill geometry, weight 600, spacing family, 160ms feedback, and visible focus as the primary action family.
- Transparent fill with a 1px text-color outline; restrained brand feedback on hover/active. The primary stays filled.
- Minimum 44×44px, labels allowed to wrap, no movement or clipping, reduced-motion support.
- Replace existing links in place; do not add duplicate actions. Internal AI uses the existing localized Next Link destination in the same tab. Spotify preserves its existing external URL and new-tab behavior.
- Labels: “Conheça a prática” / “Explore the practice”; “Ouvir N3LX no Spotify” / “Listen to N3LX on Spotify”. Localize the new-tab announcement and hide decorative icons from assistive technology.

The specimen is a static proposal, not application implementation or accessibility proof. Implementation remains pending owner selection; no additional permission flow was needed for the already requested asset update.

## Resume decision and implementation

D-028 records this unit. public/assets/resume/N3LX_PT-BR.pdf is an exact byte copy of the supplied v4 Portuguese PDF. SHA-256: 75c6ea373ab20e512ef377ac8c04fc6c4c151aefd626f0ef51573ecb43da1a06.

public/assets/resume/N3LX_EN.pdf is a complete two-page English translation, with selectable text and working LinkedIn/portfolio annotations. The portfolio annotation uses /en. The two-page layout follows the source's section order and page split. scripts/generate-resume-en.py retains the editable translation and regeneration recipe using ReportLab; it does not modify the Portuguese asset.

Existing locale selection already routes Hero and footer ResumeDialog to these separate stable paths. No component, public copy, dependency, or route change was needed. A scoped .gitattributes rule marks resume PDFs binary, preventing Git line-ending conversion from corrupting the generated file on Windows. PDF address/contact details were preserved from the owner-designated source. Updating local assets does not publish the site.

## Executed validation

QUICK CHECK was selected for the localized asset replacement and documentation. No app logic/style changed, so full typecheck/lint/build and the full release matrix were not repeated. The Python authoring script parsed and ran successfully. Final git diff --check passed. No test was added solely to mirror a file replacement.

- Existing focused suites: ResumeDialog, SiteFooter, Home page, and localized content - **38 tests / 4 files passed**.
- Both PDFs: parsed with pypdf, two pages each; all four pages rendered with Poppler and visually inspected without clipping, overlapping text, or missing glyphs. This is not formal ATS compatibility certification.
- Real browser downloads: PT and EN returned the expected filenames and byte-for-byte matched their local assets. PT also matches the supplied original hash.
- Hero keyboard opening, Escape closing, and focus return passed in PT 1366×768 Light and EN 440×956 Dark. Footer dialogs point to the correct locale PDFs in both checks.
- Home dimensions: no horizontal overflow in 1920×1080 Light PT, 1366×768 Light PT, 820×1180 Light PT, or 440×956 Dark EN. AI case checks at PT desktop and EN mobile also showed no horizontal overflow. No pageerror event was recorded during these measured navigation checks.
- AI consulting destinations retain separate localized prefilled copy and new-tab behavior. No external message was sent. BackToTop was inspected in source; this unit did not repeat scroll-triggered activation QA.
- Inspected screenshots show readable AI-card/Spotify composition on PT desktop and EN mobile. Modal chrome fits checked layouts; embedded PDF rendering remains inconclusive in headless Chrome. Download and independent PDF rendering were verified separately.

[Measurements, hashes, and limitations](./qa/2026-10-19-content-resume/results.json) and screenshots are retained in planning/qa/2026-10-19-content-resume/. This is local development-browser evidence, not production-build, hosted CI, deployment, external Spotify/WhatsApp availability, full accessibility, reduced-motion, zoom, or complete locale/theme regression evidence.

## Next reviewable units

1. Select D-026 for implementation and include localized new-tab clarity.
2. Correct resume target sizes and evaluate preview recovery (CU-010/CU-011).
3. Reconcile governance drift and choose the intended product-case sequence.
4. Evaluate a local AI-case index only if navigation evidence justifies it.

The requested PDFs are locally available through their existing language areas. No staging, commit, push, or deployment is part of this unit.


## Owner-authorized implementation and publication follow-up

The owner authorized implementation and publication after reviewing the initial local-only result. This follow-up supersedes the initial pending implementation state; the audit above remains historical evidence. D-029 records the decisions.

### Delivered changes

- D-026 is implemented in place: AI and Spotify now use the outlined secondary-action family with existing tokens, pill geometry, explicit focus, wrapping, and reduced-motion support. AI remains same-tab internal navigation; Spotify retains its external URL, new-tab navigation, and a localized accessible announcement.
- Resume close/download controls now measure 44px. The header wraps when needed. Persistent localized help and an open-in-new-tab link remain available regardless of iframe load state. No unreliable iframe-error or timeout-based rendering claim was introduced.
- Home and case progression share the same product groups: HORIZON → SUBITER → DASA → REDE. AI remains an independent practice and cannot accidentally advance to HORIZON. Existing analytics keys and localized routes are preserved.
- The QA matrix restores all four normative presets. D-029 reconciles the existing custom theme provider with the official stack. The original D-024 is a documented historical language exception with an English clarification; no original evidence was deleted.
- Mobile navigation, resume dialog, and evidence viewer use normal CSS/utility precedence instead of important overrides. Compact evidence frames use a BEM modifier. The only remaining important usage in source is the documented transient theme-transition suppression.
- Both locale PDFs from D-028 are included. The Portuguese asset remains byte-for-byte identical to the owner source; the English translation and generator remain unchanged by this follow-up.

### Finding disposition

CU-001 remains resolved. CU-002, CU-003, CU-004, CU-005, CU-006, CU-008, CU-010, and CU-012 are addressed by implementation/documentation and the scoped retests below. CU-011 has a verified independent recovery path; embedded rendering itself remains browser-dependent and unproven in headless Chrome. CU-007's local-index suggestion remains a hypothesis rather than an outstanding implementation defect. CU-009's evidence boundary remains in force; no ConnectCar claim or asset was expanded.

### Executed final checks

- Full Vitest: **208 tests / 32 files passed**. After the final analytics-type guard and evidence styling cleanup, focused case-navigation (6 tests) and evidence-viewer (5 tests) suites also passed.
- Typecheck, lint, and production build passed. The build repeated TypeScript checking after the last production changes. Final evidence-viewer lint also passed after the scoped cleanup.
- Production server at 127.0.0.1:3011: PT 1920×1080 Light; EN 1366×768 Dark; PT 820×1180 Dark; EN 440×956 Light; PT 440×956 Dark; and supplemental PT 360×800 Light with reduced motion. All checked Home widths matched viewport widths, with no pageerror events.
- In all six scenarios: keyboard AI navigation, intercepted Spotify new-tab destination, localized PDF selection, actual byte-verified downloads, Escape close, and resume focus return passed. AI action height was 47px; download/close targets were 44px. Reduced-motion secondary transitions measured 0s.
- Mobile-menu geometry passed at 440 and 360 widths. The mobile evidence modal loaded its image, fit the viewport, closed with Escape, and restored focus. PT/EN case-next destinations matched the shared sequence; terminal REDE and independent AI expose only the portfolio return.
- Fresh context with a dark system preference still started Light; an explicit Dark selection persisted after reload. This validates the documented no-system-following contract in the checked browser.
- Inspected screenshots show readable desktop/mobile action hierarchy, visible focus, wrapping, modal/help fit, and preserved menu/evidence presentation. Embedded PDF content is blank in headless Chrome, so standalone Poppler document QA and actual downloads remain the document-content evidence.

See [production-browser measurements and limits](./qa/2026-10-19-secondary-release/results.json). Screenshots are in the same folder. Validation logs are also retained there. This is feature-scoped local production-build evidence, not hosted CI PASS, formal accessibility certification, or a complete all-route/theme audit. Spotify requests were intercepted; no message was sent and external service availability is not claimed.

Publication is owner-authorized. Only reviewed task files may be staged; the pre-existing AGENTS.md and CLAUDE.md remain untouched and excluded. GitHub publication and deployment must be verified separately from local checks.


## Publication verification - 2026-10-20

GitHub main was verified at f20ea00cd3afb65417b734a281eca5aec3242330. The public Portuguese and English Home responses each contain both secondary actions and the localized Spotify new-tab announcement. Both live PDF downloads exactly match the validated commit assets (Portuguese: 110840 bytes; English: 8595 bytes). The Portuguese download also retains the original source hash.

[Publication evidence](./qa/2026-10-19-secondary-release/publication-2026-10-20.json) records the served content and PDF hashes. Public HTTP content and PDF integrity are confirmed; hosted interactive visual QA is not claimed because the isolated browser network was denied. The existing production-build interaction evidence remains the visual/behavioral validation.
