import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <React.Fragment>
      <div className="products">
        {products.map((product) => (
          <div className="product">
          <div className="cover">
            <div className="product-image">
              <img src={product.Image} alt="not_found" />
            </div>
            <div className="product_details">
              <div className="product_name">{product.name}</div>
              <div className="product_price">
                ₹{product.price}{" "}
                <span className="cutprice">{product.cutprice}</span>
              </div>
              <div className="product_status">{product.rating}</div>
            </div>
            <div className="add_cart">Add To Cart</div>
          </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;
