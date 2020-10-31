import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext(cartReducer);

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer,{shoppingCart:[], totalPrice:0, qty} )

  return <CartContext.Provider>
     
  </CartContext.Provider>;
};
export default CartContextProvider;