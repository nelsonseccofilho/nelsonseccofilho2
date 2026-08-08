# External QA & Visual Review Handoff

## Purpose

The final QA stage will combine:

- local automated validation;
- local rendered visual evidence;
- temporary external application access;
- independent visual/content review.

The public application tunnel is supplemental and must not replace rendered visual evidence.

## Execution timing

This workflow must run only after:

- portfolio content is finalized;
- all Featured Cases are complete;
- responsive behavior is stable;
- Light/Dark themes are stable;
- microinteractions are finalized.

## Access strategy

During the QA session, the local development application may be exposed through a temporary HTTPS tunnel.

Requirements:

- ephemeral/public QA URL;
- no permanent router port forwarding;
- no permanent public development server;
- terminate the tunnel immediately after QA;
- never expose repository files or filesystem browsing;
- never expose .env files;
- never expose API keys, tokens, credentials or MCP configuration;
- never include secrets in query parameters or screenshots;
- use non-sensitive test/demo data only.

The temporary URL may be used for:

- route inspection;
- content review;
- navigation verification;
- accessible page-structure inspection;
- external reachability validation.

Do not assume external URL access alone is sufficient for visual QA.

## Visual evidence

Local Playwright/browser automation must generate rendered evidence.

Capture screenshots for the final milestone matrix defined by the project QA rules.

At minimum cover:

- HOME
- HORIZON HIS
- SUBITER
- REDE DCC
- DASA — Canal do Consultor

Validate relevant states in:

- desktop
- tablet
- mobile
- Light
- Dark

Include important interaction states where applicable:

- navigation
- theme toggle
- project-card interaction
- external links
- WhatsApp CTA
- hover/focus states where meaningful
- keyboard focus
- microinteractions
- reduced-motion behavior where applicable

## Evidence package for external review

Prepare a QA evidence package containing:

- screenshots organized by route / viewport / theme;
- short recordings for interactions that cannot be evaluated in static screenshots;
- route list;
- known limitations;
- current commit hash;
- remaining defects, if any.

No secrets or private configuration may be included.

## Review areas

### Content

- approved copy
- claim safety
- consistency between Home and case studies
- spelling and grammar
- link accuracy

### Visual Design

- hierarchy
- typography
- spacing
- alignment
- image quality
- editorial consistency
- Light/Dark parity

### Responsive UX

- desktop
- tablet
- mobile
- intermediate behavior
- overflow
- touch targets

### Interaction

- hover
- focus
- active states
- transitions
- microinteractions
- reduced motion
- navigation feedback

### Accessibility

- heading hierarchy
- keyboard navigation
- focus-visible
- contrast
- semantic structure
- alt text
- accessible names

### Technical Quality

- route integrity
- broken links
- console/runtime errors
- hydration issues
- responsive image behavior
- theme persistence

## Final QA sequence

1. clean Git baseline;
2. full technical validation;
3. start production-like local build when appropriate;
4. generate Playwright visual evidence;
5. inspect complete responsive/theme matrix;
6. create temporary HTTPS tunnel;
7. perform external route/content inspection;
8. provide screenshot/video evidence for independent review;
9. record findings in planning/QA_FINDINGS.md;
10. fix approved defects only;
11. rerun affected validation;
12. final regression;
13. staged diff review;
14. final release commit;
15. terminate tunnel.

## Security boundary

The tunnel is temporary QA infrastructure only.

It must never become a permanent deployment mechanism.

Local secrets, development credentials and private MCP configuration must never be exposed.
