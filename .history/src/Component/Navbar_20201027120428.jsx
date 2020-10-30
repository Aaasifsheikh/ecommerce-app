import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="navbar">IndiaExpress</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
