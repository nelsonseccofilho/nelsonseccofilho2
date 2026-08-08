# N3LX Portfolio — Project Rules

Permanent rules for design, engineering, content, and collaboration.

## 0. LANGUAGE BOUNDARY

Portuguese is the Copilot Chat conversation language.

English is the project language.

Only user-facing Copilot Chat communication may be in Brazilian Portuguese (pt-BR), including progress updates, explanations, questions, warnings, validation summaries, QA summaries, Git summaries, and final task reports or verdicts.

All repository artifacts must be written in English unless an explicit localization requirement defines otherwise.

README.md is an intentional bilingual exception: English section first, then an equivalent Brazilian Portuguese section. English is the canonical source, and both sections must remain materially equivalent in structure, facts, setup steps, commands, links, and claims.

This includes planning files, project documentation, Markdown documentation, architecture documentation, requirements, content contracts, provenance documentation, technical documentation, workflow documentation, generated reports saved as files, documentation-oriented code comments, test descriptions where appropriate, and approved portfolio copy.

All source code and technical identifiers must remain in English, including variables, functions, components, interfaces, types, filenames, API names, test names, and technical comments.

All files under planning/ MUST be written in English.

If a planning file contains Portuguese, report it as a violation and do not automatically translate the repository during an unrelated task.

Git commit messages must remain in English and follow Conventional Commits.

This is the project's normative document.

Any person or agent working in this repository must follow these rules.

If a rule needs to change, first record the change in DECISIONS.md.

## 1. PRODUCT & UX

- Use Nielsen Norman Group principles and best practices as reference.
- Clarity over ornamentation.
- Do not hide important functionality.
- Do not create interactions that depend exclusively on hover.
- Always consider feedback, state, error, and recovery.
- Prioritize recognition over recall.
- Reduce cognitive load.
- Maintain a clear visual hierarchy.
- Do not sacrifice usability for aesthetics.
- Recommended minimum touch target: 44 × 44px.
- Interfaces must work with keyboard navigation.

## 2. VISUAL DESIGN

Direction:

- premium;
- elegant;
- technological;
- editorial;
- minimalist without being empty.

Qualitative references:

OpenAI
Apple
Samsung

Never copy layouts or identity from those companies.

Primary color:

#107C10

Light Theme by default.

Dark Theme available.

Green must be used with discipline.

## 3. RESPONSIVENESS

The application must be fluid.

Required QA presets:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Also consider intermediate behavior.

Do not create CSS specific to device brands/models.

Do not accept unintended horizontal overflow.

## 4. ACCESSIBILITY

Required:

- semantic HTML;
- coherent heading hierarchy;
- alt text;
- accessible labels;
- keyboard navigation;
- focus-visible;
- adequate contrast;
- aria only when necessary;
- never remove outline without replacement;
- prefers-reduced-motion;
- do not use color alone to convey information.

Decorative SVG must be hidden from the accessibility tree when appropriate.

## 5. CSS

Custom CSS follows:

https://getbem.com/

BEM convention:

- block
- block__element
- block--modifier

Examples:

- theme-toggle
- theme-toggle__icon
- project-card
- project-card__title
- project-card--featured

Rules:

- no !important;
- no inline style, unless technically justified;
- avoid excessively specific selectors;
- prioritize semantic tokens;
- avoid magic values;
- avoid premature abstractions.

## 6. DESIGN TOKENS

Use existing tokens before creating new values.

Categories:

- brand;
- background;
- surface;
- text;
- border;
- focus;
- spacing;
- radius;
- transitions;
- containers.

Primary brand:

#107C10

Maximum container:

1600px

## 7. THEMING

Light is default.

Dark is optional.

Theme Provider:

next-themes

attribute:

data-theme

enableSystem:

false

Theme changes must not cause:

- layout shift;
- hydration breakage;
- excessive visual flashing;
- contrast loss.

## 8. MOTION

Microinteractions:

- fast;
- elegant;
- subtle;
- functional.

Do not create animations only for decoration.

Always respect:

prefers-reduced-motion

Motion must never block an action.

## 9. SEO

SEO must be considered from implementation start.

Preserve:

- metadata;
- title;
- description;
- lang;
- semantically indexable content;
- correct headings;
- understandable URLs;
- alt text;
- Open Graph when implemented;
- canonical when applicable.

Current primary title:

N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design

## 10. PERFORMANCE

Prioritize Core Web Vitals.

Avoid:

- unnecessary JavaScript;
- large dependencies without justification;
- oversized images;
- layout shift;
- render-blocking fonts;
- expensive animations;
- client components without need.

Prefer Server Components whenever client state/interaction is not truly required.

## 11. IMAGES & ASSETS

Production assets must be local.

Do not depend on temporary Figma URLs.

Use:

- proper format;
- compression;
- suitable dimensions;
- responsive images;
- lazy loading when applicable;
- proper alt text.

Do not use images as decoration if they add no value.

## 12. TESTS

Fundamental rule:

Do not build functionality without a corresponding test when behavior is testable.

Before considering a stage complete:

- npm run typecheck
- npm run lint
- npm test
- npm run build

Tests must validate:

- behavior;
- accessibility;
- important contracts.

Avoid:

- fragile snapshots;
- internal details;
- test IDs when semantic queries are possible.

Prefer React Testing Library by:

- role
- name
- text
- label

Do not alter production code only to make tests pass when the error is in the test.

## 13. ENGINEERING

Current official stack:

- Next.js
- React
- TypeScript
- Tailwind CSS 4
- Vitest
- React Testing Library
- next-themes

TypeScript must remain strict.

Do not add dependencies without need.

Do not create abstraction before a real need exists.

Preserve Server Components as default in App Router.

