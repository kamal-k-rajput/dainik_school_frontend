import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="ft-main-container">
      <footer className="footer-container align-left ">
        <div>
          <h3 className="useful-links">About Dainik School</h3>
          <div className="footer-vertical align-left footer-links">
            <Link to="/about">About us</Link>
            {/* <Link to="/feedback">Feedback</Link> */}
            <Link to="/contact-us">Contact us</Link>
            <Link to="/news-and-blogs">News and Blogs</Link>
            <Link to="/">Site Maps</Link>
            {/* <Link to="/Instructor">Instructor</Link>
          <Link to="/Courses">Courses </Link> */}
          </div>
        </div>
        <div>
          <h3>Courses</h3>
          <div className="footer-vertical align-left footer-links">
            <Link to="/courses"> Courses</Link>
            <Link to="/live-classes">Live Classes</Link>
            <Link to="/free-courses"> Free Courses</Link>
            {/* <Link to="/Privacy-Policy">Terms &amp; Conditions</Link> */}
          </div>
        </div>
        <div>
          <h3>Educator</h3>
          <div className="footer-vertical align-left footer-links">
            <Link to="/apply-now"> Apply Now</Link>
            <Link to="/Help">Educator Policy</Link>
          </div>
        </div>
      </footer>
      <div className="ft-social">
        <h3>To know more about us and what we offer, follow us on:</h3>
        <div className="footer-horizoantal align-left footer-links social-icons">
          <div className="footer-social-link">
            <a href="https://www.instagram.com/dainikschool_/">
              <FaInstagram />
            </a>
          </div>
          <div className="footer-social-link">
            <a href="https://www.linkedin.com/in/dainik-school-9597ba250/">
              <FaLinkedin />
            </a>
          </div>
          <div className="footer-social-link">
            <a href="https://www.youtube.com/channel/UC7PltYNgy8cWQKoz6NIZBgg">
              <FaYoutube />
            </a>
          </div>
          <div className="footer-social-link">
            <a href="https://www.facebook.com/profile.php?id=100087391771846">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright-text">
        ©2022. Dainik School Digital Private Ltd. All Rights Reserved.
      </p>
    </div>
  );
};
