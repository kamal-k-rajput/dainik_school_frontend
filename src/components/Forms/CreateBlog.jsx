import React from "react";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import "./CreateBlog.css";

export const CreateBlog = () => {
  return (
    <div className="blog-form-container">
      <Gap />
      <CustomHeader props={{ title: "Create a Blog" }} />
      <input type="text" placeholder="Main heading" />
      <input type="text" placeholder="subheading  1" />
      <textarea
        name=""
        placeholder="Paragraph 1"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" placeholder="subheading  2" />
      <textarea
        name=""
        placeholder="Paragraph 2"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" placeholder="subheading  3" />
      <textarea
        name=""
        placeholder="Paragraph 3"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" placeholder="subheading  4" />
      <textarea
        name=""
        placeholder="Paragraph 4"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" className="btn btn-success" />
      <Footer />
    </div>
  );
};
