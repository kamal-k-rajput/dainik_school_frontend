import React, { useState } from "react";
import "./Uploadfile.css";
import { Gap } from "../Gap";
import { CustomHeader } from "../CustomHeader";
import axios from "axios";
import { Footer } from "../../Footer/Footer";
import { useNavigate, useParams } from "react-router";
let token = JSON.parse(localStorage.getItem("token"));

export const UploadFile = () => {
  const [description, setDescription] = useState("");
  let { id } = useParams();

  const [filePath, setFilePath] = useState("");
  const [isUploading, setUploading] = useState(false);
  const [percentCompleted, setPercentCompleted] = useState(0);
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
    axios
      .post(
        `https://api.dainikschool.com/course/${id}/uploadPdf`,
        { file: filePath, description },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
            "Access-Control-Allow-Origin": "*",
          },
          onUploadProgress: function (progressEvent) {
            var per = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(per);
            setPercentCompleted(per);
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
      <CustomHeader props={{ title: "Upload File" }} />
      <div className="file-uplaod-container">
        <input
          type="file"
          onChange={handleFileChange}
          id="myfile"
          name="myfile"
          accept=".pdf"
        />
        <div>
          Uploaded{" "}
          <b>
            {" "}
            <i>{percentCompleted}%</i>
          </b>
        </div>
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
        <div className="file-testing">
          <p>VIDEO UPLOAD </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
