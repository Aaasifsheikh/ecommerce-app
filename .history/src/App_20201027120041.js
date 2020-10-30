import { BrowserRouter } from "react-router-dom";
import { switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route path="/navbar" component={Navbar} />n
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
