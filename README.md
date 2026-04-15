# KH Brokers – Brokerage SaaS

Enterprise-grade Next.js (App Router + TypeScript) brokerage platform. Config-driven, SEO-ready, future-proof for auth/API/CMS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                    # App Router
│   ├── (auth)/             # Auth routes – add NextAuth/Clerk
│   ├── api/                # API routes
│   ├── layout.tsx
│   ├── metadata.ts         # SEO
│   ├── robots.ts
│   └── sitemap.ts
├── config/                 # Config-driven content
│   ├── site.config.ts
│   ├── nav.config.ts
│   └── sections.config.ts
├── components/
│   ├── ui/                 # Button, Container
│   ├── layout/             # Header, Footer
│   └── sections/           # Hero, Features
├── lib/                    # utils, animations
└── types/                  # Shared types
```

## Key Features

- **Config-driven**: Edit `config/*` to change nav, sections, site meta. Swap for CMS later.
- **Centralized animations**: `animations.css` + `lib/animations.ts`
- **SEO**: metadata, robots, sitemap
- **Strict typing**: `tsconfig` strict mode, shared types in `types/`

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.

## Extending

| Add | Location |
|-----|----------|
| Auth | `src/app/(auth)/`, `src/features/auth/` |
| API v1 | `src/app/api/v1/` |
| CMS | Replace config imports with fetch in Server Components |

See [ARCHITECTURE.md](./ARCHITECTURE.md) for details.
