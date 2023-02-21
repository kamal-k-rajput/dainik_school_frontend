import React from "react";
import "./FirstSection.css";
import boy from "../../../ASSETS/IMG/homepage/FirstSection/boy.jpeg";
export const FirstSection = () => {
  return (
    <div className="first-section">
      <div>
        <b>EVENING SCHOOL</b>
        <b>WITH</b>
        <b> DAINIK SCHOOL</b>
      </div>
      <div>
        <img src={boy} alt="dainik school" />
      </div>
    </div>
  );
};
