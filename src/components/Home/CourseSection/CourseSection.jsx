import React from "react";
import "./CourseSection.css";
import { Link } from "react-router-dom";

const CourseSection = ({ props }) => {
  console.log(props.img);
  return (
    <div className="course-section">
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
        <div>
          <h4>Dainik School.com</h4>
          <p>{props.text}</p>
          <Link className="btn btn-success" to="/courses">
            {props.buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
