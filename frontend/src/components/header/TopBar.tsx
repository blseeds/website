import { Box, Container, Typography, Link, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TopBar() {
  return (
    <Box
      sx={{
        bgcolor: '#053e14', // Slightly darker, more premium green
        color: 'rgba(255,255,255,0.9)',
        py: 0.6,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: { xs: 'none', lg: 'block' }
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <EmailIcon sx={{ fontSize: '0.85rem', color: 'var(--secondary-green)' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.02em',
                  color: 'white',
                  '&:hover': { color: 'white' }
                }}
              >
                <Link href="mailto:info.blseedsfarm@gmail.com" color="inherit" underline="none">
                  info.blseedsfarm@gmail.com
                </Link>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <PhoneIcon sx={{ fontSize: '0.85rem', color: 'var(--secondary-green)' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.02em',
                  color: 'white',
                  '&:hover': { color: 'white' }
                }}
              >
                <Link href="tel:+918449050067" color="inherit" underline="none">
                  +91 84490 50067
                </Link>
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center' }}>
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
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'var(--secondary-green)',
                    transform: 'translateY(-1px)'
                  },
                  '& svg': { fontSize: '1rem' }
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
