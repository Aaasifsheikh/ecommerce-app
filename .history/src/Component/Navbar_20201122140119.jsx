import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { qty, shoppingCart } = useContext(CartContext);
  return (
    <React.Fragment>
      <nav>
        <div className="navbar">
          <ul className="left">
            <li>
              <NavLink to="/ecommerce-app" className="heading">
                <span style={{ color: "black" }}>Shopping</span>Express
              </NavLink>
            </li>
          </ul>
          <ul className="right">
            <li>
              <NavLink to=/ecommerce-app/cart">
                <span className="shoppingCart">
                  <FiShoppingCart className="icon" />
                  <span className="cartCount">{qty}</span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
