import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <NavLink to="navbar">IndiaExpress</NavLink>
        </li>
      </ul>
      <ul className="right">
        <li>
          <NavLink to="shoppingCart" className="heading"><span><FiShoppingCart /><span className="cartCount">0</span></span></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
