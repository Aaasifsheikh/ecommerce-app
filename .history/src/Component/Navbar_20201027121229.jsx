import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

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
          <NavLink to="shoppingCart">{FaShoppingCart /}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
