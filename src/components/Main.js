import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavbar from "./MainNavBar";
import MainBody from "./MainBody";
import "./NavBar.css";
import MainFooter from "./MainFooter";

function Main() {
  return (
    <Router>
      <div>
        <MainNavbar />
        <div className="pages">
          <MainBody />
          <MainFooter />
        </div>
      </div>
    </Router>
  );
}

export default Main;
