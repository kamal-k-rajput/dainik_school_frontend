import React from "react";
import CourseSection from "../CourseSection/CourseSection";
import juniorClass from "../../../ASSETS/IMG/homepage/MiddleLargeSection/eclass.png";
import playschool from "../../../ASSETS/IMG/homepage/MiddleLargeSection/Artwork1.png";
import "./DisplayCourses.css";

export const DisplayCourses2 = () => {
  return (
    <div className="display-course-container">
      <CourseSection
        props={{
          img: playschool,
          title: "Classes 9-12",
          text: `Live Tution Program at anywhere.`,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: juniorClass,
          title: "Languages",
          text: `Live learning program for everyone anytime anywhere. `,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
