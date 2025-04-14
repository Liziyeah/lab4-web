import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {Container,Typography,Box,Button,Grid,Paper,} from '@mui/material';
import { Inventory as InventoryIcon,LocalShipping as LocalShippingIcon,Support as SupportIcon,} from '@mui/icons-material';

const Feature = ({ icon, title, description }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Box sx={{ p: 1, bgcolor: 'primary.main', borderRadius: '50%', mb: 2 }}>
        {icon}
      </Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Bienvenido a Nuestra Tienda Online
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Descubre los mejores productos con los precios más competitivos
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/productos"
          >
            Ver Productos
          </Button>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          ¿Por qué elegirnos?
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Ofrecemos una experiencia de compra única con beneficios exclusivos para nuestros clientes
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Feature
              icon={<InventoryIcon sx={{ color: 'white' }} />}
              title="Productos de Calidad"
              description="Todos nuestros productos son seleccionados cuidadosamente para garantizar la mejor calidad."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              icon={<LocalShippingIcon sx={{ color: 'white' }} />}
              title="Envío Rápido"
              description="Entregamos tus productos en el menor tiempo posible, con seguimiento en tiempo real."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              icon={<SupportIcon sx={{ color: 'white' }} />}
              title="Soporte 24/7"
              description="Nuestro equipo de soporte está disponible para ayudarte en cualquier momento."
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.100', py: 6, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            ¿Listo para empezar a comprar?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Explora nuestra amplia selección de productos y encuentra lo que necesitas.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/productos"
          >
            Ver Catálogo
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;