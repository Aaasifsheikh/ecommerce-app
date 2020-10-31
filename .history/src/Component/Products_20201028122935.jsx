import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {Products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      <h1>Products</h1>
    </div>
  );
};

export default Products;