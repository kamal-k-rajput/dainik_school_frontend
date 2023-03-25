import React from "react";
import { Footer } from "../../Footer/Footer";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import "./LiveClasses.css";
import { MoveToTop } from "../../Tools/MoveToTop";
import spokenEnglish from "../../../ASSETS/IMG/liveClasses/spokenenglish.png";
import { LiveCourseBox } from "./LiveCourseBox";

export const LiveClasses = () => {
  const subjects = [
    { text: "Math", value: "math" },
    { text: "Science", value: "science" },
    { text: "English", value: "english" },
    { text: "SST", value: "sst" },
    { text: "EVS", value: "evs" },
    { text: "Spoken English", value: "spoken-english" },
  ];
  const classes = [
    { text: "LKG", value: "lkg" },
    { text: "UKG", value: "ukg" },
    { text: "CLASS - 1", value: "class-one" },
    { text: "CLASS - 2", value: "class-two" },
    { text: "CLASS - 3", value: "class-three" },
    { text: "CLASS - 4", value: "class-four" },
    { text: "CLASS - 5", value: "class-five" },
    { text: "CLASS - 6", value: "class-six" },
    { text: "CLASS - 7", value: "class-seven" },
    { text: "CLASS - 8", value: "class-eight" },
    { text: "CLASS - 9", value: "class-nine" },
    { text: "CLASS - 10", value: "class-ten" },
    { text: "CLASS - 11", value: "class-eleven" },
    { text: "CLASS - 12", value: "class-thirteen" },
  ];

  const liveClasses = [
    {
      title: "Spoken English",
      imgSrc: spokenEnglish,
      highlights: "Highlights of this class. ",
      description: "Lession-1:Noun",
      subject: "English",
      class: "English",
      date: "01-04-2023",
      time: "05:00-06:00",
    },
    {
      title: "Mathematics",
      imgSrc: spokenEnglish,
      highlights: "Highlights of this class. ",
      description: "Number System.",
      subject: "English",
      class: "9th ",
      date: "01-04-2023",
      time: "05:00-06:00",
    },
    {
      title: "Chemistry",
      imgSrc: spokenEnglish,
      highlights: "Highlights of this class.",
      description: "Matter of Surroundings.",
      subject: "Chemistry",
      class: "9th",
      date: "01-04-2023",
      time: "05:00-06:00",
    },
    {
      title: "Physics",
      imgSrc: spokenEnglish,
      highlights: "Highlights of this class.",
      description: "Motion",
      subject: "Physics",
      class: "9th",
      date: "01-04-2023",
      time: "05:00-06:00",
    },
  ];
  return (
    <>
      <Gap></Gap>
      <HorizoantalLine />
      <CustomHeader props={{ title: "Live Classes" }} />
      <section className="filter-section">
        <div>
          <select name="class" id="class">
            <option value="">Select Class </option>
            {classes.map((subject) => {
              return <option value={subject.value}>{subject.text}</option>;
            })}
          </select>
        </div>
        <div>
          <select name="subject" id="subject">
            <option value="">Select Subject</option>
            {subjects.map((subject) => {
              return <option value={subject.value}>{subject.text}</option>;
            })}
          </select>{" "}
        </div>
      </section>
      <section className="live-section">
        {liveClasses.map((liveClass) => {
          return <LiveCourseBox props={liveClass} />;
        })}
      </section>
      <Footer />
      <MoveToTop />
    </>
  );
};
