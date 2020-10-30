import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const Carts = () => {
  const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
  console.log(shoppingCart);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0 ? shoppingCart.map(cart=>(
            <div className="cart" key={cart.id}>
            <span className="cart_image"><img src={cart.Image} alt="Not_found" /></span>  
            <span className="cart_product_name">{cart.name}</span>  
            <span className="cart_product_price">₹{cart.price}</span>  
            <span className="inc" onClick={()=>dispatch({type: "INC", id:cart.id, cart:cart})}><AddIcon className="incIcon" /></span>
            <span className="product_qty">{cart.qty}</span>
            <span className="dec" onClick={()=>dispatch({type:"DEC", id:cart.id, cart:cart})}><RemoveIcon className="decIcon" /></span>
            <span className="total_price">₹{cart.price * cart.qty}.00</span>
            <span className='delete' onClick={()=>dispatch({type: "DELETE", id:cart.id, cart:cart})}><DeleteIcon /></span>
            </div>
        )) : "Sorry, Your Cart Is Currently Empty"}
        <div className="cart-summery">
          <div className="summery">
            <h3>Cart Summery</h3>
            <div className="total-items">
              Total Items
            </div>
            <div className="total-price"
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Carts;


       

