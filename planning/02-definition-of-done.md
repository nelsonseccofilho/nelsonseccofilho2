# Definition of Done

A unit of work is **not done without tests**.

For every component or feature:
- Correct semantic HTML and meaningful heading structure.
- Keyboard operation and visible focus where interactive.
- Mobile/touch equivalent for any hover enhancement.
- Light and dark theme checked.
- 1920+, 1366, tablet and mobile checked.
- Basic Vitest/RTL test for rendering and the main interaction/state.
- No layout shift caused by images; intrinsic dimensions/aspect ratio reserved.
- No unverified portfolio claim introduced.
- No decorative motion when `prefers-reduced-motion: reduce` is active.
- BEM semantic naming for custom CSS blocks/elements/modifiers.
- Conventional Commit message prepared.
- `npm run lint`, `npm test`, and eventually Playwright smoke suite pass before commit.
