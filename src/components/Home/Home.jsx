import React from "react";
import first from "../../ASSETS/IMG/homepage/first.png";
import { Footer } from "../Footer/Footer";
import second from "../../ASSETS/IMG/homepage/second.jpg";
import LearningTemplate from "../../ASSETS/IMG/homepage/learning_template.png";
import Pink_home_img from "../../ASSETS/IMG/homepage/pink_home_img.png";
import Blue_home_img from "../../ASSETS/IMG/homepage/blue_home_img.png";
import Taupe_Organic from "../../ASSETS/IMG/homepage/Taupe-Organic.png";
import Yellow_marketingStrategy from "../../ASSETS/IMG/homepage/Yellow-Social-Media-Marketing-Fundamentals-Diagram-Instagram-Post.png";
import Why_we_better from "../../ASSETS/IMG/homepage/Public-sans-bold.png";
import Playful_Modern_Design from "../../ASSETS/IMG/homepage/Playful-Modern-Design-for-Microblog-Education-Instagram-Post-2.png";
import invest_more from "../../ASSETS/IMG/homepage/Cream-Pastel-Cute-Education-Quote-Instagram-Post.png";
import Levels from "./Levels/Levels";
import { Link } from "react-router-dom";
import { MiddleLargeSection } from "./MiddleLargeSection/MiddleLargeSection";
import { TextSection } from "./TextSection/TextSection";
import "./Home.css";

export const Home = () => {
  function clicked() {
    console.log("clicked");
  }
  return (
    <div className="home_container">
      <div>
        <div>
          <p>
            <span className="evening"> Evening </span>School With Dainik School
          </p>
        </div>
        <img src={first} alt="dainik school" />
      </div>
      <Levels />
      <div>
        <Link to="/register">
          <button className="mid-btn">ENROLL </button>
        </Link>
        <button className="mid-btn">ASK YOUR DOUBTS</button>
      </div>
      <div className="home-img-text">
        <img
          src={second}
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
      </div>
      <MiddleLargeSection />
      <TextSection />
      <div className="home-img-text">
        <img
          src={second}
          alt="Dainik school vision"
          className="full-size-img"
        />
        <div>
          <p className="hm-img-text">
            Take the next step toward your personal and professional goals with
            Dainik School.
          </p>
          <p>
            Join now to receive personalized recommendations from the full
            dainik school catalog.
          </p>
        </div>
      </div>

      <div className="text-on-img-container">
        <div></div>
        <div>
          <p className="hm-text-on-img">
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
        {/* <div></div>
        <div></div> */}
      </div>
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
