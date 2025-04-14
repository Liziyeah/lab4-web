import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar,Toolbar,Typography,Button,Container,Box,IconButton,Menu,MenuItem,} from '@mui/material';
import {ShoppingCart as ShoppingCartIcon,AccountCircle as AccountCircleIcon,Menu as MenuIcon,} from '@mui/icons-material';

const Navbar = ({ isAuthenticated, onLoginClick, onLogout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6"noWrapcomponent={RouterLink}to="/"sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}>
            TIENDA ONLINE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large"aria-controls="menu-appbar"aria-haspopup="true"onClick={handleOpenNavMenu}color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar"anchorEl={anchorElNav}anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top',horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}}
            >
              <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/">
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/productos">
                <Typography textAlign="center">Productos</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/mis-pedidos">
                <Typography textAlign="center">Mis Pedidos</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography variant="h5"noWrapcomponent={RouterLink}to="/"sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}>
            TIENDA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={RouterLink}to="/"sx={{ my: 2, color: 'white', display: 'block' }}>
              Inicio
            </Button>
            <Button component={RouterLink}to="/productos"sx={{ my: 2, color: 'white', display: 'block' }}>
              Productos
            </Button>
            <Button component={RouterLink}to="/mis-pedidos"sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Mis Pedidos
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu sx={{ mt: '45px' }}id="menu-appbar"anchorEl={anchorElUser} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu} component={RouterLink} to="/mis-pedidos">
                    <Typography textAlign="center">Mis Pedidos</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => { handleCloseUserMenu(); onLogout(); }}>
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={onLoginClick}>Iniciar Sesión</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;