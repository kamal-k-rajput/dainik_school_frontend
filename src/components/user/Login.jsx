import React, { useState } from "react";
// import axios from "axios";
import { Footer } from "../Footer/Footer";
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

      console.log(rawResponse);
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

      <button>REGISTER</button>
      <Footer></Footer>
    </div>
  );
};
