import React, { useState } from "react";
import appleStore from "../../../ASSETS/IMG/homepage/playStore/AppleStore.png";
import playStore from "../../../ASSETS/IMG/homepage/playStore/GooglePlay.png";
import "./SecondSection.css";

const SecondSection = () => {
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
  const classes = [
    { text: "LKG", value: "lkg" },
    { text: "UKG", value: "ukg" },
    { text: "CLASS - 1", value: "class-one" },
    { text: "CLASS - 2", value: "class-two" },
    { text: "CLASS - 3", value: "class-three" },
    { text: "CLASS - 4", value: "class-four" },
    { text: "CLASS - 5", value: "class-five" },
    { text: "CLASS - 6", value: "class-six" },
    { text: "CLASS - 7", value: "class-seven" },
    { text: "CLASS - 8", value: "class-eight" },
    { text: "CLASS - 9", value: "class-nine" },
    { text: "CLASS - 10", value: "class-ten" },
    { text: "CLASS - 11", value: "class-eleven" },
    { text: "CLASS - 12", value: "class-thirteen" },
  ];
  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <div className="second-section">
      <div>
        <div>
          <b>Fees Ki Wajah Se</b>
          <b>Padhai Nahi Rukegi</b>
        </div>
        <div className="mobile-app-icon">
          <img src={appleStore} alt="appstore" />
          <img src={playStore} alt="playstore" />
        </div>
      </div>

      <div className="second-section-form-container">
        <p className="font-size-large">Start your 5-Day Free Trial</p>
        <p>Get instant access by signing up now.</p>
        <p>*Trial access is limited to 10 lessons</p>
        <form>
          <input type="text" placeholder="Name" onChange={handleChange} />
          <input
            type="number"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email address "
            onChange={handleChange}
            required
          />
          <select name="class" id="class">
            <option value="">Class </option>
            {classes.map((subject) => {
              return <option value={subject.value}>{subject.text}</option>;
            })}
          </select>
          {
            <select>
              {states.map((state) => {
                return <option value={state}>{state}</option>;
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
