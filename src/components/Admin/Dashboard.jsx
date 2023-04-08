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
        <Link to="/create-live-class" className="btn btn-success">
          Create a live Class
        </Link>
        <Link to="/create-course" className="btn btn-success">
          Create a Course
        </Link>
        <button className="btn btn-success">Add a teacher</button>
        <Link to="/create-blog" className="btn btn-success">
          {" "}
          Add a blog
        </Link>
        <Link to="/student-list" className="btn btn-success">
          {" "}
          Students list
        </Link>
        <Link to="/teacher-list" className="btn btn-success">
          Teacher list
        </Link>
        <Link to="/applied-teacher-list" className="btn btn-success">
          Applied Teacher
        </Link>
        <Link to="/upload-video" className="btn btn-success">
          Upload Video
        </Link>
        <button className="btn btn-success">PROFILE</button>
      </div>
      <Footer />
    </>
  );
};
