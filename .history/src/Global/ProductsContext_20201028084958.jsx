import React, { createContext, useState } from "react";
import Headphone from "../Image/Headphone.jpg.jpg";
import DSLR from "../Image/dslr.jpg.jpg";
import iphone from "../Image/iphone.jpg.jpg";
import perfume from "../Image/perfume.jpg.jpg";
import microphone from "../Image/microphone.jpg.jpg";
import shoes from "../Image/shoes.jpg.jpg";
import watch from "../Image/watch.jpg";

export const ProductsContext = createContext();
const [] = useState([
    {id:1, name: "Headphone", price:300, Image: Headphone, status:"hot"},
    {id:1, name: "DSLR", price:400, Image: DSLR, status:"hot"},
    {id:1, name: "Iphone", price:800, Image: iphone, status:"hot"},
    {id:1, name: "Perfume", price:150, Image: perfume, status:"hot"},
    {id:1, name: "", price:300, Image: Headphone, status:"hot"},
    {id:1, name: "Headphone", price:300, Image: Headphone, status:"hot"},
    {id:1, name: "Headphone", price:300, Image: Headphone, status:"hot"}
])

const ProductsContextProvider = () => {
  return <React.Fragment>

  </React.Fragment>;
};
export default ProductsContextProvider;
