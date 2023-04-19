import React from "react";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "./CustomHeader";
import { Gap } from "./Gap";
import "./youtubeVideo.css";

export const YoutubeVideo = ({ props }) => {
  return (
    <div>
      <Gap />
      {/* <CustomHeader props={{ title: "Our Ambtions" }} /> */}
      <h1>The Wonders of Space: Discovering Our Universe | Dainik School</h1>
      <iframe
        id="youtube-video-iframe"
        src={`https://www.youtube.com/embed/${props.link}`}
        title="Hire top English speakers with TestGorilla’s English C1 test"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="allowFullScreen"
      ></iframe>
      {/* <Footer /> */}
    </div>
  );
};
