import React from "react";
import "./TextSection.css";
import { BsArrow90DegRight } from "react-icons/bs";
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
        <div>
          <div>
            <p>Pursue your passion and you'll never work a day in your life</p>
            <p>@dainikschool</p>
          </div>
        </div>
      </div>
    </div>
  );
};
