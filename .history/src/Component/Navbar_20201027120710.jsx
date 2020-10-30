import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li >
          <NavLink to="navbar">IndiaExpress</NavLink>
        </li>
      </ul>
      <ul className="left">
        <li >
          <NavLink to="navbar">IndiaExpress</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
