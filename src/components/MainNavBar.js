import React from "react";
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

const MainNavBar = () => {
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
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/settings">
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/invite">Invite</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Button variant="outline-secondar" href="/logout">
                    Log Out
                  </Button>{" "}
                </Navbar.Collapse>
              </Col>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default MainNavBar;
