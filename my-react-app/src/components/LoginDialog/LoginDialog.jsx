import React, { useState } from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,TextField,Button,Box,} from '@mui/material';

const LoginDialog = ({ open, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Iniciar Sesión</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField autoFocus margin="dense"
              name="email"
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="outlined"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained">Iniciar Sesión</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginDialog;