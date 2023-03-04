import React from "react";
import { Footer } from "../Footer/Footer";
import "./Privacy.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
export const PracticePaper = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine />
      <CustomHeader props={{ title: "Practice Paper" }}></CustomHeader>
      <Footer />
    </div>
  );
};
