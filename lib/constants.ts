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

// Origin resolution — keyed on VERCEL_ENV, not NODE_ENV:
//
// NODE_ENV is "production" for EVERY Vercel build (production AND preview),
// so using it here caused preview deployments to set assetPrefix to
// eden.co.uk/events — a URL that has no Cloudflare Worker pointing at the
// preview deployment. The browser then 404s every CSS/JS chunk and the page
// renders completely unstyled.
//
// VERCEL_ENV is injected by Vercel before the build runs and correctly
// distinguishes "production" (behind the CF Worker) from "preview" (direct
// Vercel deployment URL) and local dev (undefined).
//
// Production  → CF Worker proxy origin   → assets via eden.co.uk/events
// Preview     → deployment's VERCEL_URL  → assets from the preview hostname
// Local / v0  → undefined (no prefix)   → same-origin assets
export const ASSET_BASE_URL: string | undefined =
  process.env.VERCEL_ENV === "production"
    ? ASSET_PRODUCTION_ORIGIN
    : process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined;

export const API_BASE_URL: string =
  process.env.VERCEL_ENV === "production"
    ? API_PRODUCTION_ORIGIN
    : process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : API_DEV_ORIGIN;
