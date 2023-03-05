import React from "react";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "../Tools/CustomHeader";
import "./DrivingLicense.css";

export const DrivingLicense = () => {
  return (
    <div>
      <CustomHeader props={{ title: "Make My License" }} />
      <div className="drivingLicense-container">
        <div>
          <h1>Theory</h1>
        </div>
        <div>
          <h1>Practical</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
