import React from "react";
import "./About.css";
import { TextSection } from "../Home/TextSection/TextSection";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";

export const About = () => {
  return (
    <>
      <Gap></Gap>
      {/* <CustomHeader props={{ title: "About Us" }}></CustomHeader> */}
      <div className="about-container">
        <p>
          <h2>About Dainik School</h2>
          Dainik School is a one stop ed-tech platform whose endeavour is to
          provide core competency and adroitness to students of class 6 th to 12
          th through our brief but comprehensive recorded lectures, weekly live
          doubt sessions, exclusive telegram doubt chat groups, test series etc.
          Which is taken by our well accomplished and amiable faculties.
        </p>
      </div>
      <div className="about-container">
        <p>
          <h2>Our Focus Areas</h2>
          Dainik School’s vision is to make the learning experience affordable
          and knowledgeable for all students. We are here to make firm. Study
          foundation of every student by providing English, Mathematics,
          Physics, Chemistry and Biology specialized &amp; profound Knowledge
          which is necessary for further professional studies of students.
        </p>
      </div>
      <div className="about-container">
        <p>
          <h2>What Makes Us Different</h2>
          Dainik School strives to develop an extensive academic Structure for
          students. We provide lectures and study materials for CBSE as well as
          for other state boards like HBSE etc. Apart from CBSE &amp; state
          boards, we will also focus on NIOS exclusive study materials and
          lectures as we all know NIOS Students get least resources for their
          studies. So, Our mentors will always be there to support all the
          students.
        </p>
      </div>
      <div className="about-container">
        <p>
          <h2> Objective:- कहीं भी कभी भी</h2>
          Children no longer need to go outside of home to study tuition. The
          aim of “Dainik School” is to teach tuition at home by saving
          children’s time and parents money.
        </p>
      </div>
      <div className="about-container">
        <p>
          <h2> What are we trying to solve :-</h2>
          We ourselves live in rural area, so we have impression that children
          do not have good tuition facility in villages and the talent of the
          children is also suppressed. Parents can not send their children
          outside for tuition due to limited resources and security issue. We
          are trying to solve this big problem through Dainikschool website and
          it will be possible with the co-operation of of parents and children.
          The founder of “Dainik school” stands for education for every child
          irrespective of it’s economic stands.
        </p>
      </div>
      <div className="about-container">
        <p>
          The new era of online education is best platform for students and
          Dainik School provides a world full of learning for students. Benefits
          of online education Increased students interaction Student centered
          Cost effective Flexibility Online documentation Accessible 24*7 The
          education sector has undergone drastic transformation in recent times.
          Online education is not limited up to classroom its whole world to
          learn and online education provides better learning vision to
          students. Welcome to the world of Dainik School.
        </p>
      </div>
      {/* <ContactUs /> */}
      {/* <Link to="/contact-us">
        <button className="contact-btn">Contact Us</button>
      </Link> */}

      {/* <TextSection /> */}
      {/* <Footer /> */}
      <MoveToTop />
    </>
  );
};
