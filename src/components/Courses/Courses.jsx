import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import "./Courses.css";
import { Gap } from "../Tools/Gap";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { MoveToTop } from "../Tools/MoveToTop";
import spokenEnglish from "../../ASSETS/IMG/liveClasses/spokenenglish.png";
import { CourseBox } from "./CourseBox/CourseBox";
import { getAllCourse } from "../Tools/Axios";

export const Courses = () => {
 async function getcoures (){
    try {
      let res =await getAllCourse();

      return  setCourses(res.data);

      
    } catch (err) {
      console.log(err);
      
    }
}
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getcoures();
  },[])
  return (
    <>
      <Gap />
      <HorizoantalLine />
      <CustomHeader props={{ title: "Courses" }} />
      <div className="courses_container">
        {courses?.map((course, i) => {
          return <CourseBox props={course} key={i} />;
        })}
      </div>
      <Footer />
      <MoveToTop />
    </>
  );
};
