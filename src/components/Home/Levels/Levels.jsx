import React from "react";
import "./Levels.css";

function Levels() {
  return (
    <div className="level-container">
      <div>
        <div className="beginner">
          <p>1</p>
        </div>
        <p>Beginner</p>
      </div>
      <div>
        <div className="intermediate">
          <p>2</p>
        </div>
        <p>Intermediate</p>
      </div>
      <div>
        <div className="expert">
          <p>3</p>
        </div>
        <p>Expert</p>
      </div>
      <div>
        <div className="master">
          <p>4</p>
        </div>
        <p>Master</p>
      </div>
    </div>
  );
}

export default Levels;
