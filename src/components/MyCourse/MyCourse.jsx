import React, { useEffect, useState } from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { getMyCourses } from "../Tools/Axios";
import { Footer } from "../Footer/Footer";
import { CourseBox } from "./CourseBox";
import "./Mycourses.css";
export const MyCourse = () => {
  const [myCourse, setMyCourse] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [message, setMessage] = useState("loading");

  async function getSubscribedCourses() {
    try {
      let res = await getMyCourses();

      if (Array.isArray(res.data)) {
        setMyCourse(res.data);
        setFetched(true);
      } else {
        setMessage("Please log in first.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSubscribedCourses();
  }, []);
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Subscribed courses" }} />
      <div className="all-courses">
        {fetched ? (
          myCourse?.map((course, i) => {
            return <CourseBox props={course} key={i} />;
          })
        ) : (
          <div>{message}</div>
        )}
      </div>

      <Footer />
    </div>
  );
};
