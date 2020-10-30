import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { qty } = useContext(CartContext);
  return (
    <React.Fragment>
      <nav>
        <ul className="left">
          <li>
            <NavLink to="/" className="heading">
              IndiaExpress
            </NavLink>
          </li>
        </ul>
        <ul className="right">
          <li>
            <NavLink to="cart">
              <s className="shoppingCart">
                <FiShoppingCart className="icon" />
                <div className="cartCount">{qty}</div>
              </s>
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
