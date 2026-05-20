import * as React from 'react';
import { 
  AppBar, Box, Toolbar, IconButton, Container, Button, 
  Drawer, List, ListItem, ListItemButton, Stack, 
  useScrollTrigger, Link, alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  // { name: 'Products', path: '/products' },
  // { name: 'Gallery', path: '/gallery' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' },
  // { name: 'Dealer Enquiry', path: '/dealer-enquiry'}
];

const primaryGreen = '#0b5d1e';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isHome = location.pathname === '/';
  const isScrolled = trigger;

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          top: isScrolled ? { xs: '10px', md: '15px' } : 0,
          left: isScrolled ? { xs: '12px', md: '20px' } : 0,
          right: isScrolled ? { xs: '12px', md: '20px' } : 0,
          width: isScrolled ? { xs: 'calc(100% - 24px)', md: 'calc(100% - 40px)' } : '100%',
          mx: 'auto',
          zIndex: 1100,
          backgroundColor: isScrolled 
            ? alpha('#ffffff', 0.85)
            : (isHome ? 'transparent' : alpha('#ffffff', 0.75)),
          backdropFilter: 'blur(16px)',
          borderRadius: isScrolled ? '20px' : 0,
          border: isScrolled 
            ? `1px solid ${alpha('#000', 0.06)}` 
            : `1px solid ${alpha('#000', 0.04)}`,
          boxShadow: isScrolled 
            ? '0 8px 24px rgba(0, 0, 0, 0.08)' 
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
          color: '#1f2933',
          py: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              justifyContent: 'space-between',
              minHeight: { 
                xs: isScrolled ? '56px' : '64px', 
                md: isScrolled ? '64px' : '76px' 
              },
              transition: 'min-height 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              px: { xs: 0, sm: 2 }
            }}
          >
            {/* LOGO */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                '&:hover': { 
                  transform: 'scale(1.04)',
                }
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="BL Seeds Logo"
                sx={{
                  height: { xs: isScrolled ? '40px' : '56px', md: isScrolled ? '48px' : '64px' },
                  width: 'auto',
                  transition: 'height 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Stack 
              direction="row" 
              spacing={0.5} 
              sx={{ 
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center'
              }}
            >
              {pages.map((page) => {
                const isActive = location.pathname === page.path;
                return (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={{ 
                      color: isActive ? primaryGreen : '#1f2933',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      px: 1.8,
                      py: 0.7,
                      borderRadius: '10px',
                      textTransform: 'none',
                      letterSpacing: '0.3px',
                      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                      backgroundColor: isActive ? alpha(primaryGreen, 0.08) : 'transparent',
                      '&:hover': {
                        backgroundColor: alpha(primaryGreen, 0.06),
                        color: primaryGreen,
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Stack>

            {/* CTA BUTTON & MOBILE TOGGLE */}
            <Stack 
              direction="row" 
              spacing={{ xs: 1, lg: 2 }} 
              sx={{ alignItems: 'center' }}
            >
              <Box sx={{ display: { lg: 'none' } }}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    bgcolor: isScrolled ? alpha(primaryGreen, 0.08) : alpha('#000', 0.02),
                    color: primaryGreen,
                    borderRadius: '12px',
                    p: 1.2,
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                    '&:hover': {
                      bgcolor: alpha(primaryGreen, 0.12),
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <MenuIcon sx={{ fontSize: '1.4rem' }} />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: { 
              width: { xs: '100%', sm: 340 }, 
              bgcolor: alpha('#ffffff', 0.88),
              backdropFilter: 'blur(20px)',
              borderLeft: `1px solid ${alpha('#000', 0.06)}`,
              p: 0,
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.08)'
            }
          }
        }}
      >
        {/* Header */}
        <Box sx={{ 
          p: 2, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          borderBottom: `1px solid ${alpha('#000', 0.06)}`,
          bgcolor: 'transparent'
        }}>
          <Box
            component="img"
            src={Logo}
            alt="BL Seeds Logo"
            sx={{ 
              height: 48, 
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              color: '#1f2933', 
              bgcolor: alpha('#000', 0.04),
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
              '&:hover': {
                bgcolor: alpha(primaryGreen, 0.1),
                transform: 'rotate(90deg)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Navigation */}
        <List sx={{ pt: 2, px: 1.5, flex: 1 }}>
          {pages.map((page) => {
            const isActive = location.pathname === page.path;
            return (
              <ListItem key={page.name} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton 
                  component={RouterLink} 
                  to={page.path} 
                  onClick={handleDrawerToggle}
                  sx={{ 
                    borderRadius: '12px',
                    py: 1.4,
                    px: 2,
                    bgcolor: isActive ? alpha(primaryGreen, 0.1) : 'transparent',
                    color: isActive ? primaryGreen : '#1f2933',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                    letterSpacing: '0.2px',
                    '&:hover': { 
                      bgcolor: alpha(primaryGreen, 0.08),
                      color: primaryGreen,
                      transform: 'translateX(2px)'
                    }
                  }}
                >
                  <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box>{page.name}</Box>
                    {isActive && <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: primaryGreen }} />}
                  </Stack>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        
        {/* Footer Section */}
        <Box 
          sx={{ 
            p: 2.5, 
            borderTop: `1px solid ${alpha('#000', 0.06)}`,
            bgcolor: alpha(primaryGreen, 0.02)
          }}
        >
          {/* Contact Details */}
          <Stack spacing={1.8} sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
              <EmailIcon sx={{ fontSize: '1rem', color: primaryGreen, mt: 0.3, flexShrink: 0 }} />
              <Link 
                href="mailto:info.blseedsfarm@gmail.com" 
                color="inherit" 
                underline="none"
                sx={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 500, 
                  color: '#667085',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: primaryGreen }
                }}
              >
                info.blseedsfarm@gmail.com
              </Link>
            </Stack>
            <Stack direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
              <PhoneIcon sx={{ fontSize: '1rem', color: primaryGreen, mt: 0.3, flexShrink: 0 }} />
              <Link 
                href="tel:+918449050067" 
                color="inherit" 
                underline="none"
                sx={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 500, 
                  color: '#667085',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: primaryGreen }
                }}
              >
                +91 84490 50067
              </Link>
            </Stack>
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mb: 3 }}>
            {[
              { icon: <FacebookIcon />, url: 'https://www.facebook.com/share/14jmEQoFDxw/?mibextid=wwXIfr' },
              { icon: <InstagramIcon />, url: 'https://www.instagram.com/blseeds' },
              { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/blseedsfarm/' },
            ].map((social, index) => (
              <Link 
                key={index}
                href={social.url} 
                color="inherit"
                sx={{ 
                  display: 'flex',
                  p: 1,
                  borderRadius: '10px',
                  bgcolor: alpha('#000', 0.03),
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                  '&:hover': { 
                    color: 'white',
                    bgcolor: primaryGreen,
                    transform: 'translateY(-3px)' 
                  },
                  '& svg': { fontSize: '1.05rem' }
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

