import { Box, Card, CardContent, Typography, Button } from '@mui/material';

interface Product {
  name: string;
  img: string;
  desc?: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'home' | 'catalog';
}

export default function ProductCard({ product, variant = 'catalog' }: ProductCardProps) {
  if (variant === 'home') {
    return (
      <Card 
        sx={{ 
          borderRadius: '15px', 
          overflow: 'hidden', 
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Box sx={{ height: 200, overflow: 'hidden' }}>
          <Box 
            component="img"
            src={product.img}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
            {product.name}
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ 
              borderRadius: '4px', 
              borderColor: '#e5e7eb',
              color: 'var(--primary-green)',
              fontWeight: 700,
              fontSize: '0.75rem',
              '&:hover': { borderColor: 'var(--primary-green)', bgcolor: '#f0f7f2' }
            }}
          >
            VIEW PRODUCTS
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ borderRadius: '15px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 220, overflow: 'hidden' }}>
        <Box 
          component="img"
          src={product.img}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <CardContent sx={{ p: 3, flexGrow: 1, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>{product.name}</Typography>
        <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3, lineHeight: 1.6 }}>
          {product.desc}
        </Typography>
        <Button 
          variant="contained" 
          fullWidth
          sx={{ 
            bgcolor: 'var(--primary-green)', 
            fontWeight: 800,
            borderRadius: '8px'
          }}
        >
          ENQUIRE NOW
        </Button>
      </CardContent>
    </Card>
  );
}
