import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {

  return (
    <CartContext.Provider value={{ carts: [...carts] }}></CartContext.Provider>
  );
};
export default CartContextProvider;
