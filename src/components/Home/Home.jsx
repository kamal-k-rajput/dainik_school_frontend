import React from "react";
import { Footer } from "../Footer/Footer";
import Levels from "./Levels/Levels";
import { FirstSection } from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThreeBox from "./ThreeBox/ThreeBox";
import { WhatsMore } from "./WhatsMore/WhatsMore";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { DisplayCourses } from "./DisplayCourses/DisplayCourses";
import { ThreePart } from "./ThreePart/ThreePart";
import "./Home.css";
import { Gap } from "../Tools/Gap";
import { DisplayCourses2 } from "./DisplayCourses/DisplayCourses2";

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
      <DisplayCourses2 />
      <ThreePart />
      <ThreeBox />
      <Levels />
      <WhatsMore />
      <Footer />
    </div>
  );
};
