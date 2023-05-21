import React from "react";
import { useNavigate } from "react-router";
import { Gap } from "./Tools/Gap";
import { Footer } from "./Footer/Footer";
import { CustomHeader } from "./Tools/CustomHeader";
import "./Logout.css";

export const LogOut = () => {
  const navigate = useNavigate();
  function changeRoutes(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Log out" }} />
      <h1>Are you sure want to logout. Click Below.</h1>
      <div className="logout-cont">
        <button onClick={changeRoutes} className="btn btn-success">
          LOG OUT
        </button>
      </div>
      <Footer />
    </>
  );
};
