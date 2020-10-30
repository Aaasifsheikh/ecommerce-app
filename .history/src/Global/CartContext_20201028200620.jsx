import React, { createContext } from "react";

exconst CartContext = createContext();

const CartContextProvider = (props) => {
  const [carts] = useState([{ id: 2, name: "Aaasif" }]);
  return (
    <CartContext.Provider value={{ carts: [...carts] }}></CartContext.Provider>
  );
};
export default CartContextProvider;
