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
          <Link to="/classes">Live Classes</Link>
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
      <div>
        <h3>Follow Us</h3>
        <div className="footer-vertical align-left footer-links social-icons">
          <div className="footer-social-link">
            <FaInstagram />
            <a href="https://www.instagram.com/dainikschool_/">Instagram</a>
          </div>
          <div className="footer-social-link">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/dainik-school-9597ba250/">
              Linked In
            </a>
          </div>
          <div className="footer-social-link">
            <FaYoutube />
            <a href="https://www.youtube.com/channel/UC7PltYNgy8cWQKoz6NIZBgg">
              Youtube
            </a>
          </div>
          <div className="footer-social-link">
            <FaFacebook />
            <a href="https://www.facebook.com/profile.php?id=100087391771846">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
