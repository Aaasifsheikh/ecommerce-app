import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="left">
          <li>
            <NavLink className="heading">
              IndiaExpress
            </NavLink>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="">
              <span className="shoppingCart">
                <FiShoppingCart className="icon" />
                <span className="cartCount">0</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
