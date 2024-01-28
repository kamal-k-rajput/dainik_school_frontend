import React from "react";
import { Gap } from "../Tools/Gap";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "../Tools/CustomHeader";

export const StudentDetails = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Student Details" }} />
      <div className="student-details-container"></div>
      <Footer />
    </div>
  );
};
