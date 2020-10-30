import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";

const Carts = () => {
  const {di} = useContext(CartContext);
  console.log(data);
  return (
    <div className="cart-container">
      <div className="cart-container" style={{ marginTop: "100px" }}>
        <h1>Shopping Cart</h1>
       
      </div>
    </div>
  );
};

export default Carts;
