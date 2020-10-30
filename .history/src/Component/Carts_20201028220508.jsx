import React, { useContext } from "react";
import CartContext from "../Global/CartContext";

const Carts = () => {
  // const { Carts } = useContext(CartContext);
  return (
    <div className="container">
      <div className="cart-container" style={{ marginTop: "100px" }}>
        <h1>Shopping Cart</h1>
       
      </div>
    </div>
  );
};

export default Carts;
