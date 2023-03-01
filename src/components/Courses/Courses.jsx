import React from "react";
import { Footer } from "../Footer/Footer";
import courses_top_image from "../../ASSETS/IMG/courses/courses_top_image.png";
import hariyana_ninth_english from "../../ASSETS/IMG/courses/hariyana_ninth_english.png";
import "./Courses.css";
export const Courses = () => {
  return (
    <>
      <div className="courses_container">
        <div className="all_courses">
          <img src={courses_top_image} alt="dainik school courses" />
        </div>
        <section className="courses-section">
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
          <div>course</div>
        </section>
      </div>

      <Footer />
    </>
  );
};
