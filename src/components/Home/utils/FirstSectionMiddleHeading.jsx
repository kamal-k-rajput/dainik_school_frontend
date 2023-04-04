import React from "react";
import "./FirstSectionMiddleHeading.css";

export const FirstSectionMiddleHeading = ({ props }) => {
  return (
    <div className="hm-middle-heading">
      <p>{props.title}</p>
      <div className="hm-redBox"></div>
    </div>
  );
};
