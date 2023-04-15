import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./VerticalCards.css";
import { Link } from "react-router-dom";
export const VerticalCards = ({ cardProps }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cardProps.img} />
        <Card.Body>
          <Card.Title>{cardProps.title}</Card.Title>
          <Card.Text>{cardProps.text}</Card.Text>
          <Link to={cardProps.link}>
            <Button variant="primary">{cardProps.buttonLabel}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
