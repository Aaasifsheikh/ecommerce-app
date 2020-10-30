import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";

const Carts = () => {
  const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
  console.log(data);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart}
       
      </div>
    </div>
  );
};

export default Carts;
