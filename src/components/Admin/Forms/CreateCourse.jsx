import React, { useState } from "react";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import "./CreateCourse.css";
import { Footer } from "../../Footer/Footer";
import { createCourseAdmin } from "../../Tools/Axios";
import { useNavigate } from "react-router";

export const CreateCourse = () => {
  const navigate = useNavigate();
  navigate("/courses");
  const [courseData, setCourseData] = useState({
    subject: "",
    description: "",
    instructor: "",
    fees: "",
    duration: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  }
  function submitRegister(e) {
    e.preventDefault();
    (async () => {
      try {
        let response = await createCourseAdmin(courseData);
        localStorage.setItem("subjectId", response.data._id);
        navigate("/get-all-courses");
      } catch (err) {
        console.log(err, "error");
      }
    })();
  }
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Create Course" }} />
      <form className="form-container" onSubmit={submitRegister}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={courseData.subject || ""}
        />

        <input
          type="text"
          name="description"
          placeholder="Class"
          onChange={handleChange}
          value={courseData.description || ""}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
          value={courseData.duration || ""}
        />

        <input
          type="text"
          name="instructor"
          placeholder="instructor"
          onChange={handleChange}
          value={courseData.instructor || ""}
        />

        <input
          type="number"
          name="fees"
          placeholder="Fees"
          onChange={handleChange}
          value={courseData.fees || ""}
          min={0}
        />

        <input type="submit" value="SUBMIT" className="btn btn-success" />
      </form>
      <Footer />
    </>
  );
};
