import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RandomImage from "./utils/RandomImage";
import RandomQuotes from "./utils/RandomQuotes";

function MainBody() {
  return (
    <div>
      <Container>
        <Row>
          <RandomImage />
        </Row>
        <Row>
          <Col xs={9}>
            <h3>Calendar</h3>
          </Col>
          <Col xs={3}>
            <RandomQuotes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainBody;
