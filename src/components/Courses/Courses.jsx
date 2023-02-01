import React from "react";
import { Footer } from "../Footer/Footer";
import courses_top_image from "../../ASSETS/IMG/courses/courses_top_image.png";
import hariyana_ninth_english from "../../ASSETS/IMG/courses/hariyana_ninth_english.png";
import "./Courses.css";
export const Courses = () => {
  const courses = [
    {
      img: hariyana_ninth_english,
      title: "NIOS 12TH ENGLISH",
      price: "",
      rating: "",
    },
  ];
  return (
    <>
      <div className="courses_container">
        <div className="all_courses">
          <img src={courses_top_image} alt="dainik school courses" />
        </div>
        <section className="courses_section">
          <h2>Do it now</h2>
          <h2>
            Grow your
            <span className="mid_text"> Careers</span>
          </h2>
        </section>
        <div className="courses_list">
          {courses.forEach((course) => {
            return (
              <div>
                <img src={course.img} alt="hariyana ninth" />
                <p>Rating</p>
                <p>{course.title}</p>
                <div>
                  <span>1199.99-/</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
