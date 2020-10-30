import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = () => {
     const [shopping]= useState([
         {id:2, name:"Aaasif"}
     ])
    return(
        <CartContext.Provider>
        
        </CartContext.Provider>
    )
};
export default CartContextProvider;
