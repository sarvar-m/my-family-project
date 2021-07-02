import React from "react";
// import "./RandomQuotes.css";
import { Card, CardTitle, CardText } from "reactstrap";

function RandomQuotes() {
  return (
    <div className="quote">
      <Card body inverse color="danger">
        <CardTitle tag="h5">
          <h4>Random Quotes</h4>
        </CardTitle>
        <CardText>
          "Most things are good, and they are the strongest things; but there "
          –Walt Disney
        </CardText>
      </Card>
    </div>
  );
}
export default RandomQuotes;
