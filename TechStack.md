# TechStack for Frostmoon Tech

DATE: 2026-02-24
SOURCES: PRD.md (Inferred from context), SPEECH_PLAN.md

## Architecture Overview
High-level: React Frontend (Vite) → Supabase Backend (Edge Functions, DB)

## Technology Layers

### Presentation (Frontend)
- Framework: [React 18] — Standard, robust, ecosystem support.
- State Management: [React Context / Hooks] — Sufficient for current scale (Open Day presentation).
- Build: [Vite 5] — Fast dev server, optimized build.
- Styling: [Tailwind CSS 3] — Utility-first, rapid UI development.
- UI Library: [shadcn/ui] — Accessible, customizable components (Radix primitives).

### Backend
- Runtime: [Deno (Supabase Edge Functions)] — TypeScript native, global distribution.
- Framework: [Supabase Edge Runtime]
- API: [REST / RPC] — via Supabase client.

### Database
- DBMS: [PostgreSQL 15+] — Managed by Supabase.
- Driver: [Supabase JS Client] — Type-safe access.

### Infrastructure
- Hosting: [Vercel] — Frontend hosting, easy CI/CD integration.
- Backend Hosting: [Supabase] — Managed backend services.

### Development Tools
- Package Manager: [pnpm] — Fast, disk-efficient.
- Linter: [ESLint] — Code quality.
- Formatter: [Prettier] — Consistent style.
- Language: [TypeScript 5] — Type safety.

### CI/CD
- Platform: [GitHub Actions] (inferred)
- Jobs: lint, build, test (if applicable).

### Observability
- Logging: [Supabase Logs] / [Vercel Logs]
- Analytics: [PostHog] (Potential addition if needed)

## Compatibility Matrix
| Component | Version | Status |
|-----------|---------|--------|
| React     | 18.x    | ✓ OK   |
| Vite      | 5.x     | ✓ OK   |
| Node      | 18+     | ✓ OK   |

## Dependencies
**Frontend:**
- react@18
- react-dom@18
- typescript@5
- vite@5
- tailwindcss@3
- @supabase/supabase-js

## Lockfiles
- pnpm-lock.yaml

## Assumptions
- The project is a presentation/landing page combo ("Open Day").
- "Frostmoon Tech" seems to be the name.
