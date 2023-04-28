import React from "react";
import { useNavigate } from "react-router";

export const LogOut = () => {
  const navigate = useNavigate();
  function changeRoutes(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <h1>User</h1>
      <button onClick={changeRoutes}>LOG OUT</button>
    </div>
  );
};
