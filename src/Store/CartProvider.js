import Cart from "../Components/Cart"
import CartContext from './CartContext'

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{hetotalAmountllo: 1}}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;