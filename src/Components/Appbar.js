import { AppBar, Badge, Fab, Stack, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Appbar = () => {
  return (
    <div className="app-bar">
      <AppBar position="sticky">
        <Toolbar>
          <Stack>
            <Fab variant="extended">
              <p>Your Cart</p>
              <Badge badgeContent={4} color="secondary">
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