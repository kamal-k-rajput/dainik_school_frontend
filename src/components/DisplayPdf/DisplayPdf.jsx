import React, { useState } from "react";
import AllPages from "./AllPages";
import { Link } from "react-router-dom";

export const Displaypdf = ({ link }) => {
  console.log(link, "link");
  return (
    <div>
      {/* <AllPages pdf={link} /> */}
      <Link to={link} target="_blank">
        Download
      </Link>
    </div>
  );
};
