import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Banner from "./Component/Banner";
function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Switch>
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;