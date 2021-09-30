import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Dairy from "./components/pages/Dairy";
import Events from "./components/pages/Events";
import Settings from "./components/pages/Settings";
import Invite from "./components/pages/Invite";
import SignUp from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";
import Private from "./core/Private";
import Admin from "./core/Admin";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";
import Main from "./components/pages/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/gallery" component={Gallery} />
        <PrivateRoute path="/dairy" component={Dairy} />
        <PrivateRoute path="/events" component={Events} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/invite" component={Invite} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={Signin} />
        <Route path="/auth/password/reset/:token" component={Reset} />
        <Route path="/auth/password/forgot" component={Forgot} />
        <Route path="/auth/activate/:token" component={Activate} />
        <PrivateRoute path="/private" component={Private} />
        <AdminRoute path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
