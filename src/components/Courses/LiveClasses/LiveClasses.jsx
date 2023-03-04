import React from "react";
import { Footer } from "../../Footer/Footer";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import "./LiveClasses.css";

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
        <div>Math</div>
        <div>Spoken English</div>
        <div>Physics</div>
        <div>Biology</div>
      </section>

      <Footer />
    </>
  );
};
