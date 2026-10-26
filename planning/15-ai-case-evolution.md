# AI case evolution — editorial audit and acceptance
Date: 2026-10-26. Scope: AI case, localized Home summary, case-specific tests and documentation.
Baseline: portfolio main c4dbaa96d956f5102668e38a74284514481b7c71.
The owner authorizes research, implementation, branch/PR and preview preparation. Production merge/deploy requires final approval.

## Inspected sources
- Production PT and EN HTML retrieved before changes; both contain the canonical thesis, fourteen narrative sections and a closing CTA.
- Existing PROJECT_RULES, DECISIONS through D-029, content-claim guardrails, responsive matrix, implementation and locale tests.
- Public framework README and RATIONALE at e82549d7546558786c46caefd189906cf24aba88.
- Latest release endpoint: v3.9.0, published 2026-10-24T21:24:41Z, source 795cedc5737ae023371f5aca477db20a6f2d635b.
- Public compare v3.9.0...e82549d7546558786c46caefd189906cf24aba88: sixteen later commits at inspection. A later main commit is not a released version.
- Current public validation/closure contract at the pinned main revision. No private repository, runtime, client artifact or transcript consulted.

## Audit before implementation
| Dimension | Observed baseline | Decision |
|---|---|---|
| Value and authorship | Strong opening thesis, generic model description; author attribution appears in third person | Preserve thesis; lead with an authored framework and explicit Senior Product Designer / UX Consultant role |
| Hierarchy and scan reading | Fourteen peer sections plus CTA separate closely related concepts | Seven body sections plus hero form eight reading blocks; group detailed examples under native disclosure |
| Narrative | Tool workflow appears before framework design rationale | Problem → design decisions → architecture → principles → professional application → outcomes/learning → public evolution |
| Cognitive load | Runtime, continuity, drift, evidence and trust boundaries repeat | Consolidate by reader question; define terms where used |
| Evidence | Four approved public screenshots, including historical versions/commit | Preserve assets and exact historical reference; label captures historical; add current release and pinned later-source links |
| Professional use | Specific private continuity and tool-execution assertions | Retain only owner-declared general professional use with project-specific adaptation; publish no private operational proof |
| Outcomes | Owner-confirmed operations and public artifacts share a results heading | Distinguish publicly inspectable deliverable, owner-reported use and unmeasured benefits |
| Learning | General principles, limited explanation of failure-driven design | Connect context gaps, artifact mismatch, repetitive QA and unclear closure to publicly documented design responses, without invented incident history |
| PT/EN | Equivalent structure and meaning; technical terms remain prominent | PT canonical; editorial EN adaptation with identical facts and evidence limits |
| Visual/accessibility | Shared case sections, token-based native diagrams, responsive evidence viewer, working navigation and contact | Reuse; no identity redesign, new dependency, client image or shared theme change |
| Home and SEO | Generic practice summary and metadata | Add authorship and evidence/human-accountability value; preserve routes, action labels and existing sharing mechanism |

These are source/editorial findings, not usability-test results. Pre-change rendered visual quality has not been certified.

## Acceptance fixed before testing
1. Both existing localized URLs and equivalent-language navigation remain intact.
2. Hero identifies authorship and human accountability; eight coherent reading blocks use progressive detail.
3. Generic framework, project runtime, primary sources/Design System and temporary agent execution remain distinct.
4. Professional use is explicitly owner-reported; no client names, identifying combinations, private links, screenshots, tickets, paths, metrics or testimonials are introduced.
5. Release v3.9.0 and later pinned main are distinct; historical captures do not claim current-version evidence. No hosted CI or independent-agent effectiveness claim.
6. PT and EN have equivalent structure, facts, links and qualifications. Existing CTA recipient, contextual message, analytics consent, back-to-top and case navigation remain working.
7. Existing official sequence: tests → typecheck → lint → production build. Preserve mandatory gates; rerun only affected checks after a correction.
8. Rendered review: 1920×1080, 1366×768, 820×1180, 440×956, both locales and deterministic light/dark. Supplemental 360px width, keyboard, native disclosures, evidence viewer, theme persistence, reduced motion, no horizontal overflow.
9. Review complete diff and staged filenames before commit; exclude local instructions, raw HTML, working files and unrelated cases.
10. Prepare PR and available preview, record limitations, then request final production approval. A push/merge alone is not publication verification.

