import React from "react";
import { BiBookReader } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import "./LiveCourseBox.css";
import { Link } from "react-router-dom";

export const LiveCourseBox = ({ props }) => {
  return (
    <div className="live-course-box-container">
      <div className="live-top-section">
        <div>
          <div className="live-title">{props.title}</div>
          <div className="live-highlights">{props.highlights}</div>
          <div className="live-description">{props.description}</div>
        </div>
        <div>
          <img src={props.imgSrc} alt="" className="instructor-img" />
        </div>
      </div>
      <div className="live-middle-section">
        <Link to="/student-registration" className="btn btn-success">
          Book Seat
        </Link>
        <Link
          to="https://nrichlearning.com/auth/login"
          className="btn btn-success"
        >
          Join Now
        </Link>
      </div>
      <div className="live-bottom-section">
        <div>
          <BiBookReader />
          <span>{props.subject}</span>
        </div>
        <div>
          <FaUserGraduate />
          <span>{props.class}</span>
        </div>
        <div>
          <MdDateRange />
          <span>{props.date}</span>
        </div>
        <div>
          <FcOvertime />
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  );
};
