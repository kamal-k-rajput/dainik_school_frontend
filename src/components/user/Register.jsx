import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import "./Register.css";
import axios from "axios";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNumber: "",
    description: "",
    class: "",
    gender: "",
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function submitRegister(e) {
    e.preventDefault();
    (async () => {
      // const rawResponse = await fetch(
      //   "http://192.168.26.235:5000/user/register",
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ ...formData }),
      //   }
      // );
      // console.log(formData, "form data");
      // console.log(rawResponse);
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
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
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
              name="mobileNumber"
              placeholder="Mobile Number"
            />

            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Location"
              placeholder="Location"
              onChange={handleChange}
            />
            <input
              type="text"
              name="Workprofilelink"
              placeholder="Work profile link"
              onChange={handleChange}
            />
            <input
              type="number"
              name="experiance"
              placeholder="Teaching experiance"
              onChange={handleChange}
            />
            <textarea placeholder="Your Expertise" name="description" />
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
            <label htmlFor="video">Upload Video</label>
            <input
              type="file"
              id="video"
              name="avatar"
              accept="image/png, image/jpeg"
              className="file-upload-input"
            />

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
