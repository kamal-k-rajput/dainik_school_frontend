import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { store } from "../../Redux/Store/store";

export const Profile = () => {
  const loggedInUserDetail = store;
  console.log(loggedInUserDetail, "loggedInUserDetail");
  return <div>Profile</div>;
};
