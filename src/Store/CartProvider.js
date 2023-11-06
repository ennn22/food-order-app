import CartContext from './CartContext'
import { useItemContext } from "./ItemsProvider.js";
import { useContext, useEffect, useState } from 'react';

export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const { itemsData } = useItemContext();

  const LOCAL_STORAGE_KEY = "cart-items";
  const localStorageCartQty = localStorage.getItem(LOCAL_STORAGE_KEY);
  const lsCartParse = localStorageCartQty ? JSON.parse(localStorageCartQty) : {};

  const cartItemsData = itemsData.filter((item) => {
    return Object.keys(lsCartParse).includes(item.name);
  });


  const [cartItems, setCartItems] = useState(cartItemsData);
  const [totalAmount, setTotalAmount] = useState(0);
  const [qty, setQty] = useState(lsCartParse);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(qty));
    const newTotalAmount = cartItems.reduce((total, item) => {
      return (qty[item.name] * item.price) + total;
    }, 0)
    setTotalAmount(newTotalAmount);
  }, [qty])

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

  const handleAdd = (item) => {
    setQty({
      ...qty,
      [item.name]: qty[item.name] + 1
    })
  }

  const handleRemove = (item) => {
    if (qty[item.name] === 1) {
      removeItemFromCart(item);
    } 
    setQty({
      ...qty,
      [item.name]: qty[item.name] - 1
    })
  }

  const clearAll = (item) => {
    setCartItems([]);
    setTotalAmount(0);
  }

  const cartCtxValue = {
    cartItems,
    totalAmount,
    qty,
    addItem: addItemToCart,
    handleAdd,
    handleRemove,
    clearAll
  };

  return (
    <CartContext.Provider value={cartCtxValue}>
      { children }
    </CartContext.Provider>
  )
}
export default CartProvider;