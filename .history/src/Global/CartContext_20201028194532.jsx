import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = () => {
     const []= useState([
         {id:2}
     ])
    return(
        <CartContext.Provider>
        
        </CartContext.Provider>
    )
};
export default CartContextProvider;
