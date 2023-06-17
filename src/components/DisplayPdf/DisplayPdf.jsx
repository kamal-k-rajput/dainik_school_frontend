import React from "react";
import AllPages from "./AllPages";

export const Displaypdf = ({ link }) => {
  return (
    <div>
      <AllPages pdf={link} />
    </div>
  );
};
