import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import MyOrders from './pages/MyOrders';
import LoginDialog from './components/LoginDialog';
import Notification from './components/Notification';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (credentials) => {
    if (credentials.email && credentials.password) {
      localStorage.setItem('auth_token', 'dummy_token');
      localStorage.setItem('user_email', credentials.email);
      setIsAuthenticated(true);
      setOpenLogin(false);
      setNotification({
        open: true,
        message: '¡Iniciaste sesión exitosamente!',
        severity: 'success'
      });
    } else {
      setNotification({
        open: true,
        message: 'Error en las credenciales',
        severity: 'error'
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    setIsAuthenticated(false);
    setNotification({
      open: true,
      message: 'Cerraste sesión exitosamente',
      severity: 'info'
    });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const ProtectedRoute = ({children}) => {
    if (!isAuthenticated) {
      setNotification({
        open: true,
        message: 'Acceso denegado. Por favor, inicia sesión.',
        severity: 'warning'
      });
      return <Navigate to="/"/>;
    }
    return children;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
          <Navbar 
            isAuthenticated={isAuthenticated}
            onLoginClick={() => setOpenLogin(true)}
            onLogout={handleLogout}
          />
          
          <Box component="main" sx={{flexGrow: 1, pt: 8, pb: 4}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route 
                path="/mis-pedidos" 
                element={
                  <ProtectedRoute>
                    <MyOrders />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Box>
          
          <LoginDialog 
            open={openLogin} 
            onClose={() => setOpenLogin(false)} 
            onLogin={handleLogin}/>
          <Notification 
            open={notification.open}
            message={notification.message}
            severity={notification.severity}
            onClose={handleCloseNotification}/>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;