import React from "react";
import { Footer } from "../Footer/Footer";
import courses_top_image from "../../ASSETS/IMG/courses/courses_top_image.png";
import "./Courses.css";
export const Courses = () => {
  return (
    <>
      <div className="courses_container">
        <div className="all_courses">
          <img src={courses_top_image} alt="dainik school courses" />
        </div>
      </div>
      <Footer />
    </>
  );
};
