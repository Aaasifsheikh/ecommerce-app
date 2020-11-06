import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import { NavLink, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const history = useHistory();
  const gotoCart =()=>{
    history.push("/")
  }
  const { qty, shoppingCart } = useContext(CartContext);
  return (
    <React.Fragment>
      <nav>
        <ul className="left">
          <li>
            <NavLink to="/" className="heading">
              <span style={{ color: "black" }}>Shopping</span>Express
            </NavLink>
          </li>
        </ul>
        <ul className="right">
          <li>
            <div onClick={gotoCart} >
              <span className="shoppingCart">
              <FiShoppingCart className="icon" />
                <span className="cartCount">{qty}</span>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
