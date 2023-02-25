import React from "react";
import { VerticalCards } from "../../Tools/Cards/VerticalCards";
import instructor from "../../../ASSETS/IMG/homepage/Instructor/instructor.jpg";
import shivam from "../../../ASSETS/IMG/homepage/Instructor/shivam.jpg";
import team from "../../../ASSETS/IMG/homepage/Instructor/team.jpg";
import "./WhatsMore.css";

export const WhatsMore = () => {
  return (
    <div className="whats-more-container">
      <VerticalCards
        cardProps={{
          img: instructor,
          title: "Dainik School Learners Community",
          text: "",
          buttonLabel: "Become a Learner",
        }}
      />
      <VerticalCards
        cardProps={{
          img: shivam,
          title: "Share Your Expertise",
          text: "",
          buttonLabel: "Become a Educator",
        }}
      />
      <VerticalCards
        cardProps={{
          img: team,
          title: "Opportunities at Dainik School",
          text: "",
          buttonLabel: "Join the team",
        }}
      />
    </div>
  );
};
