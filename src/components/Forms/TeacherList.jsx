import { Footer } from "../Footer/Footer";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { MoveToTop } from "../Tools/MoveToTop";
import "./CreateLiveClass.css";

export const TeacherList = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine></HorizoantalLine>
      <CustomHeader props={{ title: "Student List" }}></CustomHeader>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Teacher Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};
