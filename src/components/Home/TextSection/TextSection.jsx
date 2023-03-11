import React from "react";
import { Link } from "react-router-dom";
import { BsArrow90DegRight } from "react-icons/bs";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import playStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import mobileView from "../../../ASSETS/IMG/homepage/playStore/mobileApp.png";
import "./TextSection.css";

export const TextSection = () => {
  return (
    <div className="hm-text-section">
      <div className="text-section-left">
        <div>
          <p>Learn How to Grow</p>
        </div>
        <div className="hm-vision-list">
          {" "}
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <BsArrow90DegRight />
                </td>
                <td>Visit to dainikschool.com</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BsArrow90DegRight />
                </td>
                <td>Choose Your Ideal Career</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BsArrow90DegRight />
                </td>
                <td>Register as student</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BsArrow90DegRight />
                </td>
                <td>Pay for a course or Specialization</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BsArrow90DegRight />
                </td>
                <td>Grow your career</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-section-right">
          <img src={mobileView} alt="mobile app view" />
          <Link to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool&pli=1">
            <div className="mobile-app-icon">
              <img src={playStore} alt="playstore" />
              <img src={appleStore} alt="playstore" />
            </div>
          </Link>
      </div>
    </div>
  );
};
