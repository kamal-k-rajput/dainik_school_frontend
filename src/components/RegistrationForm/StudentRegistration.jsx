import React, { useState } from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { Footer } from "../Footer/Footer";

export const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNumber: "",
    class: "",
    gender: "",
  });
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
      console.log(formData, "form data");
      // console.log(rawResponse);
    })();
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
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
                type="submit"
                value="SUBMIT"
                className="register-submit btn btn-success"
              />
            </form>
          </div>
          <Footer></Footer>
        </div>
      </>
    </div>
  );
};
