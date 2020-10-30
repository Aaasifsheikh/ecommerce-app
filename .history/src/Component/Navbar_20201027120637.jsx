import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   
      <nav>
        <ul>
          <li className="left">
            <NavLink to="navbar">IndiaExpress</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
