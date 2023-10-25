import { useState } from "react";
import AboutUs from "../Components/AboutUs";
import Appbar from "../Components/Appbar";
import Banner from "../Components/Banner";
import Cart from "../Components/Cart";
import CartProvider from "../Store/CartProvider";
import Meals from "../Components/Meals";

const Users = () => {
  const [isValid, setIsValid] = useState(false);
  const showModalHandler = () => {
    setIsValid(true);
  };
  const hideModalHandler = () => {
    setIsValid(false);
  };

  return (
    <CartProvider>
      <Appbar modalHandler={showModalHandler} />
      {isValid && <Cart hideModalHandler={hideModalHandler} />}
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