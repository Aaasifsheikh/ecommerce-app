import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const Carts = () => {
  const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
  console.log(data);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0 ? shoppingCart.map(cart=>(
            <div className="cart" key={cart.id}>
            <span className="cart_image"><img src={cart.image} alt="Not_found" /></span>  
            <span className="cart_product_name">{cart.name}</span>  
            <span className="cart_product_price">{cart.price}</span>  
            <span className="i"><AddIcon /></span>
            <span className="product_qty">{cart.quantity}</span>
            <span className="decreament"><RemoveIcon /></span>
            <span className="total_price">500.00</span>
            <span className='delete'><DeleteIcon /></span>


            </div>
        )) : "Sorry, Your Cart Is Currently Empty"}
       
      </div>
    </div>
  );
};

export default Carts;
