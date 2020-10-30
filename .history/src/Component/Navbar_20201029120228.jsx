import React,{createContext} from "react";
import Cr
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
            <NavLink to="cart">
              <span className="shoppingCart">
                <FiShoppingCart className="icon" />
                <span className="cartCount">0</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
