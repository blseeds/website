import { Box, Container, Typography, Grid, Stack, Button, TextField, InputAdornment, Card, CardContent, Divider, Chip, Pagination, List } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PageHero from '../components/common/PageHero';
import { blogCategories as categories, blogPosts, popularPosts } from '../data/constants';

export default function Blog() {
  return (
    <Box sx={{ pt: { xs: '70px', md: '125px' } }}>
      {/* HERO SECTION */}
      <PageHero
        title="Our Blog"
        breadcrumbs={['Home', 'Blog']}
        description="Read our latest articles, farming tips, crop guides and industry updates to help you grow better."
        bgColor="#166534"
        bgImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
        darkTheme={true}
      />

      {/* CATEGORY BAR */}
      <Box sx={{ py: 3, bgcolor: 'white', borderBottom: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2} sx={{ overflowX: 'auto', pb: 1 }}>
            {["All Posts", "Farming Tips", "Crop Guide", "Seeds Information", "Agriculture News"].map((cat, idx) => (
              <Button 
                key={cat} 
                variant={idx === 0 ? "contained" : "outlined"}
                sx={{ 
                  borderRadius: '50px', 
                  px: 4, 
                  whiteSpace: 'nowrap',
                  bgcolor: idx === 0 ? 'var(--primary-green)' : 'transparent',
                  borderColor: idx === 0 ? 'var(--primary-green)' : '#eee',
                  color: idx === 0 ? 'white' : 'var(--text-primary)',
                  '&:hover': { bgcolor: idx === 0 ? 'var(--primary-green)' : '#f0f7f2', borderColor: 'var(--primary-green)' }
                }}
              >
                {cat}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CONTENT AREA */}
      <Box sx={{ py: 8, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* BLOG LIST */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={4}>
                {blogPosts.map((post) => (
                  <Card key={post.id} sx={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ width: { xs: '100%', sm: '40%' }, height: { xs: '200px', sm: 'auto' }, position: 'relative' }}>
                      <Box 
                        component="img"
                        src={post.img}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <Box sx={{ position: 'absolute', bottom: 15, left: 15 }}>
                        <Chip label={post.category} sx={{ bgcolor: 'var(--primary-green)', color: 'white', fontWeight: 700, borderRadius: '4px' }} />
                      </Box>
                    </Box>
                    <CardContent sx={{ width: { xs: '100%', sm: '60%' }, p: { xs: 3, md: 4 } }}>
                      <Stack direction="row" spacing={3} sx={{ mb: 2, color: 'var(--text-secondary)' }}>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ fontSize: '0.9rem' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>{post.date}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ fontSize: '0.9rem' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>{post.readTime}</Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.4rem', md: '1.8rem' }, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3, lineHeight: 1.7, fontSize: '1rem' }}>
                        {post.excerpt}
                      </Typography>
                      <Button 
                        color="primary" 
                        endIcon={<ArrowForwardIcon />} 
                        sx={{ fontWeight: 800, p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
              
              <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                <Pagination count={10} color="primary" shape="rounded" />
              </Box>
            </Grid>

            {/* SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={4}>
                {/* Search */}
                <Box sx={{ bgcolor: 'white', borderRadius: '15px', p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <TextField 
                    fullWidth 
                    placeholder="Search blogs..." 
                    variant="outlined"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon sx={{ color: 'var(--text-secondary)' }} />
                          </InputAdornment>
                        ),
                        sx: { borderRadius: '10px' }
                      }
                    }}
                  />
                </Box>

                {/* Categories */}
                <Box sx={{ bgcolor: 'white', borderRadius: '15px', p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Categories</Typography>
                  <List sx={{ p: 0 }}>
                    {categories.map((cat, idx) => (
                      <Box key={idx}>
                        <Stack direction="row" sx={{ justifyContent: 'space-between', py: 1.5, cursor: 'pointer', '&:hover': { color: 'var(--primary-green)' } }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>{cat.name}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'var(--text-secondary)' }}>{cat.count}</Typography>
                        </Stack>
                        {idx !== categories.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </List>
                  <Button sx={{ mt: 2, fontWeight: 800, color: 'var(--primary-green)' }}>View All Categories &rarr;</Button>
                </Box>

                {/* Popular Posts */}
                <Box sx={{ bgcolor: 'white', borderRadius: '15px', p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Popular Posts</Typography>
                  <Stack spacing={3}>
                    {popularPosts.map((post, idx) => (
                      <Stack key={idx} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                        <Box 
                          component="img"
                          src={post.img}
                          sx={{ width: 80, height: 70, borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 800, lineHeight: 1.3, mb: 0.5 }}>{post.title}</Typography>
                          <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>{post.date}</Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </Box>

                {/* Newsletter */}
                <Box sx={{ bgcolor: '#166534', borderRadius: '15px', p: 4, color: 'white' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Subscribe to Our Newsletter</Typography>
                  <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>Get the latest farming tips, product updates and agriculture news.</Typography>
                  <TextField 
                    fullWidth 
                    placeholder="Enter your email address" 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      mb: 2, 
                      bgcolor: 'white', 
                      borderRadius: '4px',
                      '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } }
                    }}
                  />
                  <Button fullWidth variant="contained" sx={{ bgcolor: '#0b3d11', fontWeight: 800 }}>Subscribe Now</Button>
                </Box>

                {/* Need Help Widget */}
                <Box sx={{ bgcolor: '#f0f7f2', borderRadius: '15px', p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Need Help?</Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3 }}>Our team is here to help you with any queries.</Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <PhoneIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>+91 98765 43210</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <EmailIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>info@blseedsfarm.com</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <ScheduleIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Mon - Sat: 9:00 AM - 6:00 PM</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
