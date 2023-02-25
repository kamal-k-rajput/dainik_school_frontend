import React from "react";

import { VerticalCards } from "../../Tools/Cards/VerticalCards";
import "./WhatsMore.css";

export const WhatsMore = () => {
  return (
    <div className="whats-more-container">
      <VerticalCards
        cardProps={{
          title: "Dainik School Learners Community",
          text: "",
          buttonLabel: "Become a Learner",
        }}
      />
      <VerticalCards
        cardProps={{
          title: "Share Your Expertise",
          text: "",
          buttonLabel: "Become a Educator",
        }}
      />
      <VerticalCards
        cardProps={{
          title: "Opportunities at OLL",
          text: "",
          buttonLabel: "Join the team",
        }}
      />
    </div>
  );
};
