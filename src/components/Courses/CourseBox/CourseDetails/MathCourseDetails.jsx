import React from "react";
import { YoutubeVideo } from "../../../Tools/YoutubeVideo";
import { Gap } from "../../../Tools/Gap";
import { CustomHeader } from "../../../Tools/CustomHeader";
import { Footer } from "../../../Footer/Footer";
import "./Customcss.css"

export const MathCourseDetails = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Trial video for maths" }} />
      <YoutubeVideo
        props={{
          title:
            "Comparison: Greater than | Less than | Equal to || learning for kids",
          link: "h_CbOXxxhlo",
        }}
      />
      <YoutubeVideo
        props={{
          title: "Addition and Subtraction | Learn Addition | Substraction",
          link: "LTWHMDY0iSE",
        }}
      />
      <button className="btn btn-success buy-btn">Buy Complete Course</button>
      <Footer />
    </div>
  );
};
