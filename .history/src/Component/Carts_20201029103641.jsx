import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

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
            <span className="cart_product_price">{cart.price}</span>  
            <span className="increament"><FaPlus /></span>
            <span className="product_qty">{cart.quantity}</span>
            <span className="decreament"><FaMinus /></span>
            <span className="total_price">500.00</span>
            <span className='detel'

            </div>
        })} : "Sorry, Your Cart Is Currently Empty"}
       
      </div>
    </div>
  );
};

export default Carts;
