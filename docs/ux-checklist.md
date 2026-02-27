# UX Checklist and Review Workflow

This project uses a hybrid workflow: automated UX contracts + AI heuristic review + human sign-off.

## 1) UX contracts (must pass)

These are objective checks encoded in Playwright tests.

- `Navigation clarity`
  - Active tab highlights the current domain.
  - Home route should not force-select a domain tab by default.
  - Header navigation links route to the expected utility pages.
  - Sidebar contextual section reflects the active domain.
- `Interaction affordance`
  - Primary wiki cards are fully clickable (not title-only).
  - Keyboard users can activate primary card links with Enter.
  - Primary interactive targets are comfortably clickable/tappable.
- `Visual media quality`
  - Hero image should not be over-upscaled (avoid forced full-width stretch for small assets).
  - Domain card grids must render an avatar thumbnail.
  - If a doc has no mapped avatar, use a placeholder image (never a semantically wrong fallback).
- `Content IA consistency`
  - Domain pages show content that matches the tab domain.
  - Item pages do not leak unrelated categories.
  - Collection pages (like creature indexes) show all mapped entities, not a single representative image.
- `Error resilience`
  - Search interactions do not produce runtime page errors.
  - Unknown routes render a valid not-found experience.

## 2) Accessibility baseline (must pass)

- Run automated accessibility scan on key pages:
  - `/`
  - `/characters`
  - `/lore`
  - `/items`
  - `/search`
- Gate on critical violations.

## 3) Visual and heuristic review (AI-assisted)

Use AI review prompts that focus on non-functional UX quality:

- Visual hierarchy (title > section > card metadata)
- Clickability cues (hover/focus states, cursor, card affordance)
- Information scent (labels, grouping, and navigation predictability)
- Interaction consistency (same component behaves the same across pages)
- Cognitive load (too many competing actions in one card/section)

## 4) Human sign-off checklist

Before merge, validate manually:

- Can a first-time user tell what each navigation layer does?
- Are top 3 user tasks achievable in under 3 clicks?
- Do keyboard interactions feel equivalent to mouse interactions?
- Does mobile view preserve navigation intent and readability?
- Are there any “looks clickable but is not” elements?

## 5) CI / local commands

- Full quality gate:
  - `npm run lint`
  - `npm run validate:wiki`
  - `npm run test:e2e`
- UX-focused gate:
  - `npm run test:e2e:ux`

## Notes

- Automated checks catch regressions quickly.
- AI review catches likely UX anti-patterns.
- Final product judgment remains human-owned.
