import React from 'react';
import {Card,CardContent,Typography,Chip,Box,Grid,List,ListItem,ListItemText,Divider,} from '@mui/material';


const OrderItem = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Entregado':
        return 'success';
      case 'En camino':
        return 'info';
      case 'Procesando':
        return 'warning';
      case 'Cancelado':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card sx={{mb: 3}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Pedido #{order.id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: { sm: 'right' } }}>
            <Chip 
              label={order.status} 
              color={getStatusColor(order.status)} 
              sx={{ fontWeight: 'medium' }} 
            />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Total: ${order.total.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="subtitle1" gutterBottom>
          Productos:
        </Typography>
        
        <List sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
          {order.items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider />}
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography component="span" variant="body2" color="text.primary">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </Typography>
                      <Typography component="span" variant="body2" color="text.primary">
                        ${(item.quantity * item.price).toFixed(2)}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default OrderItem;