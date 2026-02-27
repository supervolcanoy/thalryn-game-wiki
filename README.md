# Thalryn Wiki (Next.js Static)

Modernized, static wiki project for **Thalryn**, using Next.js + React + MDX with build-time full-text indexing.

## Stack

- Next.js (App Router)
- React + TypeScript
- MDX content files in `content/wiki`
- Build-time search index (`public/search-index.json`) using MiniSearch

## Commands

- `npm install`
- `npm run extract:images` (extracts base64 artifact images into `public/images`)
- `npm run dev`
- `npm run build`
- `npm run test:e2e:install` (installs Playwright browsers)
- `npm run test:e2e` (runs browser E2E tests)
- `npm run test:e2e:ux` (runs UX contracts + accessibility baseline checks)
- `npm run validate:wiki` (checks wiki content/media consistency rules)

## Content workflow

1. Add/edit `.mdx` files in `content/wiki`.
2. Include frontmatter:
   - `title`
   - `excerpt`
   - `category`
   - `tags` (array)
   - optional `image`
3. Build/dev regenerates full-text index automatically.

## Routes

- `/wiki/[slug]`
- `/search`
- `/categories` and `/categories/[slug]`
- `/tags` and `/tags/[slug]`
- `/characters`
- `/lore`
- `/items`

## UX Workflow

- Checklist: `docs/ux-checklist.md`
- Automated contracts:
  - navigation state and domain consistency
  - primary-card clickability and keyboard activation
  - baseline tap target sizing checks
  - search runtime stability checks
- Accessibility baseline:
  - critical axe scan on core pages
