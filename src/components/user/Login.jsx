import React, { useState } from "react";
import "./Login.css";
import { Footer } from "../Footer/Footer";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { LogIn } from "../Tools/Axios";
import { useNavigate } from "react-router";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [text, setText] = useState("Please login from here.");
  function submitLogIn(e) {
    e.preventDefault();
    (async () => {
      try {
        let response = await LogIn(formData);

        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data["token"]));
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/");
      } catch (error) {
        setText("Invalid Credentials.");
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
      <CustomHeader props={{ title: "Log In" }} />
      <div className="wrong-credentials correct">
        <span>{text}</span>
      </div>
      <div className="login-container">
        <form onSubmit={submitLogIn}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input type="submit" value="SUBMIT" className="btn btn-success" />
        </form>
        <Footer></Footer>
      </div>
    </>
  );
};
