import React, { createContext, useState } from "react";
import Headphone from "../Image/Headphone.jpg.jpg";
import DSLR from "../Image/dslr.jpg.jpg";
import iphone from "../Image/iphone.jpg.jpg";
import perfume from "../Image/perfume.jpg.jpg";
import microphone from "../Image/microphone.jpg.jpg";
import shoes from "../Image/shoes.jpg.jpg";
import watch from "../Image/watch.jpg.jpg";

export const ProductsContext = createContext();
const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Headphone", price: 300, Image: Headphone, status: "🌟🌟🌟🌟" },
    { id: 2, name: "DSLR", price: 400, Image: DSLR, status: "🌟🌟🌟🌟🌟" },
    { id: 3, name: "Iphone", price: 800, Image: iphone, status: "🌟🌟🌟" },
    { id: 4, name: "Perfume", price: 150, Image: perfume, status: "🌟🌟🌟" },
    { id: 5, name: "Microphone", price: 300, Image: microphone, status: "new" },
    { id: 6, name: "Shoes", price: 300, Image: shoes, status: "hot" },
    { id: 7, name: "Watch", price: 300, Image: watch, status: "hot" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;