Add "use client" only when necessary.

## 14. GIT

Commits follow:

https://www.conventionalcommits.org/

Format:

type(scope): description

Common types:

- feat
- fix
- refactor
- test
- docs
- chore
- perf
- style

Examples:

- feat(theme): add accessible light and dark toggle
- fix(test): isolate theme toggle renders
- docs(planning): document project decisions

Do not use generic messages such as:

- update
- changes
- fix stuff

## 15. OPERATIONAL WORKFLOW

There are three permanent terminals:

### PowerShell `npm`

Runs:

- npm install
- npm run typecheck
- npm run lint
- npm test
- npm run build

### PowerShell `run dev`

Runs exclusively:

- npm run dev

Remains open during development.

### PowerShell `git`

Runs Git commands only:

- git status
- git diff
- git add
- git commit
- git log
- git branch
- git switch
- git push

### VS Code Chat

Responsible for:

- creating files;
- editing files;
- removing files;
- refactoring code.

VS Code Chat must NOT:

- run Git;
- run npm;
- run npx;
- run terminal commands.

## 16. DEVELOPMENT PROCESS

Default flow:

Plan
→ provide scope to VS Code Chat
→ agent changes files
→ review diff
→ Keep
→ typecheck
→ lint
→ test
→ build
→ run dev
→ Visual QA
→ git status
→ selective stage
→ Conventional Commit

Do not use `git add .` automatically.

Prefer selective staging.

## 17. IMPLEMENTATION REVIEW & VALIDATION WORKFLOW

Every implementation unit must pass review and validation before Git write.

Mandatory sequence:

1. verify working-tree scope;
2. review production code;
3. review tests;
4. review integration;
5. review CSS/style when applicable;
6. run `npm test`;
7. run `npm run typecheck`;
8. run `npm run lint`;
9. run `npm run build`;
10. prepare RUN DEV visual QA when UI is affected;
11. stage only after validation;
12. review staged filenames with a read-only Git command;
13. review the complete staged diff;
14. commit only after staged filenames and staged diff pass review;
15. check `git status --short` after commit.

Interaction conventions:

- commands shown to the user must identify context: GIT, NPM, or RUN DEV;
- PowerShell commands must be provided one at a time;
- never claim Visual QA passed without rendered visual evidence;
- do not mix implementation, QA, and commit in one uncontrolled step;
- commits must remain cohesive and limited to one implementation unit;
- secrets and local MCP configs must never be committed.

## 18. LEGACY

The folder:

_outofdate/

contains the previous portfolio.

It:

- does not participate in the current application;
- does not participate in lint;
- does not participate in tests;
- must not be used as an automatic implementation source;
- serves only as historical/manual reference.

## 19. CONTENT INTEGRITY

Never expand professional claims without evidence.

Explicitly distinguish:

- benchmark;
- discovery;
- research;
- concept;
- prototype;
- validated prototype;
- implemented solution;
- production product.

Do not present benchmark as authored work.

Do not turn an editorial hypothesis into a historical fact.

## 20. SCOPE CONTROL

Do not add improvements outside the current task on your own initiative.

When finding an out-of-scope opportunity:

- report it;
- register it;
- implement only when approved.

A task must change only necessary files.

## 21. DOCUMENTATION

DECISIONS.md:
records decisions and their rationale.

PROJECT_RULES.md:
records permanent rules.

When there is a new important decision:

1. implement and validate;
2. record it in DECISIONS.md;
3. update PROJECT_RULES.md only if the decision creates or changes a permanent rule.

Do not duplicate content unnecessarily between the two documents.

## 22. AGENT EFFICIENCY & CREDIT BUDGET

Use the smallest validation scope that safely covers the current change.

Rules:

- Prefer targeted file reading over broad repository searches.
- Do not reread unchanged files without a specific reason.
- Stop exploration when there is already enough evidence to decide.
- Do not rerun already-green validation if no relevant code changed afterward.
- Prefer focused tests during implementation.
- Run full technical validation only once at the appropriate final checkpoint.
- Scale visual QA to the size and risk of the change.
- Avoid large repeated Playwright loops and equivalent screenshots.
- Prefer a few representative visual scenarios.
- Maximum of two automatic correction iterations for the same defect.
- If unresolved after two iterations, stop and report.
- If VS Code signals long-running/iterative continuation, stop and report progress.
- One PowerShell command at a time.
- Never chain commands with `;` or `&&`.

Validation levels:

- QUICK CHECK
Use for CTA, copy, link, small CSS adjustment, and local low-risk change.
Typical validation: focused test when relevant, representative desktop, representative mobile, only affected theme/state when applicable, full pipeline only when technically necessary at the final checkpoint.

- FEATURE CHECK
Use for a new component, new route, meaningful UI feature, and meaningful behavior change.
Typical validation: relevant tests, `npm run typecheck`, `npm run lint`, `npm run build`, representative desktop/tablet/mobile, and Light/Dark when theme-sensitive.

- MILESTONE CHECK
Use for full case study, Home milestone, responsive-system change, theme-system change, relevant architectural change, and release checkpoint.
Typical validation: full test suite, `npm run typecheck`, `npm run lint`, `npm run build`, complete responsive matrix, deterministic Light/Dark, accessibility review, and Git scope review.

Selection rule:

- Always choose the smallest level that safely covers the current change.

Do not reduce level when there is impact on:

- global layout;
- theme system;
- route architecture;
- accessibility infrastructure;
- security;
- shared data contracts.

Compatibility with Sections 12 and 17:

- Validation depth is defined by QUICK CHECK, FEATURE CHECK, or MILESTONE CHECK.
- When the selected level requires full pipeline, keep the already defined operational sequence.
