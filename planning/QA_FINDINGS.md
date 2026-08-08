# N3LX Portfolio — QA Findings

This document records issues, inconsistencies, risks, and refinement opportunities found during portfolio validations.

Each finding receives a permanent identifier.

The standard lifecycle is:

Found
→ In Progress
→ Ready for Retest
→ Verified

Findings must not be marked as Verified only because code was changed.
A new validation is required.

## QA-001 — Orphan separator in Hero disciplines on mobile

**Status:** Ready for Retest

**Severity:** Polish

**Area:** Hero / Responsive typography

**Found during:** Responsive Visual QA

**Viewport:** 440 × 956 — iPhone 16 Pro Max QA preset

**Theme:** Light and Dark / theme-independent behavior

### Description

During responsive QA of the first Header + Hero composition, the discipline list wraps to two lines.

The observed composition is approximately:

UX Strategy · Product Discovery · Design Systems
· AI-assisted Product Design

The visual separator appears orphaned at the start of the second line.

### Expected

When the list wraps on narrow screens, no separator should appear orphaned at the beginning or end of a line.

Items must remain perceivable as independent and semantically clear elements.

### Actual

The separator used between items moves with the fourth item to the second line and appears visually before:

AI-assisted Product Design

This creates visual noise and weakens the editorial finish of the composition.

### Evidence

Found during QA in the official viewport:

440 × 956

The issue appears in the group:

hero__disciplines
hero__discipline

No horizontal overflow was observed.

The general Hero structure remains correct.

### Proposed resolution

Keep separators at widths where items remain comfortably distributed.

On narrow screens, remove separators visually and use row-gap and column-gap to define separation between items.

The solution should:

- remain CSS-only;
- preserve current semantics;
- not artificially reduce font size;
- not use nowrap;
- not create CSS specific to one device model.

### Regression scope

After correction validate:

Primary:
- 440 × 956

Confirm there is no apparent regression at:
- 820 × 1180
- 1366 × 768
- 1920 × 1080

Also confirm:

- absence of horizontal overflow;
- presence of all four disciplines;
- equivalent behavior in Light and Dark.

### Verification

Pending responsive visual retest.

### Related commit

Pending.

## QA-002 — Theme toggle hydration mismatch

**Status:** Ready for Retest

**Severity:** High

**Area:** Theme / Hydration / Accessibility

**Found during:** Responsive Visual QA after Header + Hero implementation

**Viewport:** 1920 × 1080

**Theme:** Theme-dependent

### Description

During QA, a hydration error related to the theme system was displayed.

React showed server/client differences in ThemeToggle, including theme-dependent properties such as:

- aria-label;
- aria-pressed;
- rendered SVG/icon.

A warning related to the script injected by next-themes through ThemeProvider was also shown.

### Expected

The HTML initially produced by the server and the client's first render must be compatible.

ThemeToggle should only display theme-dependent visual state and accessible attributes after theme resolution is safe on the client.

The application must not present hydration mismatch.

### Actual

Server and client produce different ThemeToggle states during hydration.

It was also observed:

"Encountered a script tag while rendering React component"

pointing to AppThemeProvider / next-themes.

### Evidence

Found visually in the Next.js development error overlay and confirmed by React hydration diff.

The diff includes differences in:

- aria-label;
- aria-pressed;
- light/dark icon.

### Proposed resolution

First investigate the current ThemeToggle implementation.

The solution should follow the official next-themes recommendation to avoid rendering theme/resolvedTheme-dependent UI before the component is mounted on the client.

Do not apply suppressHydrationWarning on ThemeToggle to hide the problem.

Do not remove accessible attributes.

Do not replace next-themes without investigation.

The specific ThemeScript warning should be evaluated separately if it remains after ThemeToggle hydration mismatch is resolved.

### Regression scope

Validate:

- initial load in Light;
- initial load with persisted Dark;
- switch Light → Dark;
- switch Dark → Light;
- reload with persisted Dark;
- absence of hydration mismatch;
- correct aria-label;
- correct aria-pressed;
- absence of perceptible layout shift;
- existing ThemeToggle tests.

Primary checkpoints:

1920 × 1080
1366 × 768
820 × 1180
440 × 956

### Verification

Pending runtime hydration and theme regression retest.

### Related commit

Pending.

## QA-003 — Theme toggle vertical misalignment in header

**Status:** Verified

**Severity:** Medium

**Area:** Header / Theme toggle / Vertical alignment

**Found during:** Manual responsive QA + runtime measurement

**Affected viewports:**

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

### Description

ThemeToggle sits below Header vertical center because `.theme-toggle` has `margin-top: 24px` while the Header container uses `align-items: center`.

### Expected

ThemeToggle should be vertically centered by the Header parent layout, sharing the same visual center as the N3LX brand.

### Actual

Runtime measurement in viewport 440 × 956 confirmed:

- Header inner centerY: 38px
- Brand centerY: 38px
- ThemeToggle centerY: 50px
- Delta vertical: +12px
- ThemeToggle margin-top: 24px

The previous hypothesis of horizontal misalignment was discarded by measurement: the horizontal grid was correct.

### Proposed resolution

Remove `margin-top: 24px` from base `.theme-toggle` so its vertical positioning inside Header is determined by `.site-header__inner { align-items: center; }`.

### Regression scope

Validate visually:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Also confirm:

- ThemeToggle vertically centered in Header;
- N3LX brand preserved;
- horizontal grid preserved;
- absence of horizontal overflow;
- equivalent behavior in Light and Dark;
- keyboard navigation and focus-visible preserved.

### Verification

Verified after complete responsive retest.

Runtime measurement after correction:

- Header inner centerY: 38px
- Brand centerY: 38px
- ThemeToggle centerY: 38px
- Delta vertical: 0px
- ThemeToggle margin-top: 0px

Manual responsive validation passed in:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Confirmed in all four viewports:

- N3LX and ThemeToggle are vertically aligned;
- ThemeToggle remains inside the correct gutter;
- no overflow observed;
- no Hero regression observed;
- no structural Header regression observed.

Theme validation passed:

- Light preserved;
- Dark preserved.

Automated validation confirmed by user:

- typecheck passed;
- lint passed;
- test passed;
- build passed.

### Related commit

Pending.
