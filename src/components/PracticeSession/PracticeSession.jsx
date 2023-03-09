import React, { useState } from "react";
import "./PracticeSession.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
import { Footer } from "../Footer/Footer";
export const PracticeSession = () => {
  const [newClass, setNewClass] = useState("");
  function handleClick(event) {
    setNewClass((newClass) => {
      if (newClass === "") {
        setNewClass("show-box");
      } else {
        setNewClass("");
      }
    });
  }
  return (
    <div>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Practice Session" }} />
      <div className="library_container">
        <div className="all_library"></div>
        <section className="library-section">
          <div onClick={handleClick}>Class 1</div>
          <div className={`hidden-box ${newClass}`}>1</div>
          <div className={`hidden-box ${newClass}`}>2</div>
          <div className={`hidden-box ${newClass}`}>3</div>
          <div>Class 2</div>
          <div>Class 3</div>
          <div>Class 4</div>
          <div>Class 5</div>
          <div>Class 6</div>
          <div>Class 7</div>
          <div>Class 8</div>
          <div>Class 9</div>
          <div>Class 10</div>
          <div>Class 11</div>
          <div>Class 12</div>
        </section>
      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};
