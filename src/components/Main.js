import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainBody from "./MainBody";
import "./NavBar.css";
import MainFooter from "./MainFooter";
import "./MainFooter.css";

function Main() {
  return (
    <Router>
      <div className="pages">
        <MainBody />
        <MainFooter />
      </div>
    </Router>
  );
}

export default Main;
