import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { qty, shoppingCart } = useContext(CartContext);
  return (
    <React.Fragment>
      <nav>
        <ul className="left">
          <li>
            <NavLink to="/" className="heading">
              <span style={{ color: "black" }}>Shopping</span>Express
            </NavLink>
          </li>
        </ul>
        <ul className="right">
          <li>
            <NavLink to="cart">
              
                <FiShoppingCart className="icon" />
              {shoppingCart.length >= 0 ? <span className="shoppingCart"><span className="cartCount">{qty}</span> </span> : 0 }
             
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
