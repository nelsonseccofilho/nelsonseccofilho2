# Testing Strategy

## Unit/component baseline
Vitest + React Testing Library + `@testing-library/jest-dom`.

Every feature gets a small test alongside implementation. Examples:
- Header renders primary navigation and landmark.
- Locale switcher exposes current locale and changes target URL.
- Theme switcher has accessible name and updates state.
- Project card renders semantic link, title, metadata, alt text and focus state.
- Case navigation points to correct next/previous project.
- Content utilities reject missing required metadata.

## Accessibility smoke
Use testing-library role/name queries first. Add `axe` checks where useful, but do not treat automated accessibility testing as a substitute for keyboard/manual review.

## Browser smoke
Playwright after the page shell exists:
- load Home and every case in PT-BR/EN;
- no uncaught console errors;
- header navigation works;
- theme/locale persist;
- no horizontal overflow at 360, 390, 430, 768, 1024, 1366, 1920;
- critical links and project routes return 200;
- reduced-motion context does not run decorative reveal motion.

## Required before commit
`npm run lint` → `npm test` → relevant Playwright smoke (once configured).
