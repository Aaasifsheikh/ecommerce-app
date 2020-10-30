import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";

const Carts = () => {
  const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
  console.log(data);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0 ? {shoppingCart.map(cart=>{
            <div className="cart" key={cart.id}>
            <span className="cart_image"><img src={cart.image} alt="Not_found" /></span>  
            <span className="cart_product_name">{cart.name}</span>  
            <div className="cart_product_price">{cart.price}</div>  
            </div>
        })} : "Sorry, Your Cart Is Currently Empty"}
       
      </div>
    </div>
  );
};

export default Carts;
