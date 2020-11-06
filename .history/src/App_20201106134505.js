import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Cart from "./Component/Cart";
import Notfound from "./Component/Notfound";
import CartContextProvider from "./Global/CartContext";
import Home from "./Component/Home";
function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/ecommorce" component={Home} />
            <Home />
            <Route path="/cart" exact component={Cart} />
            <Route component={Notfound} />

          </Switch>
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
