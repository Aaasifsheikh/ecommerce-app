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
          <NavLink to="shoppingCart"><span<FiShoppingCart ></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
