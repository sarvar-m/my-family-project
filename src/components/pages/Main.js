import React from "react";
import { Container, Row, Col } from "reactstrap";
import RandomImage from "./RandomImage";
import RandomQuotes from "./RandomQuotes";

function Main() {
  return (
    <div style={{ marginTop: "75px" }}>
      <Container>
        <Row>
          <Col xs="9">
            <RandomImage />
          </Col>
          <Col xs="3">
            <RandomQuotes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
