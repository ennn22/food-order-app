import { AppBar, Badge, Fab, Stack, Toolbar } from "@mui/material";
import { createPortal } from 'react-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from "../Store/CartProvider.js"

const Appbar = ({ showModalHandler }) => {
  const { cartItems } = useCartContext();


  return (
    <div className="app-bar">
      <AppBar position="sticky">
        <Toolbar>
          <Stack>
            <Fab variant="extended" onClick={showModalHandler}>
              <p>Your Cart</p>
              <Badge badgeContent={cartItems.length} color="secondary">
                <AddShoppingCartIcon sx={{ mr: 1 }} />
              </Badge>
            </Fab>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar;