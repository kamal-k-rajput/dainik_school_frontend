import React from "react";

import "./CreateCourseForm.css";
export const CreateCourseForm = () => {
  return (
    <div>
      <form action="">
        <input type="subject" />
        <textarea
          type="description"
          placeholder="Write subject description here..."
        ></textarea>
      </form>
    </div>
  );
};
