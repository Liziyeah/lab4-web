import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      {/* Banner principal */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Bienvenido a Nuestra Tienda
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Los mejores productos con precios increíbles
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
          >
            Ver Productos
          </Button>
        </Container>
      </Box>
      
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Envío Rápido
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recibe tus productos en menos de 48 horas
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Calidad Garantizada
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Todos nuestros productos pasan por un control de calidad
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Atención 24/7
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Soporte disponible para ayudarte en cualquier momento
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;