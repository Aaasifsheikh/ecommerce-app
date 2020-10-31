import React, { useContext } from "react";
import {ProductsContext} from "../Global/ProductsContext";
const Products = () => {
  const {products} = useContext(ProductsContext);
  
  return (
      <React.Fragment>
    <div className="products">
      {products.map((product)=>(
          <div className="product">
          <div className="product-image">
              <img src={product.Image} alt="not_found" />
          </div>
          <div className="product_details">
              <div className="product_name">
                  {product.name}
              </div>
          </div>
          </div>
      ))}
    </div>
    </React.Fragment>
  );
};

export default Products;