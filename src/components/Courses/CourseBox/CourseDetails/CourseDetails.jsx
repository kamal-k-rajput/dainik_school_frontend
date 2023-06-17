import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import { YoutubeVideo } from "../../../Tools/YoutubeVideo";
import { Gap } from "../../../Tools/Gap";
import { CustomHeader } from "../../../Tools/CustomHeader";
import { Footer } from "../../../Footer/Footer";
import { getCourseFiles } from "../../../Tools/Axios";
import { AllPages } from "../../../Others/AllPages";

export const CourseDetails = ({ props }) => {
  const [courseFiles, setCourseFiles] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    (async () => {
      let files = await getCourseFiles("6465352174eb185b66e90a2c");
      setCourseFiles(files.data);
      console.log(files.data, "data");
      setIsData(true);
    })();
  }, []);
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Course Details" }} />

      {/* <YoutubeVideo props={{ link, title }} /> */}
      <h1>course details</h1>

      {isData &&
        courseFiles?.fileIds?.map((fileId) => {
          return (
            <div key={fileId.location}>
              <div>{fileId.originalName}</div>
              <div className="pdf-file-container">
                <AllPages pdf={fileId.location} />
              </div>
            </div>
          );
        })}
    </>
  );
};
