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
      {/* <div>
        <h3>Address</h3>
        <p> DISTRICT HISAR</p>
        <p> HARYANA PIN - 125004</p>
        <p>
          <span>
            <FaPhoneAlt style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a href="tel:97290 98866">+91 97290 98866</a>
          </span>
        </p>
        <p>
          <a href="mailto: info@dainikschool.com">info@dainikschool.com</a>
        </p>
        <p>
          <a href="mailto: dainikschool@gmail.com">dainikschool@gmail.com</a>
        </p>
      </div> */}
      <div>
        <h3 className="useful-links">Useful Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/Instructor">Instructor</Link>
          <Link to="/Courses">Courses </Link>
        </div>
      </div>
      <div>
        <h3>Quick Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="/Privacy-Policy">Terms &amp; Conditions</Link>
          <Link to="/news-and-blogs">News and Blogs</Link>
          <Link to="/account"> Account</Link>
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
