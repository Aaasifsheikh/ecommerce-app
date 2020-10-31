import React, { createContext, useState } from "react";
import Headphone from "../Image/Headphone.jpg.jpg";
import DSLR from "../Image/dslr.jpg.jpg";
import iphone from "../Image/iphone.jpg.jpg";
import perfume from "../Image/perfume.jpg.jpg";
import microphone from "../Image/microphone.jpg.jpg";
import shoes from "../Image/shoes.jpg.jpg";
import watch from "../Image/watch.jpg.jpg";
import ring from "../Image/ring.jpg.jpg";
import smartWatch from "../Image/smart watch.jpg";
import powerbank from "../Image/powerbank.jpg";
import jeans from "../Image/combo jeans";
import cap from "../Image/cap.jpg";
import Wtsirt from "../Image/whitetshirt.jpg";
import bicycle from "../Image/bicycle.jpg";
import tablet from "../Image/tablet.jpg";
import hplaptop from "../Image/";

export const ProductsContext = createContext();
const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Headphone", price: 1800, cutprice: 2200,  Image: Headphone, rating: "🌟🌟🌟🌟", status: "new" },
    { id: 2, name: "DSLR", price: 13500, cutprice: 18000, Image: DSLR, rating: "🌟🌟🌟🌟🌟" , status: "new" },
    { id: 3, name: "Iphone", price: 48000, cutprice: 62000, Image: iphone, rating: "🌟🌟🌟🌟", status: "new" },
    { id: 4, name: "Perfume", price: 1200, cutprice: 1400, Image: perfume, rating: "🌟🌟🌟", status: "hot" },
    { id: 5, name: "Microphone", price: 6000, cutprice: 85000, Image: microphone, rating: "🌟🌟🌟🌟", status: "new" },
    { id: 6, name: "Shoes", price: 2800, cutprice: 4500, Image: shoes, rating: "🌟🌟🌟🌟🌟", status: "new" },
    { id: 7, name: "Watch", price: 5200, cutprice: 9500, Image: watch, rating: "🌟🌟🌟", status: "hot" },
    { id: 8, name: "Ring", price: 3700, cutprice: 4800, Image: ring, rating: "🌟🌟🌟🌟", status: "new" },
   
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
