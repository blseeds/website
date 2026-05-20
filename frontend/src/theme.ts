import { createTheme } from '@mui/material/styles';

/**
 * B.L Seeds MUI Theme
 * This theme uses CSS variables defined in index.css to dynamically
 * adapt to different page design systems.
 */
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-page',
  },
  palette: {
    primary: {
      main: '#0b5d1e', // Default hex fallback
    },
    secondary: {
      main: '#3d9b41', // Default hex fallback
    },
    background: {
      default: '#f8f9f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2933',
      secondary: '#667085',
    },
  },
  typography: {
    fontFamily: 'var(--body-font)',
    h1: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 28px',
          boxShadow: 'none',
          backgroundColor: 'var(--primary-green)',
          color: '#ffffff',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: 'var(--primary-green)',
            opacity: 0.9,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          borderRadius: 20,
          backgroundColor: 'var(--surface-color, #ffffff)',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary)',
        },
      },
    },
  },
});

export default theme;
