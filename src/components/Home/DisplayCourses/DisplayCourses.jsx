import React from "react";
import CourseSection from "../CourseSection/CourseSection";
import juniorClass from "../../../ASSETS/IMG/homepage/MiddleLargeSection/eclass.png";
import playschool from "../../../ASSETS/IMG/homepage/MiddleLargeSection/Artwork1.png";
import "./DisplayCourses.css";

export const DisplayCourses = () => {
  return (
    <div className="display-course-container">
      <CourseSection
        props={{
          img: playschool,
          title: "Classes LKG - 3",
          text: `Learning with Animation videos Early learning program for ignited minds.`,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: juniorClass,
          title: "Classes 4 - 8",
          text: `Vision is to make Attractive Learning with animation and live tutring.`,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
