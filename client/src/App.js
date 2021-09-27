import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Dairy from "./components/pages/Dairy";
import Events from "./components/pages/Events";
import LogOut from "./components/pages/LogOut";
import Settings from "./components/pages/Settings";
import Invite from "./components/pages/Invite";
import SignUp from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/dairy" component={Dairy} />
        <Route path="/events" component={Events} />
        <Route path="/logout" component={LogOut} />
        <Route path="/settings" component={Settings} />
        <Route path="/invite" component={Invite} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={Signin} />
        <Route path="/auth/activate/:token" component={Activate} />
      </Switch>
    </Router>
  );
};

export default App;
