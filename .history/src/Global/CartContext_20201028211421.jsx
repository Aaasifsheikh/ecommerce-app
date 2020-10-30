import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });

  return ()
};
export default CartContextProvider;
