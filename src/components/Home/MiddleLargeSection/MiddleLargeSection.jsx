import React from "react";
import "./MiddleLargeSection.css";
import oneperson from "../../../ASSETS/IMG/homepage/MiddleLargeSection/Artwork1.png";
import persontodo from "../../../ASSETS/IMG/homepage/MiddleLargeSection/eclass.png";
// import persontodo from "../../../ASSETS/IMG/homepage/persontodo.png";
export const MiddleLargeSection = () => {
  return (
    <div className="lg-section-container">
      <div className="world-class-learning">
        <h2>World Class learning for You</h2>
        <p>"Learning never exhausts the mind"</p>
      </div>
      <div>
        <img
          src={oneperson}
          alt="person teaching on the board"
          className="image-in-middle-large"
        />
      </div>
      <div>
        <img
          src={persontodo}
          alt="Todo list of learning"
          className="image-in-middle-large"
        />
      </div>
      <div className="we-help">
        <p>We Help</p>
        <p> to LEARN</p>
        <p>You Grow Faster</p>
        <p></p>
      </div>
    </div>
  );
};
