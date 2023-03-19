import React from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";

export const AboutUs = () => {
  return (
    <div>
      <CustomHeader props={{ title: "About us" }} />
      AboutUs
      <Footer />
      <MoveToTop />
    </div>
  );
};
