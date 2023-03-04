import React from "react";
import "./PreviousYearQuestions.css";
import { Footer } from "../../Footer/Footer";
import { Gap } from "../../Tools/Gap";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../../Tools/CustomHeader";

export const PreviousYearQuestions = () => {
  return (
    <div>
      <>
        <Gap />
        <HorizoantalLine></HorizoantalLine>
        <CustomHeader props={{ title: "Previous Year Question Paper" }} />
        <div className="courses_container">
          <div className="all_courses"></div>
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
    </div>
  );
};
