import React from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
import { Footer } from "../Footer/Footer";

export const Subject = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Subjects" }} />
      <Footer />
      <MoveToTop />
    </div>
  );
};
