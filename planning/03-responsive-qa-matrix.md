# Responsive QA Matrix

| Context | Reference viewport | What must be validated |
|---|---:|---|
| Wide desktop | 1920×1080 and wider | max-width discipline, composition, cover quality, whitespace, no excessive stretching |
| Laptop | 1366×768 | hero fits, navigation, project-card density, typography scale, no clipped content |
| Tablet landscape | 1024×768 | grid collapse, touch targets, image crop, case navigation |
| Tablet portrait | 768×1024 | single/two-column transitions, reading width, sticky elements disabled/reworked if needed |
| Mobile large | 430×932 | touch, line length, cards, theme/locale controls |
| Mobile standard | 390×844 | primary mobile baseline |
| Mobile compact | 360×800 | minimum supported composition, no horizontal scroll |

Principle: do not “shrink desktop”. Recompose hierarchy at each breakpoint. Hover-specific effects must have focus/touch equivalents.
