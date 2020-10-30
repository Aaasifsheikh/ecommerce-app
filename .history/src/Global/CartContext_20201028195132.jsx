import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
     const [cart, setCart]= useState([
         {id:2, name:"Aaasif"}
     ])
    return(
        <CartContext.Provider value={{cart: [...cart]}}>
           
        </CartContext.Provider>
    )
};
export default CartContextProvider;
