/**
 * Umami Analytics Configuration
 * 
 * Replace the placeholder values below with your actual Umami credentials.
 * 
 * For Umami Cloud:
 *   - UMAMI_BASE_URL: "https://api.umami.is/v1"
 *   - UMAMI_SCRIPT_URL: "https://cloud.umami.is/script.js"
 *   - UMAMI_WEBSITE_ID: Your website UUID from Umami Cloud dashboard
 *   - UMAMI_API_KEY: Your API key from Settings → API Keys
 * 
 * For Self-Hosted:
 *   - UMAMI_BASE_URL: "https://your-umami-domain.com/api"
 *   - UMAMI_SCRIPT_URL: "https://your-umami-domain.com/script.js"
 *   - UMAMI_WEBSITE_ID: Your website UUID
 *   - UMAMI_API_KEY: Bearer token from /api/auth/login
 */

export const UMAMI_CONFIG = {
  /** Base URL for Umami API requests */
  BASE_URL: import.meta.env.VITE_UMAMI_BASE_URL || 'https://api.umami.is/v1',

  /** Umami tracking script URL */
  SCRIPT_URL: import.meta.env.VITE_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js',

  /** Website ID (UUID) from Umami dashboard */
  WEBSITE_ID: import.meta.env.VITE_UMAMI_WEBSITE_ID || 'YOUR_WEBSITE_ID_HERE',

  /** API Key for authenticated requests */
  API_KEY: import.meta.env.VITE_UMAMI_API_KEY || 'YOUR_API_KEY_HERE',

  /** Polling interval in milliseconds for real-time data (default: 30 seconds) */
  POLL_INTERVAL: 30_000,

  /** Whether to enable the analytics bar (set to false to hide) */
  ENABLED: true,
} as const;

/** Check if Umami is properly configured with real credentials */
export function isUmamiConfigured(): boolean {
  return (
    UMAMI_CONFIG.WEBSITE_ID !== 'YOUR_WEBSITE_ID_HERE' &&
    UMAMI_CONFIG.API_KEY !== 'YOUR_API_KEY_HERE'
  );
}
