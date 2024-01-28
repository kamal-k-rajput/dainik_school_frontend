import React from "react";
import "./SubjectButton.css";
import { Link } from "react-router-dom";
export const SubjectButton = ({ topic }) => {
  console.log(topic);
  return (
    <Link className="topics-btn" to="/courses">
      {topic}
    </Link>
  );
};
