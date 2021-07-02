import React from "react";
import { Container, Row, Col } from "reactstrap";
import RandomImage from "./utils/RandomImage";
import RandomQuotes from "./utils/RandomQuotes";

function MainBody() {
  return (
    <div style={{ margin: "40px" }}>
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

export default MainBody;
