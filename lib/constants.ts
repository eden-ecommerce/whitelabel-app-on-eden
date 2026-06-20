/**
 * REPLACE: Per-project deploy origins.
 *
 * Public config — safe in the client bundle. Hardcode production URLs before deploy.
 * API and asset origins may differ. Dev always uses localhost:3000.
 *
 * Private secrets (API keys, tokens, etc.) belong in `.env` — see `@lib/env-server`.
 *
 * ASSET_BASE_URL drives `assetPrefix` in `next.config.ts` so `/_next/static/*`
 * and imported `@public/*` assets resolve from the public Vercel production
 * alias — the only origin that serves them (see resolution notes below).
 */

export const ASSET_DEV_ORIGIN = "http://localhost:3000";
export const API_DEV_ORIGIN = "http://localhost:3000";

// ── Origin resolution ────────────────────────────────────────────────────────
//
// Empirically verified against the live deployment (curl, HTTP status):
//
//   https://whitelabel-app-on-eden.vercel.app/_next/...        → 200  (public alias)
//   https://whitelabel-app-on-eden-<hash>...vercel.app/_next/  → 401  (Deployment Protection)
//   https://www.eden.co.uk/events/_next/...                    → 404  (Worker does NOT proxy /_next)
//
// Conclusions that drive the logic below:
//
//  1. VERCEL_URL (the deployment-specific *-<hash>.vercel.app host) is gated by
//     Vercel Deployment Protection and returns 401 for assets — it must NEVER
//     be used as the assetPrefix. This was the root cause of the unstyled page.
//
//  2. The Cloudflare Worker that serves the site at eden.co.uk does NOT forward
//     /_next/* (404), so assets can't be served through eden.co.uk at all.
//
//  3. The ONLY origin that serves /_next/* publicly is the stable production
//     alias exposed as VERCEL_PROJECT_PRODUCTION_URL
//     (e.g. whitelabel-app-on-eden.vercel.app). Pointing assetPrefix there
//     works in BOTH situations:
//       • viewing the canonical *.vercel.app URL directly → same-origin, and
//       • viewing eden.co.uk/<path> (HTML proxied by the Worker) → assets load
//         cross-origin from the public Vercel alias (Vercel sets permissive
//         CORS on static assets, and Next adds crossOrigin to its tags).
//
//   Production  → https://{VERCEL_PROJECT_PRODUCTION_URL}
//   Preview     → undefined  (same-origin; previews are viewed on their own host)
//   Local / v0  → undefined  (same-origin localhost)
//
const productionAlias = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const isProduction = process.env.VERCEL_ENV === "production" && !!productionAlias;
const isPreview = process.env.VERCEL_ENV === "preview";

export const ASSET_BASE_URL: string | undefined = isProduction
  ? `https://${productionAlias}`
  : undefined;

export const API_BASE_URL: string = isProduction
  ? `https://${productionAlias}`
  : isPreview
    ? "" // same-origin (relative) on the preview host
    : API_DEV_ORIGIN;
