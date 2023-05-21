import React from "react";
import "./MyCourse.css";
import spokenEnglish from "../../ASSETS/IMG/liveClasses/spokenenglish.png";
export const CourseBox = ({ props }) => {
  return (
    <div>
      <div>
        <img src={spokenEnglish} alt="instructor img" />
        <div className="middle">
          <span>{props.name}</span>
          <p>{props.subject}</p>
          <p>Class:{props.description}</p>
          <p>Instructor:{props.instructor}</p>
          <p>Subject:{props.subject}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
