import React from "react";
import { Gap } from "./Gap";
import "./youtubeVideo.css";

export const YoutubeVideo = ({ props }) => {
  return (
    <div>
      <Gap />
      <h1>{props.title}</h1>
      <iframe
        id="youtube-video-iframe"
        src={`https://www.youtube.com/embed/${props.link}`}
        title="Hire top English speakers with TestGorilla’s English C1 test"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};
