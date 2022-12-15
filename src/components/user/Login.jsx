import React, { useState } from "react";
const axios = require("axios");

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function submitLogIn(e) {
    e.preventDefault();
    axios
      .post(`/register`, { ...formData })
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
      <h1>Login</h1>
      <div>
        <form onSubmit={submitLogIn}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input type="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  );
};
