import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  darkText?: boolean;
}

export default function SectionHeader({ title, highlight, darkText = true }: SectionHeaderProps) {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: '2.5rem', 
          mb: 2, 
          fontWeight: 700,
          color: darkText ? 'var(--text-primary)' : 'white' 
        }}
      >
        {title} {highlight && <span style={{ color: 'var(--primary-green)' }}>{highlight}</span>}
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: 'var(--accent-gold)', mx: 'auto', borderRadius: 2 }} />
    </Box>
  );
}
