import Cart from "../Components/Cart"
import CartContext from './CartContext'
import { useContext, useEffect, useState } from 'react';

export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [qty, setQty] = useState({});

  //Add item to cart
  const addItemToCart = (item) => {

    const inCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const inCartItem = cartItems[inCartItemIndex];

    if (inCartItem) {
      setQty({
        ...qty,
        [item.name]: qty[item.name] + 1
      });
    } else {
      setQty({
        ...qty,
        [item.name]: 1
      });
      setCartItems([...cartItems, item]);
    }
  };

  //Remove item from cart 
  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== item.id;
    });
    setCartItems(updatedCartItems);
  }
  
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      return (qty[item.name] * item.price) + total;
    }, 0)
    setTotalAmount(newTotalPrice);
  }, [qty])

  const handleAdd = (item) => {
    setQty({
      ...qty,
      [item.name]: qty[item.name] + 1
    })
  }

  const handleRemove = (item) => {
    if (qty[item.name] === 1) {
      removeItemFromCart(item);
    } else {
      setQty({
        ...qty,
        [item.name]: qty[item.name] - 1
      })
    }
  }

  const cartCtxValue = {
    cartItems,
    totalAmount,
    qty,
    addItem: addItemToCart,
    handleAdd,
    handleRemove
  };

  return (
    <CartContext.Provider value={cartCtxValue}>
      { children }
    </CartContext.Provider>
  )
}
export default CartProvider;