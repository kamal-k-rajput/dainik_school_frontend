import React from "react";
import { VerticalCards } from "../../Tools/Cards/VerticalCards";
import instructor from "../../../ASSETS/IMG/homepage/Instructor/became_a_learner.jpg";
import shivam from "../../../ASSETS/IMG/homepage/Instructor/became_a_educator.jpg";
import team from "../../../ASSETS/IMG/homepage/Instructor/opp_at_dainik_school.jpg";
import "./WhatsMore.css";

export const WhatsMore = () => {
  return (
    <div className="whats-more-container">
      <VerticalCards
        cardProps={{
          img: instructor,
          title: "Dainik School Learners Community",
          text: "Your experience and knowledge can help. Those who are interested in learning and want to achieve their goal.",
          buttonLabel: "Become a Learner",
          link: "/courses",
        }}
      />
      <VerticalCards
        cardProps={{
          img: shivam,
          title: "Share Your Expertise at Dainik School",
          text: "Dainik School is a collaborative community. Where learner come together to share their knowledge, experience and interest.",
          buttonLabel: "Become a Educator",
          link: "/apply-now",
        }}
      />
      <VerticalCards
        cardProps={{
          img: team,
          title: "Opportunities at Dainik School",
          text: "Everyone has different expertise and idea. Dainik School be a valuable platform of your career.",
          buttonLabel: "Join the team",
          link: "/apply-now",
        }}
      />
    </div>
  );
};
