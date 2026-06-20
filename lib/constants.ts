/**
 * REPLACE: Per-project deploy origins.
 *
 * Public config — safe in the client bundle. Hardcode production URLs before deploy.
 * API and asset origins may differ. Dev always uses localhost:3000.
 *
 * Private secrets (API keys, tokens, etc.) belong in `.env` — see `@lib/env-server`.
 *
 * ASSET_BASE_URL drives `assetPrefix` in `next.config.ts` so `/_next/static/*`
 * and imported `@public/*` assets resolve correctly behind the Eden Cloudflare Worker.
 */

/**
 * Canonical proxy origin. The app is served behind the Eden Cloudflare Worker
 * at https://www.eden.co.uk/events, so `/_next/static/*` must resolve as
 *   https://www.eden.co.uk/events/_next/static/…
 * The Worker forwards /events/* back to this deployment.
 */
export const ASSET_PRODUCTION_ORIGIN = "https://www.eden.co.uk/events";
export const ASSET_DEV_ORIGIN = "http://localhost:3000";

/** API origin (may differ from assets) */
export const API_PRODUCTION_ORIGIN = "https://www.eden.co.uk/events";
export const API_DEV_ORIGIN = "http://localhost:3000";

// ── Origin resolution ────────────────────────────────────────────────────────
//
// The app is served behind a Cloudflare Worker at https://www.eden.co.uk/events
// in TRUE production. But Vercel also creates "production" deployments for
// branch pushes — those get VERCEL_ENV="production" too yet have no CF Worker
// in front of them and are accessed via a *.vercel.app hostname.
//
// Strategy: only use the CF Worker origin when VERCEL_URL actually resolves to
// the canonical eden.co.uk domain. For every *.vercel.app deployment (whether
// VERCEL_ENV is "production" or "preview") use the deployment's own VERCEL_URL
// so the browser fetches assets from the same origin as the page.
//
//   Real production  (VERCEL_URL contains "eden.co.uk")
//     → ASSET_PRODUCTION_ORIGIN  (CF Worker forwards /_next/static/* back here)
//
//   Branch / preview deploys  (VERCEL_URL is *.vercel.app, even if ENV=production)
//     → https://{VERCEL_URL}  (direct Vercel hostname — no proxy involved)
//
//   Local / v0 sandbox  (VERCEL_URL is undefined)
//     → undefined  (no assetPrefix — same-origin assets)
//
const vercelUrl = process.env.VERCEL_URL ?? "";
const isTrueProduction = vercelUrl.includes("eden.co.uk");
const isVercelDeploy = vercelUrl.length > 0;

export const ASSET_BASE_URL: string | undefined = isTrueProduction
  ? ASSET_PRODUCTION_ORIGIN
  : isVercelDeploy
    ? `https://${vercelUrl}`
    : undefined;

export const API_BASE_URL: string = isTrueProduction
  ? API_PRODUCTION_ORIGIN
  : isVercelDeploy
    ? `https://${vercelUrl}`
    : API_DEV_ORIGIN;
