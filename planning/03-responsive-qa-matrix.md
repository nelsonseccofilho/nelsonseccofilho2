# Responsive QA Matrix

| Context | Reference viewport | What must be validated |
|---|---:|---|
| Wide desktop | 1920×1080 and wider | max-width discipline, composition, cover quality, whitespace, no excessive stretching |
| Laptop | 1366×768 | hero fits, navigation, project-card density, typography scale, no clipped content |
| Tablet (mandatory) | 820×1180 | grid transitions, touch navigation, reading width, theme/locale controls |
| Mobile (mandatory) | 440×956 | touch targets, wrapping, focus, modal fit, no horizontal overflow |
| Tablet landscape (supplemental) | 1024×768 | grid collapse, touch targets, image crop, case navigation |
| Tablet portrait (supplemental) | 768×1024 | single/two-column transitions, reading width, sticky elements disabled/reworked if needed |
| Mobile large (supplemental) | 430×932 | touch, line length, cards, theme/locale controls |
| Mobile standard (supplemental) | 390×844 | primary mobile baseline |
| Mobile compact (supplemental) | 360×800 | minimum supported composition, no horizontal scroll |

The four mandatory gates are 1920×1080, 1366×768, 820×1180, and 440×956 (PROJECT_RULES §3 and D-011). Supplemental presets do not replace them.

Principle: do not “shrink desktop”. Recompose hierarchy at each breakpoint. Hover-specific effects must have focus/touch equivalents.
