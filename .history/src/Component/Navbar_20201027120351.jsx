import React from "react";
import {<NavLink to={path}>{anchorText}</NavLink>
}

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
