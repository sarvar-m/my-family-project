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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dairy">Dairy</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    {!isAuth() && (
                      <Fragment>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                      </Fragment>
                    )}
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/settings">
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/invite">Invite</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  {isAuth() && (
                    <Nav.Link>
                      <span
                        className="nav-link"
                        onClick={() => {
                          signout(() => history.push("/"));
                        }}
                      >
                        Log Out
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