## Validation and final review
Implementation and executed results are recorded below; production publication remains pending final owner approval.


## Implemented result and comparison
| Previous | Revised |
|---|---|
| A persistent model described in third person | First-person authorship, Senior Product Designer / UX Consultant role and concrete collaboration problem |
| Fourteen peer narrative sections, plus contact | Hero and seven body sections, followed by the existing contact action |
| Tool-specific meeting pipeline near the opening | Generic workflow in an optional native disclosure after professional context |
| Private operational validation assertions in outcomes | Publicly inspectable deliverable / owner-reported use / benefits to measure |
| Older GitHub captures as main proof | Historical captures explicitly qualified, current release and later source linked separately |
| Generic Home summary; title and description only | Authored Home summary; localized canonical, language alternatives, Open Graph and summary-card text |

All nine requested principles are present. Stable framework rules, project-specific operational state and temporary execution are explicitly separated. Primary sources, canonical Design System and live artifact authority retain distinct roles. The framework remains experimental/evolving.

## Executed validation
- Official full suite: 32 files, 206 tests PASS.
- Final metadata and locale changes: 2 focused files, 28 tests PASS. Other tests retain valid evidence because no relevant production behavior changed.
- Final typecheck, lint and production build: PASS (Next.js 16.3.0).
- Served local production build: 12/12 routes HTTP 200, including both Home pages, both AI routes and both locales of all four other cases.
- AI served HTML: localized title/description, one H1, eight H2 including contact, correct lang, canonical, both language alternatives, Open Graph URL/title and summary card.
- Browser: all four mandatory widths/heights in both locales and both explicit themes; no persistent horizontal overflow after reflow. PT 360px supplemental passed.
- Full-page desktop/mobile renders inspected; tablet evidence ladder, mobile dark workflow, historical README dialog, Escape/focus recovery, native keyboard disclosure, theme persistence and keyboard back-to-top checked.
- Reduced motion: emulated reduce, computed scroll behavior auto; keyboard back-to-top reached zero. Temporary emulation restored.
- No browser console errors observed in the final inspected tab. This is scoped accessibility/visual review, not a full WCAG audit.
- Source confidentiality patterns passed for the changed case, both Home dictionaries, page and this audit. Manual editorial review found no new client identities, private paths, private Figma URLs, stakeholder details, client images, testimonials or invented metrics. Pattern scanning supports but does not replace the source restriction and manual review.

## Tool limitations and recovery
Initial dependency reuse via junction was rejected by Turbopack. Removing only the task-created junction and installing the unchanged lockfile with npm ci resolved the build. No build configuration or dependency version changed.

One initial test incorrectly interpreted URL percent encoding as a numerical claim; it was corrected to check rendered text for metrics. The corrected targeted file and the subsequent complete suite passed.

A transient English mobile width measurement taken during resize was reconciled after a rendered frame; no overflowing element remained. No production CSS change was needed.

Browser screenshots were successfully rendered and inspected in the conversation, but saving persistent screenshot files failed/timed out twice. No persistent screenshot artifact or automated visual-diff certification is claimed. Repeated equivalent attempts were stopped. QA observations are preserved as a clearly attributed record, not as output of a standalone browser runner.

## Final approval and release boundary
Branch and PR preparation are owner-authorized. Merge into main and Netlify production deployment require final owner approval. After approval, verify both actual public case URLs and the authored Home summaries. A pushed branch or successful merge alone cannot complete publication.
