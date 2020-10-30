import React, { useContext } from "react";
import {CartContext} from "../Global/CartContext";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import StripeCheckout from 'react-stripe-checkout';
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
      </div>
      {shoppingCart.length > 0 ? 
        <div className="cart-summery">
          <div className="summery">
            <h3>Cart Summery</h3>
            <div className="total-items">
              <div className="items"> Total Items </div>
            <div className="items-count">{qty}</div>

          </div>
          <div className="total-price-section">
            <div className="just-title">Total Price</div>
            <div className="items-price">₹{totalPrice}.00</div>
          </div>
          <div className="stripe-section">
           <StripeCheckout stripeKey="pk_test_51Hhqa7CKdJBLBcP2iMOyIS6sLmR8Zr1crIFJsF7g4hVxCqr3FgX2r3bBohO0pfDMDP5nEQ21Vvq18B41Ke3giI8M00lszfiek5"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name="">

           </StripeCheckout>
            </div>
          </div>
          
        </div>
       : ""}
        
    </div>
  );
};
export default Carts;


       

