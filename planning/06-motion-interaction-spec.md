# Motion & Microinteraction Spec

Motion is feedback and hierarchy, not decoration.

- Control feedback: 120–180ms.
- Standard state transition: ~220ms.
- Section/image reveal: ~360–480ms when useful.
- Preferred easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Use opacity + transform; avoid layout-thrashing animation.
- Project cover hover: subtle scale (about 1.01–1.025), slight media translation, border/shadow refinement; no exaggerated parallax.
- Links: underline/indicator movement must preserve clear affordance without hover.
- Theme transition: short and non-blocking; never animate every descendant individually.
- Page navigation: avoid delayed content or transition gates.
- `prefers-reduced-motion: reduce`: remove reveals/parallax and minimize nonessential transitions.
- No cursor-follow effects on essential UI.
- No scroll hijacking.
