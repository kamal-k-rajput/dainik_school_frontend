import React from "react";
import "./Faculty.css";
import { WhatsMore } from "../Home/WhatsMore/WhatsMore";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import praveen from "../../ASSETS/IMG/homepage/Instructor/instructor.jpg";
import dkgupta from "../../ASSETS/IMG/homepage/Instructor/dkgupta.jpeg";
import vandna from "../../ASSETS/IMG/homepage/Instructor/vandna.jpg";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
import { VerticalCards } from "../Tools/Cards/VerticalCards";

export const Faculty = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine></HorizoantalLine>
      <CustomHeader props={{ title: "Our Team" }}></CustomHeader>
      <div className="whats-more-container">
        <VerticalCards
          cardProps={{
            img: praveen,
            title: "Parveen",
            text: "Biology Faculty",
            buttonLabel: "",
            link: "/courses",
          }}
        />
        <VerticalCards
          cardProps={{
            img: vandna,
            title: "Vandna Gupta",
            text: "English Faculty || IELTS Trainer",
            buttonLabel: "",
            link: "/course",
          }}
        />
        <VerticalCards
          cardProps={{
            img: dkgupta,
            title: "D.K. Gupta ",
            text: "Chemistry NEET/IIT",
            buttonLabel: "",
            link: "/course",
          }}
        />
      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};
