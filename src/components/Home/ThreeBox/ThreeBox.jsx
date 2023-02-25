import React from "react";
import "./ThreeBox.css";

const ThreeBox = () => {
  return (
    <div className="threebox-container">
      <div>
        <p>3100+ </p>
        <div className="box-texts">
          <p>Videos </p>
          <p> Lectures </p>
          <div className="bottom-line"></div>
        </div>
      </div>
      <div>
        <p>Notes</p>
        <div className="box-texts">
          <p>5 Lakh+</p>
          <p>Pages</p>
          <div className="bottom-line"></div>
        </div>
      </div>
      <div>
        <p>60000+</p>
        <div className="box-texts">
          <p>Questions</p>
          <p>Bank</p>
          <div className="bottom-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBox;
