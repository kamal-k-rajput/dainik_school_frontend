import React, { useEffect, useState } from "react";
import "./AppliedTeacher.css";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import { Footer } from "../../Footer/Footer";
import { getAllTeachersApplication } from "../../Tools/Axios";

export const AppliedTeacher = () => {
  useEffect(() => {
    (async () => {
      let res = await getAllTeachersApplication();
      console.log(res, "res");
    })();
  }, []);

  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Teachers Application" }} />
      <table></table>
      <Footer />
    </div>
  );
};
