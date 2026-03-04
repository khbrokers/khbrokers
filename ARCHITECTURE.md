# KH Brokers – Architecture

## Overview

Scalable Next.js (App Router + TypeScript) brokerage SaaS with config-driven content, centralized animations, and SEO-ready structure.

## Folder Structure

```
src/
├── app/                    # App Router
│   ├── (auth)/             # Auth routes (signup, demo) – future NextAuth/Clerk
│   ├── api/                # API routes – extend with versioning
│   ├── layout.tsx
│   ├── page.tsx
│   ├── metadata.ts         # SEO metadata
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│   └── animations.css      # Centralized keyframes
├── config/                 # Config-driven content
│   ├── site.config.ts
│   ├── nav.config.ts
│   └── sections.config.ts
├── components/
│   ├── ui/                 # Reusable primitives
│   ├── layout/             # Header, Footer
│   └── sections/           # Page sections (Hero, Features, etc.)
├── lib/                    # Utilities
│   ├── animations.ts       # Animation tokens
│   └── utils.ts
├── types/                  # Shared TypeScript types
└── features/               # Future: auth, dashboard modules
```

## Key Patterns

- **Config-driven**: Nav, sections, site meta live in `config/`. Swap for CMS later.
- **Centralized animations**: `animations.css` + `lib/animations.ts` tokens.
- **SEO**: `metadata.ts`, `robots.ts`, `sitemap.ts` – extend per route.
- **Future-proof**: `(auth)/`, `api/`, `features/` ready for expansion.

## Adding Features

| Feature | Where to add |
|---------|--------------|
| Auth (NextAuth/Clerk) | `src/app/(auth)/`, `src/features/auth/` |
| API versioning | `src/app/api/v1/` |
| CMS (Sanity/Contentful) | Replace `config/*` with fetch in Server Components |
| Dashboard | `src/app/(dashboard)/` route group |
