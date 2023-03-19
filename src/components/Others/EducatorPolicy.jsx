import React from "react";
import "./EducatorPolicy.css";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";
import samplePDF from "./policy.pdf";
import AllPages from "./AllPages";

export const EducatorPolicy = () => {
  return (
    <div>
      <CustomHeader props={{ title: "Educator policy" }} />
      <div className="all-page-container">
        <AllPages pdf={samplePDF} />
      </div>
      <Footer></Footer>
      <MoveToTop />
    </div>
  );
};
