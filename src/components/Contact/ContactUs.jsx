import React from "react";
import { Footer } from "../Footer/Footer";
import { Map } from "../Map/Map";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <div>
          <h3>Connect With Us</h3>
          <p>VPO TOKAS DISTRICT HISAR</p>
          <p>HARYANA PIN - 125004</p>
          <p>+91 97290 98866</p>
        </div>
        {/* <div>
          <h3>Connect With Us</h3>
          <p>Kachora Road</p>
          <p>Etwah Uttar Pradesh 206001</p>
          <p>
            <b>Under Construction</b>
          </p>
        </div> */}
      </div>
      <h3>We are happy to serve you.</h3>
      <div className="map">
        <Map props={{ height: "350px" }} />
      </div>
      <Footer />
    </>
  );
};
