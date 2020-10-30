import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {Products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      {Products.}
    </div>
  );
};

export default Products;
