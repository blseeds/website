import { useState } from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Tabs, Tab, Modal, IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YardIcon from '@mui/icons-material/Yard';
import PageHero from '../components/common/PageHero';
import { galleryCategories, galleryImages } from '../data/constants';

export default function Gallery() {
  const [filter, setFilter] = useState("All Photos");
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpen = (img: string) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const sections = filter === "All Photos" 
    ? ["Our Farms", "Infrastructure", "Seed Processing", "Events"] 
    : [filter];

  return (
    <Box sx={{ pt: { xs: '70px', md: '125px' } }}>
      {/* HERO SECTION */}
      <PageHero
        title="Gallery"
        breadcrumbs={['Home', 'Gallery']}
        description="Take a look at our farms, infrastructure, seed processing units and our journey in pictures."
        bgColor="#1b4332"
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        darkTheme={true}
      />

      {/* FILTER TABS */}
      <Box sx={{ py: 4, bgcolor: 'white', borderBottom: '1px solid #eee', position: 'sticky', top: { xs: 70, md: 125 }, zIndex: 100 }}>
        <Container maxWidth="xl">
          <Tabs 
            value={filter} 
            onChange={(_, val) => setFilter(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTab-root': {
                mx: 1,
                borderRadius: '50px',
                border: '1px solid #eee',
                color: 'var(--text-primary)',
                fontWeight: 700,
                transition: 'all 0.3s',
                '&.Mui-selected': {
                  bgcolor: 'var(--primary-green)',
                  color: 'white',
                  borderColor: 'var(--primary-green)'
                },
                '&:hover': { bgcolor: '#f0f7f2' }
              }
            }}
          >
            {galleryCategories.map((cat, index) => (
              <Tab key={index} label={cat} value={cat} />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* GALLERY GRID */}
      <Box sx={{ py: 8, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          {sections.map(section => (
            <Box key={section} sx={{ mb: 10 }}>
              <Box sx={{ textAlign: 'center', mb: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Box sx={{ height: '1px', flexGrow: 1, bgcolor: '#eee', display: { xs: 'none', md: 'block' } }} />
                <Typography variant="h4" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1rem', color: 'var(--text-secondary)' }}>
                  {section}
                </Typography>
                <Box sx={{ height: '1px', flexGrow: 1, bgcolor: '#eee', display: { xs: 'none', md: 'block' } }} />
              </Box>
              
              <Grid container spacing={3}>
                {galleryImages.filter(img => img.cat === section).map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <Box 
                      onClick={() => handleOpen(item.img)}
                      sx={{ 
                        height: 250, 
                        borderRadius: '15px', 
                        overflow: 'hidden', 
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          '& .overlay': { opacity: 1 }
                        }
                      }}
                    >
                      <Box 
                        component="img"
                        src={item.img}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <Box 
                        className="overlay"
                        sx={{ 
                          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                          bgcolor: 'rgba(27, 67, 50, 0.4)', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          opacity: 0, transition: 'opacity 0.3s ease'
                        }}
                      >
                         <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 800, border: '2px solid white', px: 3, py: 1 }}>
                            VIEW
                         </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>

      {/* BOTTOM CTA */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Box 
            sx={{ 
              bgcolor: '#f0f7f2', 
              borderRadius: '20px', 
              p: { xs: 4, md: 6 }, 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4
            }}
          >
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
               <Avatar sx={{ bgcolor: 'var(--primary-green)', width: 60, height: 60 }}>
                  <YardIcon sx={{ fontSize: '2rem' }} />
               </Avatar>
               <Box>
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                    Want to know more about our quality seeds <br />
                    and how we work?
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Contact our team today. We are here to help you.
                  </Typography>
               </Box>
            </Stack>
            <Button 
              variant="contained" 
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                bgcolor: '#1a472a', 
                px: 5, py: 2, 
                fontWeight: 900,
                borderRadius: '10px'
              }}
            >
              CONTACT US
            </Button>
          </Box>
        </Container>
      </Box>

      {/* LIGHTBOX MODAL */}
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}>
           <IconButton 
            onClick={handleClose}
            sx={{ position: 'absolute', top: -40, right: 0, color: 'white' }}
           >
              <CloseIcon />
           </IconButton>
           <Box 
            component="img"
            src={selectedImg}
            sx={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
           />
        </Box>
      </Modal>
    </Box>
  );
}
