import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function MainNavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar-new">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            MyFamilyLogo
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/dairy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dairy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/events"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/invite"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Invite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <footer>Footer</footer>
    </>
  );
}

export default MainNavBar;
