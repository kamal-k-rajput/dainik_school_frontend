import React from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import "./Quiz.css";

export const Quiz = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Quiz" }} />
      <Footer />
    </div>
  );
};
