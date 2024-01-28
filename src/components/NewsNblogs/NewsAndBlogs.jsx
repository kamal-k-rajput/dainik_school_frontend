import React from "react";
import "./NewsAndBlogs.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";

export const NewsAndBlogs = () => {
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "News And Blogs" }} />
      <div className="news-container">
        <p>
          We ourselves live in rural area, so we have impression that children
          do not have good tuition facility in villages......
        </p>
      </div>
      <Footer />
      <MoveToTop />
    </>
  );
};
