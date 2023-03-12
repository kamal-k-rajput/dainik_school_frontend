import React from "react";
import "./CustomHeader.css";

export const CustomHeader = ({ props }) => {
  return (
    <div className="custom-header-box gradient-btn">
      <span>{props.title}</span>
    </div>
  );
};
