import React from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";

export const AboutUs = () => {
  return (
    <div>
      <CustomHeader props={{ title: "About us" }} />
      <div className="about-container">
        <div>
          <h2>About Dainik School</h2>
          Dainik School is a one stop ed-tech platform whose endeavour is to
          provide core competency and adroitness to students of class 6th to
          12th through our brief but comprehensive recorded lectures, weekly
          live doubt sessions, exclusive telegram doubt chat groups, test series
          etc. which is taken by our well accomplished and amiable faculties.
        </div>
      </div>
      <div className="about-container">
        <div>
          <h2>Our Focus Areas</h2>
          Dainik School’s vision is to make the learning experience affordable
          and knowledgeable for all students. We are here to make firm study
          foundation of every student by providing English, Mathematics,
          Physics, Chemistry and Biology specialized &amp; profound Knowledge
          which is necessary for further professional studies of students.
        </div>
      </div>
      <div className="about-container">
        <div>
          <h2>What Makes Us Different</h2>
          Dainik School strives to develop an extensive academic structure for
          students. We provide lectures and study materials for CBSE as well as
          for other state boards like HBSE etc. Apart from CBSE &amp; state
          boards, we will also focus on NIOS exclusive study materials and
          lectures as we all know NIOS Students get least resources for their
          studies. So, Our mentors will always be there to support all the
          students.
        </div>
      </div>
      <div className="about-container">
        <div>
          <h2> Objective:- कहीं भी कभी भी</h2>
          Children no longer need to go outside of home to study tuition. The
          aim of “Dainik School” is to teach tuition at home by saving
          children’s time and parents money.
        </div>
      </div>
      <div className="about-container">
        <div>
          <h2> What are we trying to solve ?</h2>
          We ourselves belongs to backward and rural areas, that’s why we have
          experienced that students don’t have a good tuition facility in
          villages and the talent of the children is also suppressed. Due to
          limited resources, security and financial issue; Parents have fear of
          sending their child far from village for tuition. Thus, We are trying
          to solve this major problem through Dainik school website and app. It
          will be possible only if the parents and their children will
          co-operate with us. The founder of “Dainik school” stands for
          education of every child irrespective of their economic condition.
        </div>
      </div>
      <div className="about-container">
        <div>
          The new era of online education is best platform for students and
          Dainik School provides a world full of learning for students. Benefits
          of online education Increased students interaction Student centered
          Cost effective Flexibility Online documentation Accessible 24*7 The
          education sector has undergone drastic transformation in recent times.
          Online education is not limited up to classroom its whole world to
          learn and online education provides better learning vision to
          students. Welcome to the world of Dainik School.
        </div>
      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};
