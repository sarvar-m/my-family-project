import React from "react";
import { Card } from "react-bootstrap";

function RandomQuotes() {
  return (
    <div>
      <Card>
        <Card.Body style={{ backgroundColor: "#dc3545", color: "white" }}>
          <Card.Title>Random Quotes</Card.Title>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              "Children are the hands by which we take hold of heaven."–Henry
              Ward Beecher{" "}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
export default RandomQuotes;
