import React from "react";
import "./Faculty.css";
import { WhatsMore } from "../Home/WhatsMore/WhatsMore";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "../Tools/CustomHeader";

export const Faculty = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine></HorizoantalLine>
      <CustomHeader props={{ title: "Faculty" }}></CustomHeader>
      <WhatsMore />
      <Footer />
    </div>
  );
};
