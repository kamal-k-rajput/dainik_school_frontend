import React from "react";
import { Footer } from "../Footer/Footer";
import Levels from "./Levels/Levels";
import { FirstSection } from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThreeBox from "./ThreeBox/ThreeBox";
import fivePoints from "../../ASSETS/IMG/homepage/ThirdSection/fivePoints.png";
import { WhatsMore } from "./WhatsMore/WhatsMore";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { DisplayCourses } from "./DisplayCourses/DisplayCourses";
import { ThreePart } from "./ThreePart/ThreePart";
import "./Home.css";

export const Home = () => {
  function clicked() {
    console.log("clicked");
  }
  return (
    <div className="home_container">
      <FirstSection />
      <HorizoantalLine />
      <SecondSection />
      <HorizoantalLine />
      <DisplayCourses />
      <DisplayCourses />
      <ThreePart />
      {/* <div className="home-img-text">
        <img
          src={fivePoints}
          alt="Dainik school vision"
          className="full-size-img"
        />
        <div>
          <p>Dainik School</p>
          <p>
            Dainik School's vision is to make the learning experience affordable
            and knowledgeable for all students. We are here to make firm. Study
            foundation of every student by providing English, Mathematics,
            Physics, Chemistry and Biology specialized & profound Knowledge
            which is necessary for further professional studies of students.
          </p>
        </div>
      </div> */}
      <ThreeBox />
      <Levels />
      {/* <div>
        <Link to="/register">
          <button className="mid-btn">ENROLL </button>
        </Link>
        <button className="mid-btn">ASK YOUR DOUBTS</button>
      </div> */}

      {/* <div className="why-choose-us">WHY CHOOSE US ?</div> */}
      {/* <div className="text-on-img-container">
        <div>
          <p className="hm-text-on-img">
            <h1>What make us different</h1>
            <ul>
              <li>
                Dainik School strives to develop an extensive academic structure
                for students.
              </li>
              <li>
                We provide lectures and study materials for CBSE as well as for
                other State Boards like HBSE etc.
              </li>
              <li>
                Apart from CBSE & state boards, we also focus on NIOS exclusive
                study materials and lectures as we all know NIOS Students get
                least resources for their studies.
              </li>
              <li>
                So, our mentors will always be there to support all the
                students.
              </li>
            </ul>
          </p>
        </div>
      </div> */}
      <WhatsMore />
      <Footer />
    </div>
  );
};
