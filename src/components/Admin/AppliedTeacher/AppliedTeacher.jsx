import React, { useEffect, useState } from "react";
import "./AppliedTeacher.css";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import { Footer } from "../../Footer/Footer";
import { getAllTeachersApplication } from "../../Tools/Axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppliedTeacherDetails } from "../../../Redux/Action/action";

export const AppliedTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let res = await getAllTeachersApplication();
      setTeachers(res.data);
    })();
  }, []);

  function handleClick(teacher) {
    dispatch(setAppliedTeacherDetails(teacher));
    navigate(`/applied-teacher/details`);
  }
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Teachers Application" }} />
      <table className="table table-bordered border-primary">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Email</th>
            <th scope="col">Experiance </th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => {
            return (
              <tr key={teacher._id}>
                <td>{teacher?.firstname}</td>
                <td>{teacher?.lastname}</td>
                <td>{teacher?.phone}</td>
                <td>{teacher?.email}</td>
                <td>{teacher?.experiance}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      handleClick(teacher);
                    }}
                  >
                    Get Complete Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};
