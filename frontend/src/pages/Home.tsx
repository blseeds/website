import { Box, Container, Typography, Button, Grid, Stack, Avatar } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import { homeFeatures, homeStats, testimonials, allProducts } from '../data/constants';

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '580px' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          bgcolor: '#f0f4f0'
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 0 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ maxWidth: '650px' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 3,
                    color: 'var(--text-primary)',
                    fontWeight: 900
                  }}
                >
                  High Quality <br />
                  <span style={{ color: 'var(--primary-green)' }}>Seeds for Better Yield</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    mb: 5,
                    color: 'white',
                    lineHeight: 1.7,
                    fontWeight: 500
                  }}
                >
                  We provide high germination, disease resistant and <br />
                  best quality seeds for every kind of crop.
                </Typography>
                {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'var(--primary-green)',
                      px: 4, py: 1.8,
                      fontSize: '0.9rem',
                      fontWeight: 800
                    }}
                  >
                    EXPLORE PRODUCTS
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    sx={{
                      borderColor: '#e5e7eb',
                      color: 'var(--text-primary)',
                      px: 4, py: 1.8,
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      bgcolor: 'white',
                      '&:hover': {
                        borderColor: 'var(--primary-green)',
                        bgcolor: '#f8f9fa'
                      }
                    }}
                  >
                    CONTACT US
                  </Button>
                </Stack> */}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1268947834/photo/groats-in-bags.jpg?s=612x612&w=0&k=20&c=L175sHBQnBss-wSwJd8DSQTd8-Trdy5zs6IzDpYH21o="
                sx={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/48/58/60/360_F_348586063_Qet050UULnm7C4IR4kzhnzUrcvQt7SQN.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.75,
            zIndex: 1
          }}
        />
      </Box>

      {/* FEATURES ROW */}
      <Box sx={{ py: 6, borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
        {/* Background image — replace the src URL with your dark green grass image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTllmrNuh0jlmsUfDu5F8EDHRwm2x7AX145w&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Dark overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            bgcolor: 'rgba(10, 40, 15, 0.78)',
            zIndex: 1
          }}
        />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {homeFeatures.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 50, height: 50,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a8d5a2',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)', display: 'block', mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OUR TOP PRODUCTS */}
      {/* <Box sx={{ py: 12, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <SectionHeader title="Our Top" highlight="Products" />

          <Grid container spacing={4}>
            {allProducts.slice(0, 5).map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <ProductCard product={product} variant="home" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* STATS SECTION */}
      {/* <Box sx={{ py: 5, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVaY5qBMrsh-GaV5AaaIB2XK9LTwEDlPHFw&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            bgcolor: 'rgba(10, 40, 15, 0.82)',
            zIndex: 1
          }}
        />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {homeStats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'white' }}>
                  {stat.val}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#a8d5a2' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* ABOUT US SNIPPET */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '0.1rem' }}>
                ABOUT US
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mt: 1, mb: 3, fontWeight: 900 }}>
                Committed to Excellence in <br />
                <span style={{ color: 'var(--primary-green)' }}>Agricultural Innovation</span>
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                At B.L. Seeds Farm, our mission is to provide farmers with seeds that consistently

                deliver strong performance in the field. We focus on developing and supplying high-
                quality seeds that support better yields, healthy crop growth, and reliable results

                across different farming conditions.
              </Typography>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                sx={{ bgcolor: '#1a472a', px: 4, py: 1.5, fontWeight: 800 }}
              >
                READ MORE
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
                    sx={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Stack spacing={2}>
                    <Box
                      component="img"
                      src="data:image/jpeg;base64,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"
                      sx={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                      sx={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      {/* <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <SectionHeader title="What" highlight="Farmers Say" />

          <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', bgcolor: '#fbfcfb', p: { xs: 4, md: 8 }, borderRadius: '30px', position: 'relative' }}>
            <Typography variant="h2" sx={{ position: 'absolute', top: 20, left: 40, fontSize: '5rem', color: 'var(--primary-green)', opacity: 0.1, fontFamily: 'serif' }}>
              "
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-primary)', mb: 4, lineHeight: 1.8 }}>
              "{testimonials[0].text}"
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Avatar
                src={testimonials[0].img}
                sx={{ width: 60, height: 60 }}
              />
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.1rem' }}>{testimonials[0].name}</Typography>
                <Typography variant="body2" sx={{ color: 'var(--primary-green)', fontWeight: 700 }}>{testimonials[0].role}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mt: 4 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'var(--primary-green)' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e5e7eb' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e5e7eb' }} />
            </Stack>
          </Box>
        </Container>
      </Box> */}

      {/* DEALER CTA BANNER */}
      {/* <Box sx={{ py: 6, bgcolor: '#f0f7f2', mx: { md: 4 }, borderRadius: { md: '20px' }, mb: 10 }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{ px: { md: 6 }, justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Avatar
                sx={{ width: 80, height: 80, bgcolor: 'var(--primary-green)' }}
              >
                <CallIcon sx={{ fontSize: '2.5rem' }} />
              </Avatar>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5 }}>
                  Become Our Dealer / Distributor
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Join us and grow your business with premium quality seeds.
                </Typography>
              </Box>
            </Stack>
            <Button
              component={RouterLink}
              to="/dealer-enquiry"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'var(--primary-green)',
                px: 5, py: 2,
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '1rem'
              }}
            >
              ENQUIRE NOW
            </Button>
          </Stack>
        </Container>
      </Box> */}

      {/* WHATSAPP FLOAT */}
      {/* <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      >
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          sx={{ width: 60, height: 60 }}
        />
      </Box> */}
    </Box>
  );
}
