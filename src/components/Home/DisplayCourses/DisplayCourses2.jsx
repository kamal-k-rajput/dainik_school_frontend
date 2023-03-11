import React from "react";
import CourseSection from "../CourseSection/CourseSection";
import language from "../../../ASSETS/IMG/homepage/displayCourses/language.png";
import classNinth from "../../../ASSETS/IMG/homepage/displayCourses/class_ninth.png";

import "./DisplayCourses.css";

export const DisplayCourses2 = () => {
  return (
    <div className="display-course-container">
      <CourseSection
        props={{
          img: classNinth,
          title: "Classes 9-12",
          text: `Live Tution Program at anywhere.`,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: language,
          title: "Languages",
          text: `Live learning program for everyone anytime anywhere. `,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
