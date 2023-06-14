import React, { useEffect, useState } from "react";
import { getAllCourse } from "../../Tools/Axios";
import { Gap } from "../../Tools/Gap";
import { Footer } from "../../Footer/Footer";
import { CustomHeader } from "../../Tools/CustomHeader";
import { Link } from "react-router-dom";
import "./GetAllCourses.css";
// getAllCourse;
export const GetAllCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await getAllCourse();
        setCourses(response.data);
      } catch (error) {
        console.log("Invalid Credentials.");
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "All courses" }} />
      <section className="table-container">
        <Link to="/create-course" className="btn btn-success">
          Create Course
        </Link>
        <table className="table table-bordered border-primary">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Duration</th>
              <th scope="col">INSTRUCTOR</th>
              <th scope="col">Subject</th>
              <th scope="col">UPLOAD VIDEO</th>
              <th scope="col">UPLOAD File</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr key={course._id}>
                  <td>{course.description}</td>
                  <td>{course.duration}</td>
                  <td>{course.instructor}</td>
                  <td>{course.subject}</td>
                  <td>
                    <Link
                      className="btn btn-success"
                      to={`/upload-video/${course._id}`}
                    >
                      {" "}
                      UPLOAD VIDEO
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-success"
                      to={`/upload-pdf/${course._id}`} //uploadPdf
                    >
                      {" "}
                      UPLOAD File
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};
