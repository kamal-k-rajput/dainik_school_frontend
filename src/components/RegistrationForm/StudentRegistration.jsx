import React, { useEffect, useState } from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { classes, states } from "../Data/Constants";
import "./StudentRegistration.css";

export const StudentRegistration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
    class: "",
    gender: "",
    location: "",
    state: "",
    role: "student",
  });

  const data = useSelector((data) => {
    return data.studentDetails;
  });

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
    }
  }, []);

  function submitRegister(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match.");
      return;
    }

    console.log(typeof formData);
    (async () => {
      const rawResponse = await fetch("http://3.110.254.213/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });
      console.log(rawResponse, "rawResponse");
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
      <CustomHeader props={{ title: "Student Registration" }} />
      <div className="student-reg-container">
        <form onSubmit={submitRegister}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName || ""}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName || ""}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
          />

          <select
            name="class"
            onChange={handleChange}
            required
            value={formData.class}
          >
            {classes.map((subject) => {
              return (
                <option value={subject.text} key={subject.text}>
                  {subject.text}
                </option>
              );
            })}
          </select>
          {
            <select
              onChange={handleChange}
              required
              name="state"
              value={formData.state}
            >
              {states.map((state) => {
                return (
                  <option value={state} key={state}>
                    {state}
                  </option>
                );
              })}
            </select>
          }
          <input
            type="number"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone || ""}
            onChange={handleChange}
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={handleChange}
            value={formData.gender || ""}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            value={formData.location || ""}
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Create Password"
            value={formData.password || ""}
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            value={formData.confirmPassword || ""}
          />
          <input type="submit" value="SUBMIT" className=" btn btn-success" />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
