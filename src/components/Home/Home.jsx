import React from "react";
import WelcomeIMG from "../../ASSETS/IMG/homepage/welcome.png";
import { Footer } from "../Footer/Footer";
import DainikSchoolVision from "../../ASSETS/IMG/homepage/dainik_school_vision.png";
import LearningTemplate from "../../ASSETS/IMG/homepage/learning_template.png";
import Pink_home_img from "../../ASSETS/IMG/homepage/pink_home_img.png";
import Blue_home_img from "../../ASSETS/IMG/homepage/blue_home_img.png";
import Taupe_Organic from "../../ASSETS/IMG/homepage/Taupe-Organic.png";
import Yellow_marketingStrategy from "../../ASSETS/IMG/homepage/Yellow-Social-Media-Marketing-Fundamentals-Diagram-Instagram-Post.png";
import Why_we_better from "../../ASSETS/IMG/homepage/Public-sans-bold.png";
import Playful_Modern_Design from "../../ASSETS/IMG/homepage/Playful-Modern-Design-for-Microblog-Education-Instagram-Post-2.png";
import invest_more from "../../ASSETS/IMG/homepage/Cream-Pastel-Cute-Education-Quote-Instagram-Post.png";
import "./Home.css";

export const Home = () => {
  function clicked() {
    console.log("clicked");
  }
  return (
    <div className="home_container">
      <img src={WelcomeIMG} alt="Welcome" className="full-size-img" />
      {/* <Button
        props={{ label: "Start Now", onClick: clicked }}
        onClick={(e) => {
          e.preventDefault();
          console.log("button start now clicked");
        }}
      /> */}

      <div>
        <button className="mid-btn">START NOW </button>
        <button className="mid-btn">ASK YOUR DOUBTS</button>
      </div>
      <img
        src={DainikSchoolVision}
        alt="Dainik school vision"
        className="full-size-img"
      />
      <img
        src={LearningTemplate}
        alt="Dainik school vision"
        className="full-size-img"
      />
      <div className="full-width-img-container">
        <img
          src={Pink_home_img}
          alt="dainik school"
          className="half-size-img"
        />

        <img
          src={Blue_home_img}
          alt="dainik school "
          className="half-size-img"
        />
      </div>
      <img src={Taupe_Organic} alt="Welcome" className="full-size-img" />
      <section>
        <h2>Why Choose us ?</h2>
        <div className="full-width-img-container">
          <img
            src={Yellow_marketingStrategy}
            alt="dainik school"
            className="full-size-img"
          />
          <img src={Why_we_better} alt="Welcome" className="full-size-img" />
        </div>
        <div className="full-width-img-container">
          <img
            src={Playful_Modern_Design}
            alt="dainik school"
            className="full-size-img"
          />
          <img src={invest_more} alt="Welcome" className="full-size-img" />
        </div>
        <div className="div_full_width_three_image"></div>
      </section>
      <Footer />
      <p>©2022. Dainik School All Rights Reserved.</p>
    </div>
  );
};
