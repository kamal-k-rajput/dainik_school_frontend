import React from "react";
import "./BlogSection.css";
import blogImg from "../../../ASSETS/IMG/homepage/Blog/blog.jpg";
import { Link } from "react-router-dom";
export const BlogSection = () => {
  const blogData = [
    {
      title: "This is title",
      img: "",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque explicabo error voluptatem eveniet corporis perferendis architecto ea fugit, commodi totam blanditiis omnis, inventore dolores iure porro amet ipsam quas.
      Rem animi ab eos alias voluptatum at voluptas obcaecati cupiditate accusantium odio. Temporibus nesciunt assumenda sed numquam impedit veritatis, fugiat ea aperiam consequatur! Voluptas saepe distinctio modi magnam dolore sit!
      Labore quisquam laboriosam quos atque rem, architecto vitae doloribus, quidem eos soluta nesciunt consequatur molestias! Odit fuga praesentium culpa necessitatibus, reiciendis porro libero eaque aut fugit, debitis, sit veniam nisi.
      Minima eius, temporibus expedita perspiciatis fugit, tempore nisi ratione nemo aspernatur adipisci consequuntur suscipit soluta illum? Id aperiam perspiciatis eveniet. Reprehenderit natus fugiat laboriosam eos doloremque sit vero quis ullam.`,
    },
    {
      title: "This is title",
      img: "",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque explicabo error voluptatem eveniet corporis perferendis architecto ea fugit, commodi totam blanditiis omnis, inventore dolores iure porro amet ipsam quas.
      Rem animi ab eos alias voluptatum at voluptas obcaecati cupiditate accusantium odio. Temporibus nesciunt assumenda sed numquam impedit veritatis, fugiat ea aperiam consequatur! Voluptas saepe distinctio modi magnam dolore sit!
      Labore quisquam laboriosam quos atque rem, architecto vitae doloribus, quidem eos soluta nesciunt consequatur molestias! Odit fuga praesentium culpa necessitatibus, reiciendis porro libero eaque aut fugit, debitis, sit veniam nisi.
      Minima eius, temporibus expedita perspiciatis fugit, tempore nisi ratione nemo aspernatur adipisci consequuntur suscipit soluta illum? Id aperiam perspiciatis eveniet. Reprehenderit natus fugiat laboriosam eos doloremque sit vero quis ullam.`,
    },
    {
      title: "This is title",
      img: "",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque explicabo error voluptatem eveniet corporis perferendis architecto ea fugit, commodi totam blanditiis omnis, inventore dolores iure porro amet ipsam quas.
      Rem animi ab eos alias voluptatum at voluptas obcaecati cupiditate accusantium odio. Temporibus nesciunt assumenda sed numquam impedit veritatis, fugiat ea aperiam consequatur! Voluptas saepe distinctio modi magnam dolore sit!
      Labore quisquam laboriosam quos atque rem, architecto vitae doloribus, quidem eos soluta nesciunt consequatur molestias! Odit fuga praesentium culpa necessitatibus, reiciendis porro libero eaque aut fugit, debitis, sit veniam nisi.
      Minima eius, temporibus expedita perspiciatis fugit, tempore nisi ratione nemo aspernatur adipisci consequuntur suscipit soluta illum? Id aperiam perspiciatis eveniet. Reprehenderit natus fugiat laboriosam eos doloremque sit vero quis ullam.`,
    },
  ];
  return (
    <>
      <h1 className="blog-section-title">Blogs</h1>
      <section className="blog-section">
        <div>
          <img src={blogImg} alt="" className="blog-img" />
        </div>
        <div>
          <span className="blog-title">Title</span>
          <p className="blog-desc">
            The Future of Education: Revolutionizing Education with Online
            Learning.
          </p>
          <Link
            to="https://dainikschool.blogspot.com/2023/04/the-future-of-education-revolutionizing.html"
            className="btn btn-success"
          >
            Read more
          </Link>
        </div>
      </section>
    </>
  );
};
