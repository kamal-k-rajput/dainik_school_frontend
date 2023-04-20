import React from "react";
import "./CourseBox.css";
import { Link } from "react-router-dom";

export const CourseBox = ({ props }) => {
  return (
    <div className="course-box-container">
      <img src={props.imgSrc} alt="instructor img" />
      <div className="middle">
        <span className="course-box-heading">{props.heading}</span>
        <p className="course-box-details">{props.details}</p>
      </div>
      <div className="course-box-bottom">
        <Link to={props.subject} className="btn btn-success">
          View Details
        </Link>
        <Link to={props.subject} className="btn btn-success">
          Free Trials
        </Link>
      </div>
    </div>
  );
};
