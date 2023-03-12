import React from "react";
import "./Faculty.css";
import { WhatsMore } from "../Home/WhatsMore/WhatsMore";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";

export const Faculty = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine></HorizoantalLine>
      <CustomHeader props={{ title: "Our Team" }}></CustomHeader>
      <WhatsMore />
      <Footer />
      <MoveToTop />
    </div>
  );
};
