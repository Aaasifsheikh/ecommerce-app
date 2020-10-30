import React, { createContext, useReducer } from "react";
import cartReducer
export const CartContext = createContext();

const CartContextProvider = (props) => {

  return (
    <CartContext.Provider >

    </CartContext.Provider>
  );
};
export default CartContextProvider;
