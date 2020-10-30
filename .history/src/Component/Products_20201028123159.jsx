import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      {products.map((product)=>(
          <div className="product-image"

      ))}
    </div>
  );
};

export default Products;
