import React, { useState, useEffect } from 'react';
import {Container,Typography,Grid,Box,TextField,InputAdornment,FormControl,InputLabel,Select,MenuItem,Pagination,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../../components//ProductCard/ProductCard';
import {mockProducts} from '../../data/mockProducts';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  // ffiltrar productos 
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ordenar
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nuestros Productos
      </Typography>
      
      {/* Filtros y ordenamiento */}
      <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <TextField
          fullWidth
          label="Buscar productos"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="sort-select-label">Ordenar por</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortBy}
            label="Ordenar por"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="default">Relevancia</MenuItem>
            <MenuItem value="price_asc">Precio: Menor a Mayor</MenuItem>
            <MenuItem value="price_desc">Precio: Mayor a Menor</MenuItem>
            <MenuItem value="rating">Mejor Valorados</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {currentProducts.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {currentProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={handleChangePage} 
              color="primary" 
              size="large"
            />
          </Box>
        </>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6">
            No se encontraron productos que coincidan con tu búsqueda.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Intenta con otros términos o navega por nuestras categorías.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Products;