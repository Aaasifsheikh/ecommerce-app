import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      {products.map((product)=>(
          <div className="product-image">
              <img src={product.image} alt="not_found" />
          </div>
          <div className="product_details">
              <div className="product_name">

              </div>
          </div>

      ))}
    </div>
  );
};

export default Products;
