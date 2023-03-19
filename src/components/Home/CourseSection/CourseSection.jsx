import React from "react";
import "./CourseSection.css";
import { Link } from "react-router-dom";
import logo from "../../../ASSETS/IMG/Logo/logo.png";

const CourseSection = ({ props }) => {
  return (
    <div className="course-section gradient-btn-blue">
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
        <div>
          <img src={logo} alt="logo" className="course-logo" />
          <p>{props.text}</p>
          <Link className="btn btn-success gradient-btn" to="/courses">
            {props.buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
