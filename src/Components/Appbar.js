// import { AppBar, IconButton, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Appbar = () => {
  return (
    <div className="app-bar">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <h1>App Bar</h1>
    </div>
  )
}

export default Appbar;