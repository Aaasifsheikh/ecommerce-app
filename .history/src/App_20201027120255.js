import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route path="/navbar" component={Navbar} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
