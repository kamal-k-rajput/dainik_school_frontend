import { Footer } from "../Footer/Footer";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { MoveToTop } from "../Tools/MoveToTop";
import "./CreateLiveClass.css";

export const CreateCourse = () => {
  return (
    <div>
      <Gap></Gap>
      <HorizoantalLine></HorizoantalLine>
      <CustomHeader props={{ title: "Create Course" }}></CustomHeader>
      <div className="form-container">
        <form action="">
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="class" placeholder="Class" />
          <input type="text" placeholder="instructor name" />
          <input
            type="submit"
            value="CREATE CLASS"
            className="btn btn-success"
          />
        </form>
      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};
