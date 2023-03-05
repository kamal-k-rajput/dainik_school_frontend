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
      <HorizoantalLine className="first-hr-line" />
      <div className="first-section">
        <div>
          <p>DainikSchool is a home school E-learning</p>
          <p>plateform for students from Nursery to grade 12.</p>
        </div>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-50" src={boy} alt="First slide" />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={boy2} alt="Second slide" />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                x
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={boy3} alt="Third slide" />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                <p>
                  {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};
