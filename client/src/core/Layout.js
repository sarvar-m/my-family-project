import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import MainNavBar from "../components/MainNavBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavBar />
      <div className="container">{children}</div>
    </Fragment>
  );
};

export default withRouter(Layout);
