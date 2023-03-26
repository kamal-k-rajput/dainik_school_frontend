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
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
    {
      heading: "Chemistry",
      imgSrc: spokenEnglish,
      details: "Highlights of this class.",
      subject: "Chemistry",
      class: "9th",
    },
  ];
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Courses" }} />
      <div className="courses_container">
        {courses.map((course) => {
          return <CourseBox props={course} />;
        })}
      </div>
      <Footer />
      <MoveToTop />
    </>
  );
};
