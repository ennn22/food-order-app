import { Button, Dialog, DialogContent, DialogTitle, Divider, List, ListItem, Typography } from "@mui/material";
import { useCartContext } from "../Store/CartProvider.js"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ isValid, onClose }) => {
  const { cartItems, totalAmount, qty, handleAdd, handleRemove, clearAll } = useCartContext();

  return (
    <Dialog className="cart-dialog" open={isValid} onClose={onClose}>
      <DialogContent>
        <DialogTitle className="dialog-title">Your Cart</DialogTitle>
        <List className="cart-items">
          {cartItems.map((item) => {
            return (
              <ListItem 
                className="cart-item" 
                key={item.id} 
                sx={{ display: "flex", justifyContent: "space-between" }}>
                <div className="item-details">
                  <div className="item-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="item-price">
                    <p>RM {item.price}</p>
                  </div>
                </div>
                <div className="item-qty">
                  <p> x {qty[item.name]}</p>
                </div>
                <div className="item-action">
                  <AddIcon onClick={() => handleAdd(item)} />
                  <RemoveIcon onClick={() => handleRemove(item)}/>
                </div>
                <div className="total-item-amount">
                  <p>RM <span>{qty[item.name] * item.price}</span></p>
                </div>
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <div className="total-amount">
          <p>Total Amount:</p>
          <p>RM {totalAmount.toFixed(2)}</p>
        </div>
        <Divider />
        <div className="cart-action-button">
          <div>
            {cartItems.length > 0 &&
              <Button size="small" onClick={() => clearAll()} >
                <Typography variant="button" sx={{ textDecoration: "underline" }}>Clear all</Typography>
              </Button>
            }       
            <Button variant="outlined" size="small" onClick={onClose}>Close</Button>
          </div>
          {cartItems.length > 0 &&
            <Button variant="contained">order</Button>
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Cart;