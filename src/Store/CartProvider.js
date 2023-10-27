import Cart from "../Components/Cart"
import CartContext from './CartContext'

const CartProvider = ({ children }) => {


  const cartCtxValue = {
    
  }

  return (
    <CartContext.Provider value={cartCtxValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;