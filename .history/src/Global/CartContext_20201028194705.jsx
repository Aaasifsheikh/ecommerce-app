import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = () => {
     const [shopping, setShopping]= useState([
         {id:2, name:"Aaasif"}
     ])
    return(
        <CartContext.Provider value={{}}>
        
        </CartContext.Provider>
    )
};
export default CartContextProvider;
