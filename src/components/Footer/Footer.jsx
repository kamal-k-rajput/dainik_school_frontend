import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { About } from "../About/About";

export const Footer = () => {
  return (
    <div className="ft-main-container">
      <footer className="footer-container align-left ">
        <div>
          <h3 className="useful-links">About Us </h3>
          <div className="footer-vertical align-left footer-links">
            <Link to="/about">About us</Link>
            {/* <Link to="/feedback">Feedback</Link> */}
            <Link to="/contact-us">Contact us</Link>
            <Link to="/faculty">Our Team</Link>

            <Link to="/news-and-blogs">News and Blogs</Link>
            <Link to="/">Site Maps</Link>
            <Link to="/Privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/term-of-use">Terms Of Use</Link>
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
            <Link to="/previous-year-question-paper">Previous Paper</Link>
            <Link to="/practice-session">Practice Session</Link>
            <Link to="/library">Library</Link>
          </div>
        </div>
        <div>
          <h3>Educator</h3>
          <div className="footer-vertical align-left footer-links">
            <Link to="/apply-now"> Apply Now</Link>
            <Link to="/educator-policy">Educator Policy</Link>
            <Link to="/admin-dashboard"> Admin Dashboard</Link>

          </div>
        </div>
      </footer>
      <div className="ft-social">
        <h4>To know more about us and what we offer, follow us on:</h4>
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
      <h1>About us</h1>
      <About />
      <p id="copyright-text">
        ©2022. Dainik School Digital Private Ltd. All Rights Reserved.
      </p>
    </div>
  );
};
