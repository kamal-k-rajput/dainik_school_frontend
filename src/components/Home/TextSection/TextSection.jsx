import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import googleplayStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import mobileApp from "../../../ASSETS/IMG/homepage/playStore/mobileApp.png";
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
        <img src={mobileApp} alt="Mobile app" />
        <div>
          <img src={googleplayStore} alt="google play store" />
          <img src={appleStore} alt="app appstore" />
        </div>
      </div>
    </div>
  );
};
