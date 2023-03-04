import React from "react";
import { Footer } from "../Footer/Footer";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import indiaMap from "../../ASSETS/IMG/ContactUs/IndiaMap.png";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import "./ContactUs.css";
import { MoveToTop } from "../Tools/MoveToTop";

export const ContactUs = () => {
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Contact Us" }} />
      <div className="contact-us">
        <div>
          <img src={indiaMap} alt="india map" />
        </div>
        <div className="contact-container">
          <span className="heading">CONTACT US</span>
          <span> DISTRICT HISAR</span>
          <span>HARYANA PIN - 125004</span>
          <a href="tel:97290 98866">+91 97290 98866</a>
          <a href="mailto:info@dainikschool.com">info@dainikschool.com</a>
        </div>
      </div>
      {/* <div className="contact-us-form-container">
        <form action="/" className="contact-us-form">
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" name="" placeholder="Email" />
          <input type="number" name="" placeholder="Mobile number" />
          <input type="text" name="" placeholder="Your question" />
          <input type="submit" value="SUBMIT" />
        </form>
      </div> */}
      <Footer />
      <MoveToTop />
    </>
  );
};
