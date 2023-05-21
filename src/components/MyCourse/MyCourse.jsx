import React, { useEffect, useState } from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { getMyCourses } from "../Tools/Axios";
import { Footer } from "../Footer/Footer";
import { CourseBox } from "./CourseBox";

export const MyCourse = () => {
  const [myCourse, setMyCourse] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getSubscribedCourses() {
    let data = await getMyCourses();
    console.log(data, "data");
    setMyCourse(data.data);
    setFetched(true);
  }

  useEffect(() => {
    getSubscribedCourses();
  }, []);
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Subscribed courses" }} />

      {fetched ? (
        myCourse.map((course, i) => {
          return <CourseBox props={course} key={i} />;
        })
      ) : (
        <div>Loading</div>
      )}

      <Footer />
    </div>
  );
};
