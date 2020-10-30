import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
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
            <
           
                <FiShoppingCart className="icon" />
                <span className="cartCount">0</span>
           
           
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
