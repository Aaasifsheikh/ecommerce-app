import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {Products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      
    </div>
  );
};

export default Products;
