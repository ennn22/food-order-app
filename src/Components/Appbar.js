import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Appbar = () => {


  return (
    <div className="app-bar">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar;