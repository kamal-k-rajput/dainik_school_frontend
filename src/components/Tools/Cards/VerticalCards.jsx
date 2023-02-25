import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./VerticalCards.css";
export const VerticalCards = ({ cardProps }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cardProps.img} />
        <Card.Body>
          <Card.Title>{cardProps.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">{cardProps.buttonLabel}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
