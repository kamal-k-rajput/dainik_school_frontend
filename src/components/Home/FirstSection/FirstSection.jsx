import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import boy from "../../../ASSETS/IMG/homepage/FirstSection/vaidic_maths.jpg";
import english from "../../../ASSETS/IMG/homepage/FirstSection/english.jpg";
import boy3 from "../../../ASSETS/IMG/homepage/FirstSection/boy.jpg";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import { Gap } from "../../Tools/Gap";
import "./FirstSection.css";
import { Link } from "react-router-dom";
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
          <p>
            Dainik School is a home school E-learning platform for students from
            Nursery to Grade 12.
          </p>
          <div className="btn-parent">
            <p>
              Now Children no longer need to go outside of home to study
              tuition. The aim of “Dainik School” is to teach tuition at home by
              saving children’s time and parents money.
            </p>
            <div className="two-btn-container">
              <Link to="/login" className="btn btn-success gradient-btn">
                Login{" "}
              </Link>
              <Link
                to="/student-registration"
                className="btn btn-success gradient-btn"
              >
                Enroll
              </Link>
            </div>
            <div className="two-btn-container">
              <Link to="/test" className="btn btn-success gradient-btn">
                Test{" "}
              </Link>
              <Link to="/quiz" className="btn btn-success gradient-btn">
                Quiz
              </Link>
            </div>
            <div>
              <Link to="/apply-now" className="btn btn-success gradient-btn">
                Join our team
              </Link>
            </div>
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
              <img className="d-block w-50" src={boy3} alt="Second slide" />

              <Carousel.Caption>
                <span>Science</span>
                {/* <p>Nulla vitae elit libero</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={english} alt="Third slide" />

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
