import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  //  console.log(data);
  return (
    <React.Fragment>
      <div className="container">
        <Banner />
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.Image} alt="not_found" />
              </div>
              <div className="product_details">
                <div className="product_name">{product.name}</div>
                <div className="product_price">
                  ₹{product.price}
                  <span className="cutprice">{product.cutprice}</span>
                </div>
                <div className="product_status">{product.rating}</div>
              </div>
              <NavLink to="">
                <div
                  className="add_cart"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      id: product.id,
                      product: product,
                    })
                  }
                >
                  Add To Cart
                </div>
              </NavLink>
              {product.status === "hot" ? (
                <div className="hot">Hot 🔥</div>
              ) : (
                ""
              )}
              {product.status === "new" ? (
                <div className="new">New ✴️</div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
