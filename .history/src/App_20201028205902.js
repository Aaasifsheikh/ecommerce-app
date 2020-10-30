import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Cart from "./Component/Carts";
import Notfound from "./Component/Notfound";
import CartContextProvider from './Global/CartContext';
function App() {
  return (
    <CartContextProvider>

    <ProductsContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </ProductsContextProvider>
  );
    </CartContextProvider>
}

export default App;
