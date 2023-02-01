import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ASSETS/IMG/Logo/logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="ft-container">
      <div className="logo">
        <img src={Logo} alt="" className="dainik_school_logo" />
        <p>VPO TOKAS DISTRICT HISAR, HARYANA PIN - 125004</p>
      </div>
      <div>
        <h3>Dainik School</h3>
        <ul>
          <Link to="About">About</Link>
          <Link to="courses">Courses</Link>
          <Link to="instructor">Instructor</Link>
          <Link to="student">Student</Link>
        </ul>
      </div>
      <div>
        <h3>Community</h3>
        <ul>
          <Link to="newsAndBlogs">News and Blogs</Link>
          <Link to="contacts">Contact</Link>
          <Link to="Privacy-Policy">Term and Conditions</Link>
          <Link to="account">Account</Link>
        </ul>
      </div>
      <div>
        <h3>Subscribe now</h3>
        <ul>
          <p>Don’t miss our future updates! Get Subscribed Today!</p>
          <li>
            <input
              type="email"
              placeholder="Enter your email address."
              className="input_box_email"
            />
            <button>SUBMIT</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};
