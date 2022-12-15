import React, { useState } from "react";
const axios = require("axios");
export const Register = () => {
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
    console.log(formData, "formData");
    axios
      .post(`/login`, { ...formData })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      <h2>Register</h2>
      <div>
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
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="number"
            name="mobileNumber"
            placeholder="Mobile Number"
          />
          <input
            type="number"
            name="class"
            placeholder="Class"
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={handleChange}
          />
          <input type="submit" value="REGISTER" />
        </form>
      </div>
    </div>
  );
};
