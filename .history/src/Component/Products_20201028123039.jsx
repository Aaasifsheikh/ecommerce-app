import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {products} = useContext(ProductsContext);
  
  return (
    <div className="products">
      {products.}
    </div>
  );
};

export default Products;
