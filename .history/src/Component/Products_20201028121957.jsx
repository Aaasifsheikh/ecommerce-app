import React, { useContext } from "react";
import ProductsContext from "../Global/ProductsContext";
const Products = () => {
  const data = useContext(ProductsContext);
  console.log();
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
