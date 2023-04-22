import React, { useState } from "react";
import "./UploadVideo.css";
import { Gap } from "../Gap";
import { CustomHeader } from "../CustomHeader";
import axios from "axios";
import { Footer } from "../../Footer/Footer";
import { useNavigate, useParams } from "react-router";
let token = JSON.parse(localStorage.getItem("token"));

export const UploadVideo = () => {
  const [description, setDescription] = useState("");
  let { id } = useParams();

  const [filePath, setFilePath] = useState("");
  const [isUploading, setUploading] = useState(false);
  const navigate = useNavigate();

  function handleFileChange(e) {
    setFilePath(e.target.files[0]);
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setDescription({ [name]: value });
  }
  function handleUpload(e) {
    e.preventDefault();
    setUploading(true);
    console.log({ video: filePath, description });
    axios
      .post(
        `http://3.110.254.213/course/${id}/uploadVideo`,
        { video: filePath, description },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
          },
          onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(percentCompleted);
          },
        }
      )
      .then(function (response) {
        setUploading(false);
        alert("video uploaded successfully");
        navigate(`/upload-video/${id}`);
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
        <input
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="description"
        />
        <button onClick={handleUpload} className="btn btn-success">
          {isUploading && <marquee>...</marquee>}
          SUBMIT
        </button>
        <div className="video-testing">
          <p>VIDEO UPLOAD </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
