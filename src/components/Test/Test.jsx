import React from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import "./Test.css";

export const Test = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Test" }} />
      <Footer />
    </div>
  );
};
