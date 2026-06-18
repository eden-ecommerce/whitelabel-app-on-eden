# Eden v0 project template

Next.js App Router template for Eden apps mounted under a Cloudflare Worker namespace on `eden.co.uk`.

**Read [`PROJECT_RULES.md`](./PROJECT_RULES.md) first** — single source of truth.

## Quick start

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects into your namespace.

## Scripts

| Command | Purpose |
| ------- | ------- |
| `pnpm dev` | Local development |
| `pnpm build` | Production build (tolerates TS errors during v0 dev) |
| `pnpm ts-check` | Strict TypeScript check |
| `pnpm lint` | ESLint |
| `pnpm predeploy` | **Before deploy** — ts-check + lint + build |
