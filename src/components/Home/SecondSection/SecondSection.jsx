import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import subjectTopic from "./constants";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import playStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import { registerStudent } from "../../../Redux/Action/action";
import { classes, states } from "../../Data/Constants";
import { SubjectTopics } from "./SubjectTopics";
import "./SecondSection.css";

const SecondSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    class: "",
    gender: "",
    state: "",
    location: "",
  });

  function submitRegisterForm(e) {
    e.preventDefault();

    dispatch(registerStudent(formData));
    navigate("/student-registration");
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="second-section">
      <div>
        <div className="topics-container">
          {subjectTopic.map((topic) => {
            return (
              <SubjectTopics topic={topic} key={topic.subject} ></SubjectTopics>
            );
          })}
        </div>
        <div className="second-section-quote">
          <b>Fees Ki Wajah Se</b>
          <b>Padhai Nahi Rukegi</b>
        </div>
        <div>
          <Link
            className="mobile-app-icon"
            to="https://play.google.com/store/apps/details?id=com.nrichlearning.dainikschool&pli=1"
          >
            <img src={appleStore} alt="appstore" />
            <img src={playStore} alt="playstore" />
          </Link>
        </div>
      </div>

      <div className="second-section-form-container">
        <p className="font-size-large">Start your 5-Day Free Trial</p>
        <p>Get instant access by signing up now.</p>
        <p>*Trial access is limited to 10 lessons</p>
        <form onSubmit={submitRegisterForm}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name "
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address "
            onChange={handleChange}
            required
          />
          <select name="class" onChange={handleChange} required>
            <option value="">Class </option>
            {classes.map((subject) => {
              return (
                <option value={subject.value} key={subject.text}>
                  {subject.text}
                </option>
              );
            })}
          </select>
          {
            <select onChange={handleChange} required name="state">
              {states.map((state) => {
                return (
                  <option value={state} key={state}>
                    {state}
                  </option>
                );
              })}
            </select>
          }
          <button className="btn btn-success gradient-btn form-btn">
            SUBMIT
          </button>
        </form>
        <p className="policy-acceptance">
          By continuing, you agree to DainikSchool's Conditions of Use and
          Privacy Policy.
        </p>
      </div>
      <div className="diagnol-line"></div>
    </div>
  );
};

export default SecondSection;
