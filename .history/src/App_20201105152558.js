import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./Component/Products";
import Carts from "./Component/Carts";
import Notfound from "./Component/Notfound";
import CartContextProvider from "./Global/CartContext";
function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <
            <Route path="/carts" exact component={Carts} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
