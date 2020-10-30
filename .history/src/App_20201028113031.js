import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";
import ProductsContextProvider from "./Global/ProductsContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/navbar" component={Navbar} />
          <Navbar />
          <ProductsContextProvider></ProductsContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
