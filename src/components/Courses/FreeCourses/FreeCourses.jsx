import React from "react";
import "./FreeCourses.css";
import { Footer } from "../../Footer/Footer";
import { CustomHeader } from "../../Tools/CustomHeader";

export const FreeCourses = () => {
  return (
    <div>
      <>
        <CustomHeader props={{ title: "Free Courses" }} />
        <div className="courses_container">
          <div className="all_courses"></div>
          <section className="courses-section">
            <div>course</div>
            <div>course</div>
            <div>course</div>
            <div>course</div>
          </section>
        </div>

        <Footer />
      </>
    </div>
  );
};
