import React, { useContext } from "react";

const Carts = () => {
    const {carts} = useContext(CartContext);
  return (
    <div className="container">
    <div className="cart-container" style={{marginTop:'100px'}}>
      <h1>Shopping Cart</h1>
      {Carts.}
      </div>
    </div>
  );
};

export default Carts;