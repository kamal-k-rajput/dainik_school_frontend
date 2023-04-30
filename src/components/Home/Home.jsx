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
import { FirstSectionMiddleHeading } from "./utils/FirstSectionMiddleHeading";
import { YoutubeVideo } from "../Tools/YoutubeVideo";

export const Home = () => {
  return (
    <div className="home_container">
      <FirstSection />
      <HorizoantalLine />
      <FirstSectionMiddleHeading props={{ title: "*Get Registered" }} />
      <SecondSection />
      <FirstSectionMiddleHeading props={{ title: "*Latest Courses" }} />
      <DisplayCourses />
      <DisplayCourses2 />
      <FirstSectionMiddleHeading props={{ title: "*Objectives" }} />
      <ThreePart />
      <TextSection />
      <ThreeBox />
      <Levels />
      <WhatsMore />
      <YoutubeVideo
        props={{
          link: "lkq_kx_NiU8",
          title:
            "The Wonders of Space: Discovering Our Universe | Dainik School",
        }}
      />
      <BlogSection />
      <Footer />
    </div>
  );
};
