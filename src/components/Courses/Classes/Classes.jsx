import React from "react";
import "./Classes.css";
import { Footer } from "../../Footer/Footer";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";

export const Classes = () => {
  return (
    <div>
      <>
        <Gap />
        <CustomHeader props={{ title: "CLASSES" }} />
        <div className="courses_container">
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
