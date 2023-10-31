import { useState } from "react";
import AboutUs from "../Components/AboutUs";
import Appbar from "../Components/Appbar";
import Banner from "../Components/Banner";
import Cart from "../Components/Cart";
import CartProvider from "../Store/CartProvider";
import Meals from "../Components/Meals";

const Users = () => {
  const [isValid, setIsValid] = useState(false);

  const showModalHandler = () => setIsValid(true);
  const hideModalHandler = () => setIsValid(false);

  //Add item to cart
  // const addItemToCart = (item) => {
  //   const updatedTotalAmount = totalAmount + item.price * qty;

  //   const inCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  //   const inCartItem = cartItems[inCartItemIndex];

  //   if (inCartItem) {
  //     const updatedItem = {
  //       ...inCartItem, 
  //       amount: inCartItem.amount + item.amount,
  //     };
  //     cartItems[inCartItemIndex] = updatedItem;
  //   } else {
  //     setCartItems([...cartItems, item]);
  //   }

  //   setTotalAmount(updatedTotalAmount);
  // };

  return (
    <CartProvider>
      <h1>Users</h1>
      {isValid && <Cart isValid={isValid} onClose={hideModalHandler} />}

      <Appbar showModalHandler={showModalHandler} hideModalHandler={hideModalHandler} />
      <Banner />
      <section>
        <AboutUs />
        <div style={{ marginTop: "15rem" }} className="top-margin">
          <Meals />
        </div>
      </section>
    </CartProvider>
  )
}

export default Users;