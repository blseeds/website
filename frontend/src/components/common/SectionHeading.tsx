import { Box, Typography } from '@mui/material';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: align }}>
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: '0.2rem',
          mb: 1,
          display: 'block',
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: light ? 'white' : 'text.primary',
          lineHeight: 1.2,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 4,
          bgcolor: 'primary.main',
          mt: 2,
          mx: align === 'center' ? 'auto' : 0,
          borderRadius: 2,
        }}
      />
    </Box>
  );
}
