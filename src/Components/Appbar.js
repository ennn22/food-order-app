import { AppBar, Badge, Box, Fab, Toolbar, Typography } from "@mui/material";
import { createPortal } from 'react-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useCartContext } from "../Store/CartProvider.js"

const Appbar = ({ showModalHandler }) => {
  const { cartItems } = useCartContext();

  return (
    <div className="app-bar">
      <AppBar position="static" sx={{ backgroundColor: "#4F4A45" }}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <DeliveryDiningIcon fontSize="large" sx={{ mr: 1, mt: 1 }} />
            <Typography variant="h4">
              Penang Eats Delivery
            </Typography>
          </Box> 
            <Fab variant="extended" onClick={showModalHandler}>
              <Typography variant="button">Your Cart</Typography>
              <Badge badgeContent={cartItems.length} color="secondary">
                <AddShoppingCartIcon sx={{ ml: 1, mr: 1 }} />
              </Badge>
            </Fab>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar;