import React from "react";
import "./About.css";
import First_img from "../../ASSETS/IMG/About/FIRST_IMG.png";
import { ContactUs } from "../Contact/ContactUs";

export const About = () => {
  return (
    <>
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-container">
        <p>
          Dainik School is a one stop ed-tech platform whose endeavour is to
          provide core competency and adroitness to students of class 6th to
          12th through our brief but comprehensive recorded lectures, weekly
          live doubt sessions, exclusive telegram doubt chat groups, test series
          etc. Which is taken by our well accomplished and amiable faculties.
        </p>
        <img src={First_img} alt="About us" />
      </div>
      <ContactUs />
      {/* <Link to="/contact-us">
        <button className="contact-btn">Contact Us</button>
      </Link> */}
      {/* <Footer /> */}
    </>
  );
};
