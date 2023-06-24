import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import { YoutubeVideo } from "../../../Tools/YoutubeVideo";
import { Gap } from "../../../Tools/Gap";
import { CustomHeader } from "../../../Tools/CustomHeader";
import { Footer } from "../../../Footer/Footer";
import { getCourseFiles } from "../../../Tools/Axios";
import { AllPages } from "../../../Others/AllPages";
import { Displaypdf } from "../../../DisplayPdf/DisplayPdf";
import { Link } from "react-router-dom";

export const CourseDetails = ({ props }) => {
  const [courseFiles, setCourseFiles] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    (async () => {
      let files = await getCourseFiles("6465352174eb185b66e90a2c");
      setCourseFiles(files.data);
      setIsData(true);
    })();
  }, []);
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Course Details" }} />

      {/* <YoutubeVideo props={{ link, title }} /> */}
      <h1>Course Study Material</h1>
      <table class="table-primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {isData &&
            courseFiles?.fileIds?.map((fileId) => {
              return (
                <tr key={fileId.location}>
                  <td>
                    <div>{fileId.originalName}</div>
                  </td>
                  <td>
                    <Displaypdf link={fileId.location} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Footer />
    </>
  );
};
