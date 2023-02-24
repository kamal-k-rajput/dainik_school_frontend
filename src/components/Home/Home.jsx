import React from "react";
import { Footer } from "../Footer/Footer";
import second from "../../ASSETS/IMG/homepage/Final.1.png";
import Levels from "./Levels/Levels";
import { Link } from "react-router-dom";
import { MiddleLargeSection } from "./MiddleLargeSection/MiddleLargeSection";
import { TextSection } from "./TextSection/TextSection";
import { FirstSection } from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThreeBox from "./ThreeBox/ThreeBox";
import CourseSection from "./CourseSection/CourseSection";
import investMore from "../../ASSETS/IMG/homepage/investMore.png";
import fivePoints from "../../ASSETS/IMG/homepage/ThirdSection/fivePoints.png";
import playschool from "../../ASSETS/IMG/homepage/MiddleLargeSection/Artwork1.png";
import juniorClass from "../../ASSETS/IMG/homepage/MiddleLargeSection/eclass.png";
import "./Home.css";

export const Home = () => {
  function clicked() {
    console.log("clicked");
  }
  return (
    <div className="home_container">
      <FirstSection />
      <SecondSection />
      <div className="home-img-text">
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
      </div>
      <p>We help to learn you grow faster.</p>
      <ThreeBox />
      <Levels />
      <div>
        <Link to="/register">
          <button className="mid-btn">ENROLL </button>
        </Link>
        <button className="mid-btn">ASK YOUR DOUBTS</button>
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

      <h1>Why choose us ?</h1>
      <div className="text-on-img-container">
        <div className="text-on-design">
          <div>
            <p>Why </p>
            <p>dainik</p>
            <p>school ?</p>
          </div>
          <div>
            <div>
              <h3>Student</h3>
              <p>Affordable for every student</p>
            </div>
            <div>
              <h3>Faculty</h3>
              <p>Experienced faculty</p>
            </div>
            <div>
              <h3>Teaching</h3>
              <p>Teach from basic to advance</p>
            </div>
            <div>
              <h3>Classes</h3>
              <p>Theory & practical classes of all chapters</p>
            </div>
            <div>
              <h3>Board</h3>
              <p>Courses designed according to CBSE and State Board</p>
            </div>
          </div>
        </div>
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
      </div>

      <div className="hm-full-size-section">
        <div>
          <p>Dainik School</p>
          <p>
            "Education is the most powerful weapon you can use to change the
            world."
          </p>
        </div>
        <div>
          <p>INVEST MORE</p>
          <p>New Knowledge</p>
        </div>
      </div>
      <CourseSection
        props={{
          img: playschool,
          title: "Class LKG - 3",
          text: `Dainik School's vision is to make the learning experience 
          affordable and knowledgeable for all students. We are here to make firm. Study foundation
           of every student by providing English, Mathematics,
            Physics, Chemistry and Biology specialized & profound 
          Knowledge which is necessary for further professional studies of students
              `,
          buttonLabel: "Explore",
        }}
      />
      <CourseSection
        props={{
          img: juniorClass,
          title: "Class 4 - 12",
          text: `Education is the most powerful weapon you can use to change the world.
              `,
          buttonLabel: "Explore",
        }}
      />
      <Footer />
      <p>©2022. Dainik School All Rights Reserved.</p>
    </div>
  );
};
