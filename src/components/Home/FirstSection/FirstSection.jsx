import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import boy from "../../../ASSETS/IMG/homepage/FirstSection/boy.jpg";
import boy2 from "../../../ASSETS/IMG/homepage/FirstSection/boy2.jpg";
import boy3 from "../../../ASSETS/IMG/homepage/FirstSection/boy3.jpg";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import { Gap } from "../../Tools/Gap";
import "./FirstSection.css";
export const FirstSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Gap />
      <HorizoantalLine className="first-hr-line" />
      <div className="first-section">
        <div>
          <p>DainikSchool is a home school E-learning</p>
          <p>plateform for students from Nursery to Grade 12.</p>
          <div className="btn-parent">
            <p>
              Children no longer need to go outside of home to study tuition.
              The aim of “Dainik School” is to teach tuition at home by saving
              children’s time and parents money.
            </p>
            <button className="btn btn-success gradient-btn">Login </button>
            <button className="btn btn-success gradient-btn">Register</button>
          </div>
        </div>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-50" src={boy} alt="First slide" />
              <Carousel.Caption>
                <span>Vedic Maths</span>
                {/* <p>Nulla vitae elit liber.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={boy2} alt="Second slide" />

              <Carousel.Caption>
                <span>Science</span>
                {/* <p>Nulla vitae elit libero</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={boy3} alt="Third slide" />

              <Carousel.Caption>
                <span>English</span>
                {/* <p>Nulla vitae elit libero.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};
