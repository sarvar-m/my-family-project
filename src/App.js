import "./App.css";
import Footer from "./footer";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
