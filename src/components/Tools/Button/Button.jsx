import React from "react";
import "./Button.css";

export const Button = ({ label, onClick }) => {
  console.log(label, onClick);
  // console.log(props);
  return (
    <button className="main_button" onClick={onClick}>
      {label}
    </button>
  );
};
