import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav-container">
      <nav className="logo">
        <img
          src={Logo}
          alt="dainik school logo"
          className="dainik_school_logo"
        />
      </nav>
      <ul>
        <Link to="/">Home </Link>
        <Link to="courses">Courses</Link>
        <Link to="academics">Academics</Link>
        <Link to="contacts">Contact</Link>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        <Link to="newsAndBlogs">News & Blog</Link>
        <Link to="Aboutus">About Us</Link>
      </ul>
    </nav>
  );
};
