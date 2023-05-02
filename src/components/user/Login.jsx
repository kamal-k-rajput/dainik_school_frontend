import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUserToken, userDetails } from "../../Redux/Action/action";
import { Footer } from "../Footer/Footer";
import { logIn } from "../Tools/Axios";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import "./Login.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  function submitLogIn(e) {
    e.preventDefault();
    (async () => {
      try {
        let response = await logIn(formData);
        dispatch(userDetails(response.data));
        dispatch(setUserToken(response.data["token"]));
        localStorage.setItem("token", JSON.stringify(response.data["token"]));
        navigate("/courses");
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
