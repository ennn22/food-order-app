import { useState } from "react";
import { Box } from "@mui/material"
import AboutUs from "../Components/AboutUs";
import Appbar from "../Components/Appbar";
import Banner from "../Components/Banner";
import Cart from "../Components/Cart";
import CartProvider from "../Store/CartProvider";
import Meals from "../Components/Meals";
import { createPortal } from 'react-dom';

const Users = () => {
  const [isValid, setIsValid] = useState(false);

  const showModalHandler = () => setIsValid(true);
  const hideModalHandler = () => setIsValid(false);

  return (
    <CartProvider>
      {isValid && createPortal(
        <Cart isValid={isValid} onClose={hideModalHandler} />,
        document.body
      )};

      <Appbar showModalHandler={showModalHandler} hideModalHandler={hideModalHandler} />
      <Banner />
      <Box m= {2}>
        <AboutUs />
        {/* <div style={{ marginTop: "15rem" }} className="top-margin"> */}
        <Meals />
        {/* </div> */}
      </Box>
    </CartProvider>
  )
}

export default Users;