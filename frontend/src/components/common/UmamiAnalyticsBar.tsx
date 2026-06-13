import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Tooltip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import DevicesIcon from '@mui/icons-material/Devices';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RouteIcon from '@mui/icons-material/Route';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { UMAMI_CONFIG } from '../../data/umami.config';

// ─── Commented out: API-dependent imports (requires paid plan) ───
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import PeopleIcon from '@mui/icons-material/People';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import PublicIcon from '@mui/icons-material/Public';
// import LinkIcon from '@mui/icons-material/Link';
// import { useUmamiAnalytics } from '../../hooks/useUmamiAnalytics';

/* ─── Client-side session tracking (no API key needed) ─── */

interface ClientSideStats {
  currentPage: string;
  pagesViewed: number;
  sessionStart: Date;
  sessionDuration: string;
  referrer: string;
  screenSize: string;
  language: string;
  isTrackingActive: boolean;
}

function useClientSideStats(): ClientSideStats {
  const location = useLocation();
  const [stats, setStats] = useState<ClientSideStats>(() => ({
    currentPage: location.pathname,
    pagesViewed: 1,
    sessionStart: new Date(),
    sessionDuration: '0s',
    referrer: document.referrer ? new URL(document.referrer).hostname : 'Direct',
    screenSize: `${window.innerWidth}×${window.innerHeight}`,
    language: navigator.language,
    isTrackingActive: typeof window !== 'undefined' && !!document.querySelector(
      `script[src*="umami"][data-website-id="${UMAMI_CONFIG.WEBSITE_ID}"]`
    ),
  }));

  // Track page navigation count
  useEffect(() => {
    setStats(prev => ({
      ...prev,
      currentPage: location.pathname,
      pagesViewed: prev.pagesViewed + 1,
    }));
    // Only increment on pathname change after initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Update session duration every second
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const elapsed = Math.floor((Date.now() - prev.sessionStart.getTime()) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        return {
          ...prev,
          sessionDuration: mins > 0 ? `${mins}m ${secs}s` : `${secs}s`,
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return stats;
}

/* ─── Subcomponents ─── */

function PulseDot({ active }: { active: boolean }) {
  return (
    <Box sx={{ position: 'relative', width: 8, height: 8, flexShrink: 0 }}>
      {active && (
        <Box
          sx={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            bgcolor: '#22c55e',
            opacity: 0.4,
            animation: 'umamiPulse 2s ease-in-out infinite',
            '@keyframes umamiPulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.4 },
              '50%': { transform: 'scale(1.8)', opacity: 0 },
            },
          }}
        />
      )}
      <FiberManualRecordIcon
        sx={{ fontSize: 8, color: active ? '#22c55e' : '#555', position: 'relative' }}
      />
    </Box>
  );
}

function StatChip({
  icon,
  label,
  value,
  tooltip,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  tooltip?: string;
}) {
  return (
    <Tooltip title={tooltip || label} arrow placement="top">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          px: 1,
          py: 0.25,
          borderRadius: '6px',
          bgcolor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'all 0.2s ease',
          cursor: 'default',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
          },
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            display: { xs: 'none', sm: 'inline' },
          }}
        >
          {label}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {value}
        </Typography>
      </Box>
    </Tooltip>
  );
}

/* ─── Main Component ─── */

