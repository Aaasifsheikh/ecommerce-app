import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Cart from "./Component/Carts";
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
            <Route path="/" component={Home} />

            <Route path="/Cart" component={Cart} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
