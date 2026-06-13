import { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Tooltip, Collapse, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useUmamiAnalytics } from '../../hooks/useUmamiAnalytics';
import { UMAMI_CONFIG } from '../../data/umami.config';

/** Country code to flag emoji */
function countryFlag(code: string): string {
  if (!code || code.length !== 2) return '🌐';
  const codePoints = code
    .toUpperCase()
    .split('')
    .map((c) => 0x1f1e6 + c.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

/** Seconds → human readable */
function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

/** Time ago */
function timeAgo(date: Date | null): string {
  if (!date) return '—';
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 10) return 'just now';
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
}

/* ─── Subcomponents ─── */

function PulseDot({ active }: { active: boolean }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 8,
        height: 8,
        flexShrink: 0,
      }}
    >
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
        sx={{
          fontSize: 8,
          color: active ? '#22c55e' : '#555',
          position: 'relative',
        }}
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
  const analytics = useUmamiAnalytics();
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoize the top items
  const topPage = useMemo(
    () => analytics.topPages[0]?.url || '—',
    [analytics.topPages]
  );
  const topCountry = useMemo(
    () => analytics.topCountries[0]?.country || '',
    [analytics.topCountries]
  );

  if (!UMAMI_CONFIG.ENABLED) return null;

  const isActive = analytics.activeVisitors > 0;
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
        // Subtle top glow
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
        {/* Left: Live indicator + active visitors */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PulseDot active={isActive} />
          <Typography
            sx={{
              fontSize: '0.6rem',
              color: 'rgba(255,255,255,0.35)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {analytics.isLoading
              ? 'Connecting…'
              : !analytics.isConfigured
                ? 'Analytics'
                : isActive
                  ? 'Live'
                  : 'Idle'}
          </Typography>

          {analytics.isConfigured && !analytics.isLoading && (
            <StatChip
              icon={<PeopleIcon sx={iconSx} />}
              label="Online"
              value={analytics.activeVisitors}
              tooltip={`${analytics.activeVisitors} active visitor${analytics.activeVisitors !== 1 ? 's' : ''} right now`}
            />
          )}
        </Box>

        {/* Center: Key metrics */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          {analytics.isConfigured && !analytics.isLoading && (
            <>
              <StatChip
                icon={<VisibilityIcon sx={iconSx} />}
                label="Views"
                value={analytics.pageViews.toLocaleString()}
                tooltip="Page views (last 24h)"
              />
              <StatChip
                icon={<TrendingUpIcon sx={iconSx} />}
                label="Visitors"
                value={analytics.visitors.toLocaleString()}
                tooltip="Unique visitors (last 24h)"
              />
              <StatChip
                icon={<AccessTimeIcon sx={iconSx} />}
                label="Avg"
                value={formatDuration(analytics.avgDuration)}
                tooltip="Average session duration"
              />
              {topCountry && (
                <StatChip
                  icon={
                    <Typography component="span" sx={{ fontSize: 11, lineHeight: 1 }}>
                      {countryFlag(topCountry)}
                    </Typography>
                  }
                  label="Top"
                  value={topCountry}
                  tooltip={`Top country: ${topCountry}`}
                />
              )}
              <StatChip
                icon={<LinkIcon sx={iconSx} />}
                label="Page"
                value={topPage.length > 20 ? topPage.slice(0, 20) + '…' : topPage}
                tooltip={`Most visited page: ${topPage}`}
              />
            </>
          )}
          {!analytics.isConfigured && !analytics.isLoading && (
            <Typography
              sx={{
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.25)',
                fontStyle: 'italic',
              }}
            >
              Configure Umami credentials to see live analytics
            </Typography>
          )}
        </Box>

        {/* Right: Expand toggle + last update */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Typography
            sx={{
              fontSize: '0.55rem',
              color: 'rgba(255,255,255,0.2)',
              fontVariantNumeric: 'tabular-nums',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {timeAgo(analytics.lastUpdated)}
          </Typography>
          {analytics.isConfigured && (
            <Tooltip title={expanded ? 'Collapse details' : 'Expand details'} arrow>
              <IconButton
                onClick={() => setExpanded(!expanded)}
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.25)',
                  p: 0.25,
                  '&:hover': { color: 'rgba(255,255,255,0.6)' },
                }}
              >
                {expanded ? (
                  <ExpandLessIcon sx={{ fontSize: 14 }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: 14 }} />
                )}
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* ─── Expanded Details Panel ─── */}
      <Collapse in={expanded} timeout={300}>
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.04)',
            px: { xs: 1.5, sm: 3 },
            py: 1.5,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 1.5,
          }}
        >
          {/* Stats Overview */}
          <DetailCard title="Overview">
            <DetailRow label="Page Views (24h)" value={analytics.pageViews.toLocaleString()} />
            <DetailRow label="Unique Visitors" value={analytics.visitors.toLocaleString()} />
            <DetailRow label="Bounce Rate" value={`${analytics.bounceRate}%`} />
            <DetailRow label="Avg Duration" value={formatDuration(analytics.avgDuration)} />
            <DetailRow label="Active Now" value={String(analytics.activeVisitors)} highlight />
          </DetailCard>

          {/* Top Pages */}
          <DetailCard title="Top Pages" icon={<BarChartIcon sx={{ fontSize: 10 }} />}>
            {analytics.topPages.length > 0 ? (
              analytics.topPages.map((p, i) => (
                <DetailRow
                  key={i}
                  label={p.url.length > 24 ? p.url.slice(0, 24) + '…' : p.url}
                  value={String(p.count)}
                />
              ))
            ) : (
              <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
                No data yet
              </Typography>
            )}
          </DetailCard>

          {/* Top Countries */}
          <DetailCard title="Countries" icon={<PublicIcon sx={{ fontSize: 10 }} />}>
            {analytics.topCountries.length > 0 ? (
              analytics.topCountries.map((c, i) => (
                <DetailRow
                  key={i}
                  label={`${countryFlag(c.country)} ${c.country}`}
                  value={String(c.count)}
                />
              ))
            ) : (
              <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
                No data yet
              </Typography>
            )}
          </DetailCard>

          {/* Top Referrers */}
          <DetailCard title="Referrers" icon={<LinkIcon sx={{ fontSize: 10 }} />}>
            {analytics.topReferrers.length > 0 ? (
              analytics.topReferrers.map((r, i) => (
                <DetailRow
                  key={i}
                  label={
                    r.referrer.length > 24
                      ? r.referrer.slice(0, 24) + '…'
                      : r.referrer || 'Direct'
                  }
                  value={String(r.count)}
                />
              ))
            ) : (
              <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
                No data yet
              </Typography>
            )}
          </DetailCard>
        </Box>

        {/* Recent Events */}
        {analytics.events.length > 0 && (
          <Box
            sx={{
              borderTop: '1px solid rgba(255,255,255,0.03)',
              px: { xs: 1.5, sm: 3 },
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.55rem',
                color: 'rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Recent Activity
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.75, overflowX: 'auto', pb: 0.5 }}>
              {analytics.events.slice(0, 6).map((event, i) => (
                <Box
                  key={i}
                  sx={{
                    px: 1,
                    py: 0.4,
                    borderRadius: '4px',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      bgcolor:
                        event.type === 'pageview'
                          ? 'rgba(59,130,246,0.6)'
                          : 'rgba(168,85,247,0.6)',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.55rem',
                      color: 'rgba(255,255,255,0.4)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {event.eventName || event.url || event.type}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Collapse>
    </Box>
  );
}

/* ─── Detail Subcomponents ─── */

function DetailCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '8px',
        p: 1.25,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.75 }}>
        {icon && (
          <Box sx={{ color: 'rgba(255,255,255,0.2)' }}>{icon}</Box>
        )}
        <Typography
          sx={{
            fontSize: '0.55rem',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.4 }}>{children}</Box>
    </Box>
  );
}

function DetailRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography
        sx={{
          fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.35)',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.6rem',
          color: highlight ? '#22c55e' : 'rgba(255,255,255,0.7)',
          fontWeight: 700,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
