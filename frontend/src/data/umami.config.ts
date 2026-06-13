/**
 * Umami Analytics Configuration
 * 
 * CURRENT PLAN: Umami Cloud Hobby (Free)
 * - ✅ Tracking script (page views, events) — works without API key
 * - ✅ Client-side umami.track() calls — works without API key
 * - ❌ API endpoints (stats, realtime, active visitors) — requires paid plan API key
 * 
 * When you upgrade to a paid plan, uncomment the API_KEY and BASE_URL
 * fields below, and uncomment the API-fetching code in:
 *   - src/hooks/useUmamiAnalytics.ts
 *   - src/components/common/UmamiAnalyticsBar.tsx
 */

export const UMAMI_CONFIG = {
  /** Website ID (UUID) from Umami dashboard */
  WEBSITE_ID: '36518791-36f7-40b5-b2f8-c2f9067d129a',

  /** Umami tracking script URL */
  SCRIPT_URL: 'https://cloud.umami.is/script.js',

  /** Umami Cloud dashboard URL for this website */
  DASHBOARD_URL: 'https://cloud.umami.is',

  // ──────────────────────────────────────────────────
  // 🔒 PAID PLAN ONLY — Uncomment when you upgrade
  // ──────────────────────────────────────────────────

  // /** Base URL for Umami API requests */
  // BASE_URL: import.meta.env.VITE_UMAMI_BASE_URL || 'https://api.umami.is/v1',

  // /** API Key for authenticated requests (paid plans only) */
  // API_KEY: import.meta.env.VITE_UMAMI_API_KEY || '',

  // /** Polling interval in ms for real-time data (default: 30s) */
  // POLL_INTERVAL: 30_000,

  /** Whether to enable the analytics bar */
  ENABLED: true,
} as const;

/** 
 * Check if Umami API is available (requires paid plan API key).
 * Currently always returns false on Hobby plan.
 * Uncomment the real check when you upgrade.
 */
export function isUmamiApiAvailable(): boolean {
  // return !!UMAMI_CONFIG.API_KEY && UMAMI_CONFIG.API_KEY !== '';
  return false;
}
