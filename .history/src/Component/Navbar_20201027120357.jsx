import React from "react";
import {NavL}

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
