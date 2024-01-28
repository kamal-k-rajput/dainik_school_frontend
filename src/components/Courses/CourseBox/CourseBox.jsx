import React from "react";
import "./CourseBox.css";
import { Link, useNavigate } from "react-router-dom";
import spokenEnglish from "../../../ASSETS/IMG/liveClasses/spokenenglish.png";

export const CourseBox = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div className="course-box-container">
      <img src={spokenEnglish} alt="instructor img" />
      <div className="middle">
        <span className="course-box-heading">{props?.name}</span>
        <p className="course-box-heading ">{props?.subject}</p>
        <p className="course-box-details">Class:{props?.description}</p>
      </div>
      <div className="course-box-bottom">
        <Link to={`/checkout/${props?._id}`} className="btn btn-success">
          Enroll
        </Link>
      </div>
    </div>
  );
};
