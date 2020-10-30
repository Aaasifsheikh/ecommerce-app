import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Banner from "./Component/Banner";
function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </BrowserRouter>
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <div className="container">
          <Products />
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
