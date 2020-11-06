import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Carts from "./Component/Carts";
import Notfound from "./Component/Notfound";
import CartContextProvider from "./Global/CartContext";
import Home from './Component/Home';
function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Home />
            <Route exact path="/Carts" component={Carts} />
            <Carts />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
