import { Box, Container, Typography, Grid, Stack, Button, TextField, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel, FormGroup, Card, CardContent, Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GrassIcon from '@mui/icons-material/Grass';
import { dealerBenefits } from '../data/constants';

export default function DealerEnquiry() {
  return (
    <Box sx={{ pt: { xs: '70px', md: '125px' } }}>
      {/* HERO SECTION */}
      <Box 
        sx={{ 
          height: { xs: '300px', md: '450px' },
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: '700px' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 800, mb: 2 }}>
              Become Our Partner. <br />
              <span style={{ color: 'var(--accent-gold)' }}>Grow Together.</span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, opacity: 0.9, lineHeight: 1.6 }}>
              Join our dealer network and grow your business with <br />
              high quality seeds and trusted support.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* BREADCRUMB */}
      <Box sx={{ py: 3, bgcolor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Home</Typography>
            <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>&gt;</Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: 'var(--primary-green)' }}>Dealer Enquiry</Typography>
          </Stack>
        </Container>
      </Box>

      {/* CONTENT AREA */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            {/* LEFT SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>Dealer Enquiry</Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 6 }}>
                Fill out the form and our team will get in touch with you shortly.
              </Typography>

              <Stack spacing={4} sx={{ mb: 8 }}>
                {dealerBenefits.map((item, index) => (
                  <Stack key={index} direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'var(--primary-green)', mt: 0.5 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              {/* Need Help Widget */}
              <Box sx={{ bgcolor: '#f0f7f2', borderRadius: '15px', p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Need Help?</Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 4 }}>Our team is here to help you.</Typography>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>+91 98765 43210</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <EmailIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>info@blseedsfarm.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>Mon - Sat: 9:00 AM - 6:00 PM</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* MAIN FORM */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', p: { xs: 2, md: 4 } }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Dealer Enquiry Form</Typography>
                  
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Full Name *" placeholder="Enter your full name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Business / Shop Name *" placeholder="Enter your business name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Mobile Number *" placeholder="Enter your mobile number" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" placeholder="Enter your email address" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>State *</InputLabel>
                        <Select label="State *">
                          <MenuItem value="MP">Madhya Pradesh</MenuItem>
                          <MenuItem value="UP">Uttar Pradesh</MenuItem>
                          <MenuItem value="RJ">Rajasthan</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>District *</InputLabel>
                        <Select label="District *">
                          <MenuItem value="Indore">Indore</MenuItem>
                          <MenuItem value="Bhopal">Bhopal</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="City / Town *" placeholder="Enter your city or town" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Pincode *" placeholder="Enter pincode" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth multiline rows={3} label="Complete Address *" placeholder="Enter your complete address" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Business Type *</InputLabel>
                        <Select label="Business Type *">
                          <MenuItem value="Retailer">Retailer</MenuItem>
                          <MenuItem value="Distributor">Distributor</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Experience in Seeds Business *</InputLabel>
                        <Select label="Experience in Seeds Business *">
                          <MenuItem value="0-2">0-2 Years</MenuItem>
                          <MenuItem value="2-5">2-5 Years</MenuItem>
                          <MenuItem value="5+">5+ Years</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5 }}>Products of Interest *</Typography>
                      <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        {["Wheat Seeds", "Mustard Seeds", "Paddy Seeds", "Vegetable Seeds", "Hybrid Seeds", "Fodder Seeds", "Flower Seeds", "Other Seeds"].map((prod) => (
                          <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={prod}>
                            <FormControlLabel control={<Checkbox sx={{ color: 'var(--primary-green)', '&.Mui-checked': { color: 'var(--primary-green)' } }} />} label={<Typography variant="body2">{prod}</Typography>} />
                          </Grid>
                        ))}
                      </FormGroup>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>How did you hear about us?</InputLabel>
                        <Select label="How did you hear about us?">
                          <MenuItem value="Social Media">Social Media</MenuItem>
                          <MenuItem value="Friend">Friend / Reference</MenuItem>
                          <MenuItem value="Internet">Search Engine</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth multiline rows={2} label="Additional Message" placeholder="Write your message (if any)" variant="outlined" />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button 
                        variant="contained" 
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{ 
                          bgcolor: 'var(--primary-green)', 
                          px: 6, py: 2, 
                          fontWeight: 900,
                          borderRadius: '8px',
                          mt: 2
                        }}
                      >
                        SUBMIT ENQUIRY
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY PARTNER WITH US */}
      <Box sx={{ py: 10, bgcolor: '#fbfcfb', borderTop: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Why Partner with BL Seeds Farm?</Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: 'var(--accent-gold)', mx: 'auto', borderRadius: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <VerifiedIcon />, title: "Quality Assured", desc: "Lab tested, high germination seeds you can trust." },
              { icon: <GrassIcon />, title: "Wide Product Range", desc: "Complete range of crops and vegetable seeds." },
              { icon: <CampaignIcon />, title: "Marketing Support", desc: "We provide marketing materials and support." },
              { icon: <LocalShippingIcon />, title: "Fast Delivery", desc: "Timely delivery and strong supply network." },
              { icon: <AssignmentIcon />, title: "Attractive Schemes", desc: "Exciting offers and schemes for our dealers." },
              { icon: <TrendingUpIcon />, title: "Long Term Growth", desc: "Grow your business with a trusted brand." },
            ].map((benefit, index) => (
              <Grid size={{ xs: 6, md: 2 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#f0f7f2', color: 'var(--primary-green)', mx: 'auto', mb: 2, width: 60, height: 60 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}>{benefit.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', px: 1 }}>{benefit.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
