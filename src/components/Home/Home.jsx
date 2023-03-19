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
import { DisplayCourses2 } from "./DisplayCourses/DisplayCourses2";
import { TextSection } from "./TextSection/TextSection";
import { BlogSection } from "./BlogSection/BlogSection";

export const Home = () => {
  return (
    <div className="home_container">
      <FirstSection />
      <HorizoantalLine />
      <SecondSection />
      <DisplayCourses />
      <DisplayCourses2 />
      <ThreePart />
      <TextSection />
      <ThreeBox />
      <Levels />
      <WhatsMore />
      <BlogSection />
      <Footer />
    </div>
  );
};
