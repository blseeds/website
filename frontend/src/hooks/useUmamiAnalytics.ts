import { useState, useEffect, useCallback, useRef } from 'react';
import { UMAMI_CONFIG, isUmamiConfigured } from '../data/umami.config';

/* ─── Type Definitions ─── */

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
  /** Whether Umami is properly configured */
  isConfigured: boolean;
}

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

/* ─── API Helpers ─── */

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

/* ─── The Hook ─── */

export function useUmamiAnalytics(): UmamiRealtimeData {
  const configured = isUmamiConfigured();
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
    isConfigured: configured,
  });

  const fetchAllData = useCallback(async () => {
    if (!configured) {
      setData(prev => ({ ...prev, isLoading: false, isConfigured: false }));
      return;
    }

    try {
      const websiteId = UMAMI_CONFIG.WEBSITE_ID;

      // Fetch all endpoints in parallel
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

      // Parse realtime data
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

      // Parse stats
      const pageViews = statsData?.pageviews?.value ?? 0;
      const visitors = statsData?.visitors?.value ?? 0;
      const visits = statsData?.visits?.value ?? 1;
      const bounces = statsData?.bounces?.value ?? 0;
      const totalTime = statsData?.totaltime?.value ?? 0;
      const bounceRate = visits > 0 ? Math.round((bounces / visits) * 100) : 0;
      const avgDuration = visits > 0 ? Math.round(totalTime / visits) : 0;

      // Active visitors
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
        isConfigured: true,
      });
    } catch (err) {
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to fetch analytics',
        lastUpdated: new Date(),
      }));
    }
  }, [configured]);

  useEffect(() => {
    fetchAllData();

    if (configured && UMAMI_CONFIG.POLL_INTERVAL > 0) {
      intervalRef.current = setInterval(fetchAllData, UMAMI_CONFIG.POLL_INTERVAL);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fetchAllData, configured]);

  return data;
}
