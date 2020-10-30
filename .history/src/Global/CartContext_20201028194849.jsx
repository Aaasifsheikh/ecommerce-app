import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = (this.props.) => {
     const [shopping, setShopping]= useState([
         {id:2, name:"Aaasif"}
     ])
    return(
        <CartContext.Provider value={{shopping: [...shopping]}}>
           
        </CartContext.Provider>
    )
};
export default CartContextProvider;
