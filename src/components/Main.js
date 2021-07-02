import React from "react";
import MainNavBar from "./MainNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainBody from "./MainBody";
import "./NavBar.css";
import MainFooter from "./MainFooter";
import "./MainFooter.css";

function Main() {
  return (
    <Router>
      <MainNavBar />
      <MainBody />
      <MainFooter />
    </Router>
  );
}

export default Main;
