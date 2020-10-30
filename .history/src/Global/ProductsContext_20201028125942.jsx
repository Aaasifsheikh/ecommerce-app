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
    { id: 1, name: "Headphone", price: 1800, cutpirce: 2200,  Image: Headphone, status: "🌟🌟🌟🌟" },
    { id: 2, name: "DSLR", price: 13500, cutpirce: 18000, Image: DSLR, status: "🌟🌟🌟🌟🌟" },
    { id: 3, name: "Iphone", price: 48000, cutpirce: 62000, Image: iphone, status: "🌟🌟🌟🌟" },
    { id: 4, name: "Perfume", price: 1200, cutpirce: 1400, Image: perfume, status: "🌟🌟🌟" },
    { id: 5, name: "Microphone", price: 6000, cutpirce: 85000, Image: microphone, status: "🌟🌟🌟🌟" },
    { id: 6, name: "Shoes", price: 2800, cutpirce: 4500, Image: shoes, status: "🌟🌟🌟🌟🌟" },
    { id: 7, name: "Watch", price: 5200, cutpirce: 200, Image: watch, status: "🌟🌟🌟" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
