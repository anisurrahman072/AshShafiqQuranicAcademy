# Al-Qur'anic Academy — Monorepo

Single root `package.json` and hoisted `node_modules` for all apps.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the web app.

## Workspaces

| Path | Description |
|------|-------------|
| `apps/web` | Next.js 15 marketing site (main) |
| `apps/server` | Placeholder for future API |
| `apps/mobile` | Placeholder for future mobile app |
| `packages/*` | Future shared code |

## Environment variables (web)

Copy `apps/web/.env.example` to `apps/web/.env.local` and set:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical site URL, e.g. `https://yourdomain.com` |
| `NEXT_PUBLIC_ZOOM_URL` | No | Optional Zoom room link |
| `NEXT_PUBLIC_GOOGLE_MEET_URL` | No | Optional Google Meet link |

## Content edits

- **Price:** `apps/web/src/config/pricing.ts`
- **Schedule days:** `apps/web/src/config/schedule.ts` — fill `days` arrays
- **Teacher photo:** add `public/brand/teacher.jpg` and update `Instructor.tsx` if needed

## Scripts (root)

- `pnpm dev` — start web dev server
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — ESLint in web app
