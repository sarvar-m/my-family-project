import React from "react";
import MainNavbar from "./components/MainNavBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Dairy from "./components/pages/Dairy";
import Events from "./components/pages/Events";
import LogOut from "./components/pages/LogOut";
import Settings from "./components/pages/Settings";
import Invite from "./components/pages/Invite";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/dairy" component={Dairy} />
        <Route path="/events" component={Events} />
        <Route path="/logout" component={LogOut} />
        <Route path="/settings" component={Settings} />
        <Route path="/invite" component={Invite} />
      </Switch>
    </Router>
  );
}

export default App;
