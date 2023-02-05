import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ASSETS/IMG/Logo/logo.png";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    // <footer className="ft-container">
    //   <div className="logo">
    //     <img src={Logo} alt="" className="dainik_school_logo" />
    //     <p>VPO TOKAS DISTRICT HISAR, HARYANA PIN - 125004</p>
    //   </div>
    //   <div>
    //     <h3>Dainik School</h3>
    //     <ul>
    //       <Link to="About">About</Link>
    //       <Link to="courses">Courses</Link>
    //       <Link to="instructor">Instructor</Link>
    //       <Link to="student">Student</Link>
    //     </ul>
    //   </div>
    //   <div>
    //     <h3>Community</h3>
    //     <ul>
    //       <Link to="news-and-blogs">News and Blogs</Link>
    //       <Link to="contacts">Contact</Link>
    //       <Link to="Privacy-Policy">Term and Conditions</Link>
    //       <Link to="account">Account</Link>
    //     </ul>
    //   </div>
    //   <div>
    //     <h3>Subscribe Now</h3>
    //     <ul>
    //       <p>Don’t miss our future updates! Get Subscribed Today!</p>
    //       <li>
    //         <input
    //           type="email"
    //           placeholder="Enter your email address."
    //           className="input_box_email"
    //         />
    //         <button>SUBMIT</button>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
    <footer className="footer-container align-left ">
      <div>
        <h3>Address</h3>
        <p>VPO TOKAS DISTRICT HISAR</p>
        <p> HARYANA PIN - 125004</p>
        <p>
          <span>
            <FaPhoneAlt style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a href="tel:97290 98866">+91 97290 98866</a>
          </span>
          {/* <span>
            <FaPhoneAlt style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a href="tel:9170597957">9634946398</a>
          </span> */}
        </p>
        <p>
          {/* <MdMailOutline /> */}
          <a href="mailto: dainikschool@gmail.com">dainikschool@gmail.com</a>
        </p>
      </div>
      <div>{/* <Map props={{ height: "200px" }} /> */}</div>
      <div>
        <h3 className="useful-links">Useful Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="feedback">Feedback</Link>
          <Link to="contact">Contact</Link>
          <Link to="about">About</Link>
          <Link to="Instructor">Instructor</Link>
          <Link to="Courses">Courses </Link>
        </div>
      </div>
      <div>
        <h3>Quik Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="Privacy-Policy">Terms &amp; Conditions</Link>
          <Link to="news-and-blogs">News and Blogs</Link>
          <Link to="account"> Account</Link>
          <Link to="Gallery">Gallery</Link>
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="footer-vertical align-left footer-links social-icons">
          <div className="footer-social-link">
            <FaInstagram />
            <a href="https://www.instagram.com//">Instagram</a>
          </div>
          <div className="footer-social-link">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in//">Linked In</a>
          </div>
          <div className="footer-social-link">
            <FaTwitter />
            <a href="https://twitter.com/">Twitter</a>
          </div>
          <div className="footer-social-link">
            <FaFacebook />
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
