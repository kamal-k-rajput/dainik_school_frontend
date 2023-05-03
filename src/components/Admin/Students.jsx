import React, { useEffect, useState } from "react";
import { studentList } from "../Tools/Axios";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import "./Students.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setStudentDetails } from "../../Redux/Action/action";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function getData() {
    let stds = await studentList();
    setStudents(stds.data);
  }
  function handleClick(student) {
    dispatch(setStudentDetails(student));
    navigate(`/students/details`);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Student List" }} />
      <div className="student-list-table">
        <table className="table table-bordered border-primary">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Email</th>
              <th scope="col">Class </th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => {
              return (
                <tr key={student._id}>
                  <td>{student?.firstName}</td>
                  <td>{student?.lastName}</td>
                  <td>{student?.mobileNumber}</td>
                  <td>{student?.email}</td>
                  <td>{student?.class}</td>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        handleClick(student);
                      }}
                    >
                      Studetn Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
