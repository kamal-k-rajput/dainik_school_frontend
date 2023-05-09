import React, { useEffect, useState } from "react";
import { CustomHeader } from "../Tools/CustomHeader";
import { Gap } from "../Tools/Gap";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { classes, states } from "../Data/Constants";
import "./StudentRegistration.css";
import { Register, register } from "../Tools/Axios";

export const StudentRegistration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
    class: 1,
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
      setFormData({ ...data, role: "student" });
    }
  }, []);

  async function submitRegister(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match.");
      return;
    }

    if (!IsMobileNumber(formData.phone)) return;
    console.log(formData, "form data");
    (async () => {
      try {
        let response = await register(formData).then((d) => {
          alert("Your registration successful.");
        });
      } catch (error) {
        console.log(error, "error");
      }
    })();
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function IsMobileNumber(txtMobId) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    var txtMobile = formData.phone;
    if (mob.test(txtMobile) == false) {
      alert("Please enter valid mobile number.");
      return false;
    }
    return true;
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
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName || ""}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
            required
          />

          <select
            name="class"
            onChange={handleChange}
            required
            value={formData.class}
          >
            {classes.map((subject) => {
              return (
                <option value={1} key={subject.text}>
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
            pattern=""
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            value={formData.location || ""}
            required
          />

          <select
            onChange={handleChange}
            required
            name="gender"
            value={formData.gender}
          >
            <option value={"male"} key={"male"}>
              Male
            </option>
            <option value={"female"} key={"female"}>
              Female
            </option>
          </select>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Create Password"
            value={formData.password || ""}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            value={formData.confirmPassword || ""}
            required
          />
          <input type="submit" value="SUBMIT" className=" btn btn-success" />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
