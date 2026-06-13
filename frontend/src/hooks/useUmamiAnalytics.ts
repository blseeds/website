// import { useState, useEffect, useCallback, useRef } from 'react';
// import { UMAMI_CONFIG, isUmamiApiAvailable } from '../data/umami.config';

/**
 * ═══════════════════════════════════════════════════════════════
 * useUmamiAnalytics — Real-time analytics data from Umami API
 * ═══════════════════════════════════════════════════════════════
 * 
 * 🔒 REQUIRES PAID PLAN (API key access)
 * 
 * This hook is fully implemented and ready to use once you
 * upgrade from the Hobby plan and obtain an API key.
 * 
 * To enable:
 *   1. Upgrade your Umami Cloud plan
 *   2. Create an API key in Settings → API Keys
 *   3. Uncomment BASE_URL, API_KEY, POLL_INTERVAL in umami.config.ts
 *   4. Uncomment all code below
 *   5. Update UmamiAnalyticsBar.tsx to use this hook
 * ═══════════════════════════════════════════════════════════════
 */

/* ─── Type Definitions (exported for future use) ─── */

export interface UmamiRealtimeData {
  /** Active visitors right now */
  activeVisitors: number;
  /** Page views in the current period */
  pageViews: number;
  /** Unique visitors in the current period */
  visitors: number;
  /** Bounce rate percentage */
  bounceRate: number;
  /** Average visit duration in seconds */
  avgDuration: number;
  /** Top pages being viewed */
  topPages: Array<{ url: string; count: number }>;
  /** Top referrers */
  topReferrers: Array<{ referrer: string; count: number }>;
  /** Top countries */
  topCountries: Array<{ country: string; count: number }>;
  /** Recent events */
  events: Array<{
    type: string;
    eventName: string;
    url: string;
    createdAt: string;
  }>;
  /** Whether data is currently being fetched */
  isLoading: boolean;
  /** Any error that occurred */
  error: string | null;
  /** When this data was last updated */
  lastUpdated: Date | null;
  /** Whether Umami API is available */
  isApiAvailable: boolean;
}

/*
// ──────────────────────────────────────────────────────
// UNCOMMENT EVERYTHING BELOW WHEN YOU HAVE AN API KEY
// ──────────────────────────────────────────────────────

interface UmamiRealtimeApiResponse {
  countries?: Record<string, number>;
  urls?: Record<string, number>;
  referrers?: Record<string, number>;
  events?: Array<{
    __type?: string;
    eventName?: string;
    urlPath?: string;
    url?: string;
    createdAt?: string;
  }>;
  timestamp?: number;
}

interface UmamiStatsApiResponse {
  pageviews?: { value: number; prev?: number };
  visitors?: { value: number; prev?: number };
  visits?: { value: number; prev?: number };
  bounces?: { value: number; prev?: number };
  totaltime?: { value: number; prev?: number };
}

interface UmamiActiveApiResponse {
  x?: number;
  [key: string]: unknown;
}

// ─── API Helpers ───

const headers = (): HeadersInit => ({
  'Accept': 'application/json',
  'x-umami-api-key': UMAMI_CONFIG.API_KEY,
});

async function fetchApi<T>(endpoint: string): Promise<T> {
  const url = `${UMAMI_CONFIG.BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error(`Umami API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// ─── The Hook ───

export function useUmamiAnalytics(): UmamiRealtimeData {
  const apiAvailable = isUmamiApiAvailable();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [data, setData] = useState<UmamiRealtimeData>({
    activeVisitors: 0,
    pageViews: 0,
    visitors: 0,
    bounceRate: 0,
    avgDuration: 0,
    topPages: [],
    topReferrers: [],
    topCountries: [],
    events: [],
    isLoading: true,
    error: null,
    lastUpdated: null,
    isApiAvailable: apiAvailable,
  });

  const fetchAllData = useCallback(async () => {
    if (!apiAvailable) {
      setData(prev => ({ ...prev, isLoading: false, isApiAvailable: false }));
      return;
    }

    try {
      const websiteId = UMAMI_CONFIG.WEBSITE_ID;

      const [realtimeData, statsData, activeData] = await Promise.all([
        fetchApi<UmamiRealtimeApiResponse>(
          `/websites/${websiteId}/realtime`
        ).catch(() => null),
        fetchApi<UmamiStatsApiResponse>(
          `/websites/${websiteId}/stats?startAt=${Date.now() - 86400000}&endAt=${Date.now()}`
        ).catch(() => null),
        fetchApi<UmamiActiveApiResponse>(
          `/websites/${websiteId}/active`
        ).catch(() => null),
      ]);

      const topPages = realtimeData?.urls
        ? Object.entries(realtimeData.urls)
            .map(([url, count]) => ({ url, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
        : [];

      const topReferrers = realtimeData?.referrers
        ? Object.entries(realtimeData.referrers)
            .map(([referrer, count]) => ({ referrer, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
        : [];

      const topCountries = realtimeData?.countries
        ? Object.entries(realtimeData.countries)
            .map(([country, count]) => ({ country, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
        : [];

      const events = (realtimeData?.events || [])
        .slice(0, 10)
        .map(e => ({
          type: e.__type || 'pageview',
          eventName: e.eventName || '',
          url: e.urlPath || e.url || '',
          createdAt: e.createdAt || '',
        }));

      const pageViews = statsData?.pageviews?.value ?? 0;
      const visitors = statsData?.visitors?.value ?? 0;
      const visits = statsData?.visits?.value ?? 1;
      const bounces = statsData?.bounces?.value ?? 0;
      const totalTime = statsData?.totaltime?.value ?? 0;
      const bounceRate = visits > 0 ? Math.round((bounces / visits) * 100) : 0;
      const avgDuration = visits > 0 ? Math.round(totalTime / visits) : 0;

      const activeVisitors = activeData?.x ?? 0;

      setData({
        activeVisitors,
        pageViews,
        visitors,
        bounceRate,
        avgDuration,
        topPages,
        topReferrers,
        topCountries,
        events,
        isLoading: false,
        error: null,
        lastUpdated: new Date(),
        isApiAvailable: true,
      });
    } catch (err) {
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to fetch analytics',
        lastUpdated: new Date(),
      }));
    }
  }, [apiAvailable]);

  useEffect(() => {
    fetchAllData();

    if (apiAvailable && UMAMI_CONFIG.POLL_INTERVAL > 0) {
      intervalRef.current = setInterval(fetchAllData, UMAMI_CONFIG.POLL_INTERVAL);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fetchAllData, apiAvailable]);

  return data;
}
*/
