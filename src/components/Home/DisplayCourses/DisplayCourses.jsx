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
          text: `Now children’s no longer need learning with Animation videos Early learning program for ignited minds.`,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: juniorClass,
          title: "Classes 4 - 8",
          text: `Attractive learning to mold young minds into strong individuals by animation &amp; live tutoring.`,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
