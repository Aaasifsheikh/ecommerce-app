import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <NavLink to="navbar" className="heading">
            IndiaExpress
          </NavLink>
        </li>
      </ul>
      <ul className="right">
        <li>
          <NavLink to="shoppingCart">
            <span className="shoppingCart">
              <FiShoppingCart className="icon" />
              <span className="cartCount">0</span>
            </span>
          </NavLink>
      <Banner />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
