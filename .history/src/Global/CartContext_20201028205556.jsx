import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext(cart);

const CartContextProvider = (props) => {

  return <CartContext.Provider>

  </CartContext.Provider>;
};
export default CartContextProvider;
