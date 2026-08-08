# Git & CSS Conventions

## Conventional Commits
Use https://www.conventionalcommits.org/.

Examples:
- `feat(home): add featured case grid`
- `feat(theme): add light and dark appearance switcher`
- `test(project-card): cover rendering and keyboard navigation`
- `fix(header): prevent overflow at 1366px`
- `style(case-study): refine evidence spacing`
- `refactor(content): centralize project metadata`
- `docs(readme): document portfolio setup`
- `chore(deps): update frontend dependencies`

Keep each commit cohesive and tested.

## BEM
Custom semantic classes follow https://getbem.com/:
- `.project-card`
- `.project-card__media`
- `.project-card__content`
- `.project-card__title`
- `.project-card--featured`

Tailwind utilities may coexist. BEM is the semantic contract for custom component CSS; do not create needless BEM wrappers solely to duplicate utilities.
