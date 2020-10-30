import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext(cartReducer);

const CartContextProvider = (props) => {

    
  return <CartContext.Provider>
     
  </CartContext.Provider>;
};
export default CartContextProvider;
