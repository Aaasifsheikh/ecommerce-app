import React, { useContext } from "react";

const Cart = () => {
    const {cart} = useContext(CartC)
  return (
    <div className="container">
    <div className="cart-container" style={{marginTop:'100px'}}>
      <h1>Shopping Cart</h1>
      </div>
    </div>
  );
};

export default Cart;
