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
          img: juniorClass,
          title: "Class 4 - 12",
          text: `Education is the most powerful weapon you can use to change the world.
              `,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: playschool,
          title: "Class LKG - 3",
          text: `Dainik School's vision is to make the learning experience.`,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
