import React from "react";
import MainNavBar from "./MainNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainBody from "./MainBody";
import "./NavBar.css";

function Main() {
  return (
    <Router>
      <MainNavBar />
      <MainBody />
    </Router>
  );
}

export default Main;
