import { Footer } from "../Footer/Footer";
import HorizoantalLine from "../HorizoantalLine/HorizoantalLine";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { MoveToTop } from "../Tools/MoveToTop";
import  "./CreateLiveClass.css"

export const CreateLiveClasses = () => {
    return (
      <div>
        <Gap></Gap>
        <HorizoantalLine></HorizoantalLine>
        <CustomHeader props={{ title: "Create a live class" }}></CustomHeader>
        <div className="form-container">
            <form action="">
                <input type="text" name="subject"  placeholder="Subject"/>
                <input type="text" name="description"  placeholder="Description"/>
                <input type="text" name="class"  placeholder="Class"/>
                <input type="date" name="date"  placeholder="Date"/>
                <input type="time" name="time"  placeholder="Start Time"/>
                <input type="time" name="time"  placeholder="End Time"/>
                <input type="submit" value="CREATE CLASS"  className="btn btn-success"/>

            </form>
        </div>
        <Footer />
        <MoveToTop />
      </div>
    );
  };
  