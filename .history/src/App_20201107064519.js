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
            <Route exact path="/ecommerce-app" component={Home} />
            <Route exact path="/ecommerce-app/cart" component={Cart} />
            {/* <Route component={Notfound} /> */}
          </Switch>
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
