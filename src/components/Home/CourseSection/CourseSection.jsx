import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CourseSection.css";

const CourseSection = ({ props }) => {
  console.log(props.img);
  return (
    <div className="course-section">
      {/* <Card style={{ width: "18rem" }} className="card course-card">
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
      </Card> */}
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <div>
          <img src={props.img} alt="" />
        </div>
        <div>
          <h4>Dainik School.com</h4>
          <p>{props.text}</p>
          <button className="btn btn-success">{props.buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
