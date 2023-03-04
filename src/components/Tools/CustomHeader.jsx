import React from "react";
import "./CustomHeader.css";

export const CustomHeader = ({ props }) => {
  return (
    <div className="custom-header-box">
      <span>{props.title}</span>
    </div>
  );
};
