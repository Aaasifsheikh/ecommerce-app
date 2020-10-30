import React, { useContext } from "react";
import ProductsContext from '../Global/'
const Products = () => {
  const data = useContext();
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
