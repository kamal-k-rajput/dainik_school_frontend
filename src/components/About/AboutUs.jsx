import React from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";
import { Gap } from "../Tools/Gap";

export const AboutUs = () => {
  return (
    <>
      <Gap/>
      <CustomHeader props={{ title: "About us" }} />
      AboutUs
      <Footer />
      <MoveToTop />
    </>
  );
};
