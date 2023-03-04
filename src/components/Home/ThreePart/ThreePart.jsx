import React from "react";
import fivePoints from "../../../ASSETS/IMG/homepage/ThirdSection/fivePoints.png";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import mobileView from "../../../ASSETS/IMG/homepage/playStore/mobileApp.png";
import playStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import "./ThreePart.css";
import { Link } from "react-router-dom";

export function ThreePart() {
  return (
    <div className="three-part-container">
      <div>
        <img src={fivePoints} alt="five points about dainik school" />
      </div>
      <div className="text-on-design">
        <div>
          <h3>Student</h3>
          <p>Affordable for every student</p>
        </div>
        <div>
          <h3>Faculty</h3>
          <p>Experienced faculty</p>
        </div>
        <div>
          <h3>Teaching</h3>
          <p>Teach from basic to advance</p>
        </div>
        <div>
          <h3>Classes</h3>
          <p>Theory & practical classes of all chapters</p>
        </div>
        <div>
          <h3>Board</h3>
          <p>Courses designed according to CBSE and State Board</p>
        </div>
      </div>
      <div>
        <img src={mobileView} alt="mobile app view" />
        <Link to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool&pli=1">
          <div className="mobile-app-icon">
            <img src={playStore} alt="playstore" />
          </div>
        </Link>
      </div>
    </div>
  );
}
