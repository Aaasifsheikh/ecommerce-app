import React, { useContext } from "react";
import Cart

const Carts = () => {
  const { carts } = useContext(CartContext);
  return (
    <div className="container">
      <div className="cart-container" style={{ marginTop: "100px" }}>
        <h1>Shopping Cart</h1>
        {carts.map((cart) => (
          <div className="cart">{cart.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
