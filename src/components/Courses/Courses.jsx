import React from "react";
import { Footer } from "../Footer/Footer";
import "./Courses.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
import spokenEnglish from "../../ASSETS/IMG/liveClasses/spokenenglish.png";
import { CourseBox } from "./CourseBox/CourseBox";

export const Courses = () => {
  const courses = [
    {
      heading: "Math for kids",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Maths",
      class: "9th",
      videos: [],
    },
    {
      heading: "Science for kids",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Science",
      class: "9th",
      videos: [],
    },
  ];
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Courses" }} />
      <div className="courses_container">
        {courses.map((course, i) => {
          return <CourseBox props={course} key={i} />;
        })}
      </div>
      <Footer />
      <MoveToTop />
    </>
  );
};
