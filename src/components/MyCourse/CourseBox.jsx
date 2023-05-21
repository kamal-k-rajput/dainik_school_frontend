import React from "react";
import spokenEnglish from "../../ASSETS/IMG/liveClasses/spokenenglish.png";
import "./subscourse.css";
import { Link } from "react-router-dom";
export const CourseBox = ({ props }) => {
  return (
    <>
      <div className="course-box-parent">
        {/* <img src={spokenEnglish} alt="instructor img" /> */}
        <div className="middle">
          <span className="course-box-heading">{props.name}</span>
          <p className="course-box-details">CLASS:{props.description}</p>
          <p>Instructor:{props.instructor}</p>
          <p className="course-box-bottom">Subject:{props.subject}</p>
          <Link
            className="btn btn-success"
            to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool"
          >
            Start Class
          </Link>
        </div>
      </div>
    </>
  );
};
