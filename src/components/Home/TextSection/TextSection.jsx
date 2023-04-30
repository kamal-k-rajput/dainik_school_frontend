import React from "react";

import { Link } from "react-router-dom";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import playStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import mobileView from "../../../ASSETS/IMG/homepage/playStore/mobileApp.png";
import "./TextSection.css";

export const TextSection = () => {
  return (
    <div className="hm-text-section">
      <div className="text-section-right">
        <img src={mobileView} alt="mobile app view" />
        <Link to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool&pli=1"></Link>
      </div>
      <div className="text-section-left">
        <div>
          <p className="download-heading">
            Download Dainik School <span className="">Online Tuition</span> App
          </p>
          <p className="app-desc">
            The education sector has undergone drastic transformation is recent
            times The new era of online education is best platform for students
            and Dainik school furnish a world full of learning for cream child
            to grab and accomplish every sparkling opportunity.
          </p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <Link to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool">
            <div className="mobile-app-icon">
              <img src={appleStore} alt="playstore" />
              <img src={playStore} alt="playstore" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
