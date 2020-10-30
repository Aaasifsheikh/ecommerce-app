import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/navbar" component={Navbar} />
          <Navbar />
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
