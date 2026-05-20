import { Box, Container, Typography, Grid, Stack, Button, List, ListItem, ListItemText, MenuItem, Select, FormControl, InputLabel, Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import GrassIcon from '@mui/icons-material/Grass';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import { productCategories, allProducts } from '../data/constants';

export default function Products() {
  return (
    <Box sx={{ pt: { xs: '70px', md: '125px' } }}>
      {/* HERO SECTION */}
      <PageHero
        title="Our Products"
        breadcrumbs={['Home', 'Products']}
        description={<>High quality seeds for every crop. <br />Trusted by thousands of farmers across India.</>}
        bgColor="#14532d"
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        darkTheme={true}
        rightContent={
          <Box 
            sx={{ 
              width: 150, height: 150, 
              borderRadius: '50%', 
              border: '2px dashed rgba(255,255,255,0.5)',
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              ml: 'auto'
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 800 }}>PREMIUM QUALITY</Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--accent-gold)' }}>100%</Typography>
            <Typography variant="caption" sx={{ fontWeight: 800 }}>TRUSTED</Typography>
          </Box>
        }
      />

      {/* CATALOG SECTION */}
      <Box sx={{ py: 10, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* SIDEBAR */}
            <Grid size={{ xs: 12, md: 3 }}>
              {/* Categories */}
              <Box sx={{ bgcolor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden', mb: 4 }}>
                <Box sx={{ bgcolor: '#14532d', color: 'white', p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <GrassIcon />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Product Categories</Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  {productCategories.map((cat, index) => (
                    <ListItem 
                      key={index} 
                      disablePadding
                      sx={{ 
                        borderBottom: index !== productCategories.length - 1 ? '1px solid #f0f0f0' : 'none',
                        '&:hover': { bgcolor: '#f0f7f2' }
                      }}
                    >
                      <ListItemText 
                        primary={cat} 
                        sx={{ px: 3, py: 1.5, '& span': { fontWeight: cat === "All Products" ? 800 : 500, fontSize: '0.95rem' } }} 
                      />
                      <ChevronRightIcon sx={{ mr: 2, fontSize: '1.2rem', color: '#ccc' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Need Help */}
              <Box sx={{ bgcolor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', p: 3, mb: 4, textAlign: 'center' }}>
                 <Avatar sx={{ bgcolor: '#f0f7f2', color: 'var(--primary-green)', mx: 'auto', mb: 2, width: 60, height: 60 }}>
                    <HeadsetMicIcon sx={{ fontSize: '2rem' }} />
                 </Avatar>
                 <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Need Help?</Typography>
                 <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3 }}>
                   Our experts are here to help you choose the right seeds.
                 </Typography>
                 <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ bgcolor: '#14532d', fontWeight: 800 }}
                 >
                   CONTACT US
                 </Button>
              </Box>

              {/* Download Catalog */}
              <Box sx={{ bgcolor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', p: 3 }}>
                 <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center' }}>
                    <FileDownloadIcon sx={{ color: 'var(--primary-green)' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Download Catalog</Typography>
                      <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>Get our complete list in PDF.</Typography>
                    </Box>
                 </Stack>
                 <Button 
                  variant="outlined" 
                  fullWidth 
                  startIcon={<FileDownloadIcon />}
                  sx={{ borderColor: '#14532d', color: '#14532d', fontWeight: 800 }}
                 >
                   DOWNLOAD PDF
                 </Button>
              </Box>
            </Grid>

            {/* MAIN CONTENT */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>All Products</Typography>
                <FormControl sx={{ minWidth: 200 }} size="small">
                  <InputLabel>Sort by</InputLabel>
                  <Select label="Sort by" defaultValue="Popularity">
                    <MenuItem value="Popularity">Popularity</MenuItem>
                    <MenuItem value="Newest">Newest First</MenuItem>
                    <MenuItem value="Rating">Top Rated</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Grid container spacing={3}>
                {allProducts.map((product, index) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                    <ProductCard product={product} variant="catalog" />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FEATURES ROW */}
      <Box sx={{ py: 6, bgcolor: 'white', borderTop: '1px solid #f0f0f0' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {[
              { icon: <VerifiedUserIcon />, title: "High Germination", desc: "Best quality seeds for better yield" },
              { icon: <HealthAndSafetyIcon />, title: "Disease Resistant", desc: "Strong and healthy crop guarantee" },
              { icon: <ScienceIcon />, title: "Lab Tested", desc: "Scientifically tested for quality" },
              { icon: <GrassIcon />, title: "Pure & Natural", desc: "100% pure seeds no compromise" },
              { icon: <LocalShippingIcon />, title: "On-time Delivery", desc: "Fast & safe delivery at your doorstep" },
              { icon: <ThumbUpIcon />, title: "Trusted by Farmers", desc: "Thousands of farmers trust our seeds" },
            ].map((item, index) => (
              <Grid size={{ xs: 6, md: 2 }} key={index}>
                <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 50, height: 50, 
                      borderRadius: '50%', 
                      bgcolor: '#f0f7f2', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary-green)',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* HELP CTA */}
      <Box sx={{ py: 8 }}>
         <Container maxWidth="xl">
            <Box 
              sx={{ 
                bgcolor: '#1a472a', 
                borderRadius: '20px', 
                p: { xs: 4, md: 6 }, 
                color: 'white',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 4,
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/leaf.png")',
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                  Can't Find What You're Looking For?
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 500 }}>
                  We have many more varieties. Contact our team for details.
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  bgcolor: 'white', 
                  color: '#1a472a', 
                  px: 4, py: 2, 
                  fontWeight: 800,
                  '&:hover': { bgcolor: '#f0f0f0' }
                }}
              >
                CONTACT OUR EXPERTS
              </Button>
            </Box>
         </Container>
      </Box>
    </Box>
  );
}
