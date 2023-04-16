import React from "react";
import "./Blog.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";

export const Blog = (props) => {
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Blog" }} />
      <div className="blog-container">
        <h1 className="blog-page-heading">{props.heading}</h1>
        <img src={props.imgLink} alt="" />
        <h2>{props.imgLink}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
};
