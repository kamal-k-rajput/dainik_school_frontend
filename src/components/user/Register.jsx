import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import "./Register.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { applyInstructor } from "../Tools/Axios";
import { useNavigate } from "react-router";

/*
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  description?: string;
  subjects?: string[];
  fromClass: number;
  toClass: number;
  gender: string;
  location?: string;
  resumeUrl?: string;
  videoUrl?: string;
  experiance: number;
  degree?: string;
*/

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    description: "",
    subjects: [],
    fromClass: "",
    toClass: "",
    gender: "",
    location: "",
    resumeUrl: "",
    videoUrl: "",
    experiance: 0,
    degree: "",
  });

  function submitRegister(e) {
    e.preventDefault();
    console.log(formData, "formdata");
    (async () => {
      try {
        let response = await applyInstructor(formData);
        console.log(response);
        alert(
          "Application Submitted Successfully. Our Team will contact you sortly."
        );
        navigate("/");
      } catch (err) {
        console.log(err, "error");
        alert(err.message);
      }
    })();
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Apply Now" }} />
      <div className="register-container">
        <div className="register-container">
          <form onSubmit={submitRegister}>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Create Password"
            />
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
            />
            <input
              type="text"
              name="subjects"
              placeholder="All subject seprated by space"
              onChange={handleChange}
            />
            <input
              type="number"
              name="fromClass"
              onChange={handleChange}
              placeholder="From class"
            />
            <input
              type="number"
              name="toClass"
              onChange={handleChange}
              placeholder="To class"
            />
            <input
              type="text"
              name="resumeUrl"
              placeholder="Work profile link OR resume Url"
              onChange={handleChange}
            />
            <input
              type="text"
              name="videoUrl"
              placeholder="Video Url"
              onChange={handleChange}
            />
            <input
              type="text"
              name="degree"
              placeholder="Highest Qualification"
              onChange={handleChange}
            />
            <input
              type="number"
              name="experiance"
              placeholder="Teaching experiance"
              onChange={handleChange}
            />
            <textarea
              placeholder="Your Expertise"
              name="description"
              onChange={handleChange}
            />
            {/* <div>
              <label htmlFor="resume">
                Upload Resume
                <input
                  type="file"
                  id="resume"
                  name="avatar"
                  className="file-upload-input"
                  accept="image/png, image/jpeg"
                />
              </label>
            </div> */}
            <div></div>
            {/* <label htmlFor="video">
              Upload Video
              <input
                type="file"
                id="video"
                name="avatar"
                accept="image/png, image/jpeg"
                className="file-upload-input"
              />
            </label> */}

            <input
              type="submit"
              value="SUBMIT"
              className="register-submit btn btn-success"
            />
          </form>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
