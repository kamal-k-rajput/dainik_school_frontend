import React, { useState } from "react";
import "./UploadVideo.css";
import { Gap } from "../Gap";
import { CustomHeader } from "../CustomHeader";
import axios from "axios";
import { Footer } from "../../Footer/Footer";
import { useNavigate } from "react-router";

export const UploadVideo = () => {
  const [filePath, setFilePath] = useState("");
  const [isUploading, setUploading] = useState(false);
  const navigate = useNavigate();

  function handleFileChange(e) {
    setFilePath(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    setUploading(true);
    axios
      .post(
        "http://localhost:3000/course/642dae0a2783917288748b0b/uploadVideo",
        { video: filePath },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDJkYWMxMTUwOTdlNWEwY2RjNzcxOGYiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MDcxNDc2OSwiZXhwIjoxNjgxMzE5NTY5fQ.rfADzcQFicykMBbWs4eoW_qOQpKEv5hHmaZ6uBYuN2k",
          },
          onUploadProgress: function (progressEvent) {
            console.log(progressEvent, "progress event");
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(percentCompleted);
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setUploading(false);
        alert("video uploaded successfully");
        navigate("/upload-video");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Upload Video" }} />
      <div className="video-uplaod-container">
        <input
          type="file"
          onChange={handleFileChange}
          id="myfile"
          name="myfile"
          accept=".mp4,.mkv,.pdf"
        />
        <button onClick={handleUpload} className="btn btn-success">
          {isUploading && <marquee>...</marquee>}
          SUBMIT
        </button>
        <div className="video-testing">
          <p>VIDEO UPLOAD TESTING</p>
          <b>This is testing page</b>
        </div>
      </div>
      <Footer />
    </>
  );
};
