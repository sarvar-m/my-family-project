import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { isAuth, signout } from "../auth/helpers";
import { withRouter } from "react-router-dom";

const MainNavBar = ({ history }) => {
  return (
    <div className="navbar">
      <Container>
        <Row>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container>
              <Col xs={8}>
                <Navbar.Brand href="/">My Family</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Col>
              <Col xs={4}>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {isAuth() && <Nav.Link href="/home">Home</Nav.Link>}
                    {isAuth() && <Nav.Link href="/dairy">Dairy</Nav.Link>}
                    {isAuth() && <Nav.Link href="/events">Events</Nav.Link>}
                    {isAuth() && <Nav.Link href="/gallery">Gallery</Nav.Link>}

                    {isAuth() && (
                      <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/settings">
                          Settings
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/invite">
                          Invite
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                    {!isAuth() && (
                      <Fragment>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                      </Fragment>
                    )}
                    {isAuth() && isAuth().role === "admin" && (
                      <Nav.Link href="/admin">{isAuth().name}_A</Nav.Link>
                    )}
                    {isAuth() && isAuth().role === "subscriber" && (
                      <Nav.Link href="/private">{isAuth().name}</Nav.Link>
                    )}
                  </Nav>
                  {isAuth() && (
                    <Nav.Link className="nav-link">
                      <span
                        className="nav-link"
                        onClick={() => {
                          signout(() => history.push("/"));
                        }}
                      >
                        Signout
                      </span>
                    </Nav.Link>
                  )}
                </Navbar.Collapse>
              </Col>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(MainNavBar);
