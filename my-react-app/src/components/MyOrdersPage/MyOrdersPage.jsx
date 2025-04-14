import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  Box,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const dummyProducts = [
  { id: 1, name: "Smartphone X10", price: 799.99, image: "/api/placeholder/300/200" },
  { id: 2, name: "Laptop Pro", price: 1299.99, image: "/api/placeholder/300/200" },
  { id: 3, name: "Auriculares Wireless", price: 199.99, image: "/api/placeholder/300/200" },
  { id: 4, name: "Smartwatch S1", price: 299.99, image: "/api/placeholder/300/200" },
  { id: 5, name: "Tablet T20", price: 399.99, image: "/api/placeholder/300/200" },
  { id: 6, name: "Cámara Digital", price: 499.99, image: "/api/placeholder/300/200" },
];

const ProductsPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Productos
      </Typography>
      
      {/* Buscador */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Buscar productos..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      <Grid container spacing={3}>
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button size="small" variant="outlined">Ver Detalles</Button>
                <Button size="small" variant="contained" sx={{ ml: 'auto' }}>
                  Añadir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;