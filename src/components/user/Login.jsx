import React, { useState } from "react";
import "./Login.css";
// import axios from "axios";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function submitLogIn(e) {
    e.preventDefault();
    (async () => {
      const rawResponse = await fetch("http://192.168.26.235:5000/user/login", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });
    })();
    // axios
    //   .post(`http://192.168.26.235:5000/user/login`, { ...formData })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err, "error");
    //   });
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Log In" }} />
      <div className="login-container">
        <form onSubmit={submitLogIn}>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input type="submit" value="SUBMIT" className="btn btn-success" />
        </form>
        <Footer></Footer>
      </div>
    </>
  );
};
