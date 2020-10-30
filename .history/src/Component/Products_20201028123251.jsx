import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      {products.map((product)=>(
          <div className="product-image">
              <img src={product.Image}
          </div>

      ))}
    </div>
  );
};

export default Products;