export default function UmamiAnalyticsBar() {
  const stats = useClientSideStats();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!UMAMI_CONFIG.ENABLED) return null;

  const iconSx = { fontSize: 11, color: 'rgba(255,255,255,0.3)' };

  return (
    <Box
      id="umami-analytics-bar"
      sx={{
        bgcolor: '#0a0a0b',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        fontFamily: '"Inter", -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        transform: mounted ? 'translateY(0)' : 'translateY(100%)',
        opacity: mounted ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)',
        },
      }}
    >
      {/* ─── Slim Bar ─── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 1.5, sm: 3 },
          py: 0.75,
          minHeight: 32,
        }}
      >
        {/* Left: Tracking status */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PulseDot active={stats.isTrackingActive} />
          <Typography
            sx={{
              fontSize: '0.6rem',
              color: 'rgba(255,255,255,0.35)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {stats.isTrackingActive ? 'Tracking' : 'Not Tracking'}
          </Typography>

          <StatChip
            icon={<BarChartIcon sx={iconSx} />}
            label="Page"
            value={stats.currentPage === '/' ? 'Home' : stats.currentPage.slice(1).replace(/-/g, ' ')}
            tooltip={`Current page: ${stats.currentPage}`}
          />
        </Box>

        {/* Center: Session metrics */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <StatChip
            icon={<RouteIcon sx={iconSx} />}
            label="Pages"
            value={stats.pagesViewed}
            tooltip={`${stats.pagesViewed} page${stats.pagesViewed !== 1 ? 's' : ''} viewed this session`}
          />
          <StatChip
            icon={<AccessTimeIcon sx={iconSx} />}
            label="Session"
            value={stats.sessionDuration}
            tooltip="Current session duration"
          />
          <StatChip
            icon={<LanguageIcon sx={iconSx} />}
            label="From"
            value={stats.referrer}
            tooltip={`Referrer: ${stats.referrer}`}
          />
          <StatChip
            icon={<DevicesIcon sx={iconSx} />}
            label="Screen"
            value={stats.screenSize}
            tooltip={`Viewport: ${stats.screenSize}`}
          />
        </Box>

        {/* Right: Dashboard link */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Tooltip title="Open Umami Dashboard" arrow>
            <Box
              component="a"
              href={UMAMI_CONFIG.DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.4,
                px: 0.75,
                py: 0.25,
                borderRadius: '4px',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                fontSize: '0.55rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'rgba(255,255,255,0.5)',
                  bgcolor: 'rgba(255,255,255,0.04)',
                },
              }}
            >
              <OpenInNewIcon sx={{ fontSize: 10 }} />
              <Typography
                component="span"
                sx={{
                  fontSize: '0.55rem',
                  display: { xs: 'none', sm: 'inline' },
                  color: 'inherit',
                }}
              >
                Dashboard
              </Typography>
            </Box>
          </Tooltip>
        </Box>
      </Box>

      {/* 🔒 Expanded details panel requires paid plan — see commented block below component */}
    </Box>
  );
}

/*
 * ════════════════════════════════════════════════════════════════
 * 🔒 EXPANDED DETAILS PANEL — Requires paid plan API key
 * 
 * Uncomment and move this JSX back inside the component return
 * (after the slim bar's closing </Box>) when you upgrade and
 * enable useUmamiAnalytics. This will add:
 * - Overview card (pageviews, visitors, bounce rate, avg duration)
 * - Top Pages card
 * - Countries card with flag emojis
 * - Referrers card
 * - Recent Activity event chips
 * ════════════════════════════════════════════════════════════════
 *
 * <Collapse in={expanded} timeout={300}>
 *   <Box
 *     sx={{
 *       borderTop: '1px solid rgba(255,255,255,0.04)',
 *       px: { xs: 1.5, sm: 3 },
 *       py: 1.5,
 *       display: 'grid',
 *       gridTemplateColumns: {
 *         xs: '1fr',
 *         sm: 'repeat(2, 1fr)',
 *         md: 'repeat(4, 1fr)',
 *       },
 *       gap: 1.5,
 *     }}
 *   >
 *     <DetailCard title="Overview">
 *       <DetailRow label="Page Views (24h)" value={analytics.pageViews.toLocaleString()} />
 *       <DetailRow label="Unique Visitors" value={analytics.visitors.toLocaleString()} />
 *       <DetailRow label="Bounce Rate" value={`${analytics.bounceRate}%`} />
 *       <DetailRow label="Avg Duration" value={formatDuration(analytics.avgDuration)} />
 *       <DetailRow label="Active Now" value={String(analytics.activeVisitors)} highlight />
 *     </DetailCard>
 *
 *     <DetailCard title="Top Pages" icon={<BarChartIcon sx={{ fontSize: 10 }} />}>
 *       {analytics.topPages.map((p, i) => (
 *         <DetailRow key={i} label={p.url} value={String(p.count)} />
 *       ))}
 *     </DetailCard>
 *
 *     <DetailCard title="Countries" icon={<PublicIcon sx={{ fontSize: 10 }} />}>
 *       {analytics.topCountries.map((c, i) => (
 *         <DetailRow key={i} label={`${countryFlag(c.country)} ${c.country}`} value={String(c.count)} />
 *       ))}
 *     </DetailCard>
 *
 *     <DetailCard title="Referrers" icon={<LinkIcon sx={{ fontSize: 10 }} />}>
 *       {analytics.topReferrers.map((r, i) => (
 *         <DetailRow key={i} label={r.referrer || 'Direct'} value={String(r.count)} />
 *       ))}
 *     </DetailCard>
 *   </Box>
 *
 *   {analytics.events.length > 0 && (
 *     <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.03)', px: { xs: 1.5, sm: 3 }, py: 1 }}>
 *       <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, mb: 0.5 }}>
 *         Recent Activity
 *       </Typography>
 *       <Box sx={{ display: 'flex', gap: 0.75, overflowX: 'auto', pb: 0.5 }}>
 *         {analytics.events.slice(0, 6).map((event, i) => (
 *           <Box key={i} sx={{ px: 1, py: 0.4, borderRadius: '4px', bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 0.5 }}>
 *             <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: event.type === 'pageview' ? 'rgba(59,130,246,0.6)' : 'rgba(168,85,247,0.6)', flexShrink: 0 }} />
 *             <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
 *               {event.eventName || event.url || event.type}
 *             </Typography>
 *           </Box>
 *         ))}
 *       </Box>
 *     </Box>
 *   )}
 * </Collapse>
 */
