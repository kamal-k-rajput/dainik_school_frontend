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
          text: `Tied to the philosophy of "nature and nurture" , dainik school gives your child a right path combining animated series for fun learning and clearing the basic concepts with much ease and understanding. click the linkbelow to learn more.`,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: juniorClass,
          title: "Classes 4 - 8",
          text: `Dainik School's vision is to make the learning experience.`,
          buttonLabel: "Explore",
        }}
      />
    </div>
  );
};
