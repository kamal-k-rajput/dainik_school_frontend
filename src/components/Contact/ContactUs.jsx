import React from "react";
import { Footer } from "../Footer/Footer";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <div>
          <img
            src="https://www.oll.co/assets/images/learningMore3.png"
            alt="contact us"
          />
        </div>
        <div className="contact-container">
          <span>CONNECT WITH US</span>
          <span> DISTRICT HISAR</span>
          <span>HARYANA PIN - 125004</span>
          <a href="tel:97290 98866">+91 97290 98866</a>
          <a href="mailto:info@dainikschool.com">info@dainikschool.com</a>
        </div>
      </div>
      <h3>We are happy to serve you.</h3>
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
    </>
  );
};
