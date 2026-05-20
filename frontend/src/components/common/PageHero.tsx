import { Box, Container, Typography, Grid, Stack } from '@mui/material';

interface PageHeroProps {
  title: React.ReactNode;
  breadcrumbs?: string[];
  description?: React.ReactNode;
  bgImage?: string;
  bgColor?: string;
  darkTheme?: boolean;
  rightContent?: React.ReactNode;
}

export default function PageHero({ 
  title, 
  breadcrumbs, 
  description, 
  bgImage, 
  bgColor = '#14532d', 
  darkTheme = true,
  rightContent 
}: PageHeroProps) {
  
  const textColor = darkTheme ? 'white' : 'var(--text-primary)';
  const titleColor = darkTheme ? 'white' : 'var(--primary-green)';
  const breadcrumbActive = darkTheme ? 'white' : 'var(--primary-green)';
  const breadcrumbInactive = darkTheme ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)';

  return (
    <Box 
      sx={{ 
        bgcolor: bgColor, 
        color: textColor,
        py: { xs: 8, md: rightContent ? 12 : 10 },
        backgroundImage: bgImage ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${bgImage}")` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: rightContent ? 6 : 8 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' }, 
                fontWeight: 800,
                color: titleColor,
                mb: breadcrumbs ? 2 : 4
              }}
            >
              {title}
            </Typography>

            {breadcrumbs && breadcrumbs.length > 0 && (
              <Stack direction="row" spacing={1} sx={{ mb: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <Stack direction="row" spacing={1} key={index} sx={{ alignItems: 'center' }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: isLast ? 700 : 600, 
                          color: isLast ? breadcrumbActive : breadcrumbInactive 
                        }}
                      >
                        {crumb}
                      </Typography>
                      {!isLast && (
                        <Typography variant="body2" sx={{ color: breadcrumbInactive }}>&gt;</Typography>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            )}

            {description && (
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  maxWidth: '600px',
                  fontWeight: 500,
                  color: darkTheme ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)',
                  lineHeight: 1.6
                }}
              >
                {description}
              </Typography>
            )}
          </Grid>
          
          {rightContent && (
            <Grid size={{ xs: 12, md: rightContent ? 6 : 4 }}>
              {rightContent}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
