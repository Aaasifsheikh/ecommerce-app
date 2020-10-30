import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as RouterSwitch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Banner from "./Component/Banner";
import Cart from "./Component/Cart";
function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
