import React from "react";
import { Container, Row, Col } from "reactstrap";
import RandomImage from "./utils/RandomImage";
import RandomQuotes from "./utils/RandomQuotes";
import Calendar from "./Calendar";

function MainBody() {
  return (
    <div style={{ margin: "40px" }}>
      <Container>
        <RandomImage />
        <Row>
          <Col xs="9">
            <Container fluid>
              <Calendar />
            </Container>
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
