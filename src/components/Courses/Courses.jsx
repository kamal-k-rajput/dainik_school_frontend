import React from "react";
import { Footer } from "../Footer/Footer";
import "./Courses.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
export const Courses = () => {
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Courses" }} />
      <div className="courses_container">
        <div className="all_courses">
          {/* <img src={courses_top_image} alt="dainik school courses" /> */}
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
      <MoveToTop />
    </>
  );
};
