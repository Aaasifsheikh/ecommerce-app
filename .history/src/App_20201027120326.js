import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {}
import Navbar from "./Component/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
