import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CourseSection.css";

const CourseSection = ({ props }) => {
  console.log(props.img);
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card course-card">
        <Card.Img variant="top" src={props.img} />
        <div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              <p>Dainik School.com</p>
              <p>{props.text}</p>
            </Card.Text>
            <Button variant="primary">{props.buttonLabel}</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CourseSection;