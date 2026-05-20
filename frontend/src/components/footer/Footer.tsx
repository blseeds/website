import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link as RouterLink } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  // { name: 'Products', path: '/products' },
  // { name: 'Gallery', path: '/gallery' },
  // { name: 'Blog', path: '/blog' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', pt: 10, pb: 4, fontFamily: 'var(--body-font)' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* BRAND SECTION */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: 'primary.light', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              BLSEEDS
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 4, lineHeight: 1.8, maxWidth: '90%' }}>
              At B.L. Seeds Farm, quality is not a benchmark—it is a philosophy embedded in every decision, every process, and every seed we produce.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { Icon: FacebookIcon, url: 'https://www.facebook.com/share/14jmEQoFDxw/?mibextid=wwXIfr' },
                { Icon: InstagramIcon, url: 'https://www.instagram.com/blseeds' },
                { Icon: LinkedInIcon, url: 'https://www.linkedin.com/company/blseedsfarm/' }
              ].map(({ Icon, url }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              Explore
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                to={link.path}
                underline="none"
                sx={{
                  display: 'block',
                  mb: 2,
                  color: 'grey.500',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'white' },
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          {/* CONTACT INFO */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <LocationOnIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                B.L SEEDS FARM, Station road Railmandi, Jaswantnagar, Etawah, 206245
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <PhoneIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                +91 8449050067
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                info.blseedsfarm@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 10, mb: 4, borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'grey.700', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} BLSEEDS. All rights reserved.
          </Typography>
          {/* <Box sx={{ display: 'flex', gap: 4 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" sx={{ color: 'grey.700', fontSize: '0.8rem', textDecoration: 'none', '&:hover': { color: 'grey.500' } }}>
                {item}
              </Link>
            ))}
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
