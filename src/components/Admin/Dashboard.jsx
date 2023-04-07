import React from "react";
import "./AdminDashboard.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";

export const Dashboard = () => {
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Admin Dashboard" }} />
      <div className="admin-btn-container">
        <button className="btn btn-success">Create a live Class</button>
        <button className="btn btn-success">Create a Course</button>
        <button className="btn btn-success">Add a teacher</button>
        <button className="btn btn-success"> Add a blog</button>
        <button className="btn btn-success"> Students list</button>
        <button className="btn btn-success">Teacher list</button>
        <button className="btn btn-success">Applied Teacher</button>
        <button className="btn btn-success">Upload Video</button>
        <button className="btn btn-success">PROFILE</button>
      </div>
      <Footer />
    </>
  );
};
