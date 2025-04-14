import React from 'react';
import {AppBar,Toolbar,Typography,Button,Box,Container} from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6"component="div"sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            MI TIENDA
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Productos</Button>
            <Button color="inherit">Mis Pedidos</Button>
            <Button color="inherit" variant="outlined" sx={{ ml: 2 }}>
              Iniciar Sesión
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;