import React, { useState, useEffect } from 'react';
import {Container,Typography,Box,Divider,Paper,Tab,Tabs,} from '@mui/material';
import OrderItem from '../../components/OrderItem/OrderItem';
import {mockOrders} from '../../data/mockProducts';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [filteredOrders, setFilteredOrders] = useState([]);
  
  useEffect(() => {
    setOrders(mockOrders);
    setFilteredOrders(mockOrders);
  }, []);
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
    if (newValue === 0) {
      setFilteredOrders(orders);
    } else {
      const statusMap = {
        1: 'Procesando',
        2: 'En camino',
        3: 'Entregado',
        4: 'Cancelado',
      };
      
      setFilteredOrders(orders.filter(order => order.status === statusMap[newValue]));
    }
  };
  
  const userEmail = localStorage.getItem('user_email') || 'usuario';

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Mis Pedidos
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Bienvenido, {userEmail}. Aquí puedes ver todos tus pedidos y su estado actual.
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Todos" />
          <Tab label="Procesando" />
          <Tab label="En camino" />
          <Tab label="Entregados" />
          <Tab label="Cancelados" />
        </Tabs>
      </Paper>

      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6">
            No tienes pedidos en esta categoría aún.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cuando realices un pedido, aparecerá aquí para que puedas hacer seguimiento.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default MyOrders;