import React from "react";
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <div className="second-section">
      <div>
        <b>Fees Ki Wajah Se</b>
        <b>Padhai Nahi Rukegi</b>
      </div>

      <div>
        <p className="font-size-large">Start your 5-Day Free Trial</p>
        <p>Get instant access by signing up now.</p>
        <p>*Trial access is limited to 10 lessons</p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Mobile Number</label>
          <input type="number" placeholder="Mobile Number" />
          <input
            type="submit"
            value="STUDENT ENROLL"
            className="btn btn-success"
          />
        </form>
        <p>
          By continuing, you agree to 88Guru's Conditions of Use and Privacy
          Policy
        </p>
      </div>
      <div className="diagnol-line"></div>
    </div>
  );
};

export default SecondSection;