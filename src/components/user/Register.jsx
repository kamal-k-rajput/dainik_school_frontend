import React, { useState } from "react";

import axios from "axios";
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
    // axios
    //   .post(`http://192.168.26.235:5000/user/register`, { ...formData })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err, "error");
    //   });
    (async () => {
      const rawResponse = await fetch(
        "http://192.168.26.235:5000/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      console.log(rawResponse);
    })();
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
