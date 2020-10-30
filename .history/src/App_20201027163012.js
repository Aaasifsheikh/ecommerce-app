import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";
import Banner from "./Component/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/navbar" component={Navbar} />
          <Navbar />
          <Banner
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
