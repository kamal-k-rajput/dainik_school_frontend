import React from "react";
import { Gap } from "../../Tools/Gap";
import { CustomHeader } from "../../Tools/CustomHeader";
import { Footer } from "../../Footer/Footer";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AppliedTeacherCompleteDetails = () => {
  let { teacherId } = useParams();
  console.log(teacherId);
  const teacher = useSelector((store) => {
    return store.appliedTeacherDetails;
  });
  /*
createdAt
degree
fromClass
location
null
subject
toClass
*/
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Teacher Details" }} />
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <th>
                {teacher.firstname} {teacher.lastname}
              </th>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <th>{teacher?.phone}</th>
            </tr>
            <tr>
              <th>Gender</th>
              <th>{teacher?.gender}</th>
            </tr>
            <tr>
              <th>Experiance</th>
              <th>{teacher?.experiance}</th>
            </tr>
            <tr>
              <th>Email</th>
              <th>{teacher?.email}</th>
            </tr>
            <tr>
              <th>Highest Qualification</th>
              <th>{teacher?.degree}</th>
            </tr>
            <tr>
              <th>Class</th>
              <th>
                From {teacher?.fromClass} To {teacher?.toClass}
              </th>
            </tr>
            <tr>
              <th>Resume</th>
              <th>
                <Link to={teacher?.resumeUrl} className="btn btn-success">
                  Resume
                </Link>
              </th>
            </tr>
            <tr>
              <th>Video</th>
              <th>
                {" "}
                <Link to={teacher?.videoUrl} className="btn btn-success">
                  Video
                </Link>
              </th>
            </tr>
            <tr>
              <th>Location</th>
              <th>{teacher?.location}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
