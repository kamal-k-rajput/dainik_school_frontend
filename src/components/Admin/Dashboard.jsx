import React from "react";
import "./AdminDashboard.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Admin Dashboard" }} />
      <div className="admin-btn-container">
        <button className="btn btn-success">Create a live Class</button>
        <Link to="/create-course" className="btn btn-success">
          Create a Course
        </Link>
        <Link to="/get-all-course" className="btn btn-success">
          Get all Course
        </Link>
        <button className="btn btn-success">Add a teacher</button>
        <button className="btn btn-success"> Add a blog</button>
        <Link to="/students" className="btn btn-success">
          {" "}
          Students list
        </Link>
        <button className="btn btn-success">Teacher list</button>
        <Link to="/applied-teacher" className="btn btn-success">
          Applied Teacher
        </Link>
        <button className="btn btn-success">Upload Video</button>
        <button className="btn btn-success">PROFILE</button>
      </div>
      <Footer />
    </>
  );
};
