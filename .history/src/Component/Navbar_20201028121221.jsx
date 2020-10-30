import React from "react";
// import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Banner from "./Banner";
import Products from "./Products";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="left">
          <li>
            <a href="" className="heading">
              IndiaExpress
            </a>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="">
              <span className="shoppingCart">
                <FiShoppingCart className="icon" />
                <span className="cartCount">0</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <Banner />
      {/* <Products /> */}
    </React.Fragment>
  );
};

export default Navbar;
