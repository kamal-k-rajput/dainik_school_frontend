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
          do not have good tuition facility in villages and the talent of the
          children is also suppressed. Parents can not send their children
          outside for tuition due to limited resources and security issue. We
          are trying to solve this big problem through Dainikschool website and
          it will be possible with the co-operation of of parents and children.
          The founder of “Dainik school” stands for education for every child
          irrespective of it’s economic stands.
        </p>
      </div>
      <Footer />
      <MoveToTop/>
    </>
  );
};
