import React from "react";
import { Footer } from "../Footer/Footer";
import { CustomHeader } from "./CustomHeader";
import { Gap } from "./Gap";

export const YoutubeVideo = () => {
  return (
    <div>
      <Gap />
      <CustomHeader props={{ title: "Our Ambtions" }} />
      <iframe
        width="996"
        height="560"
        src="https://www.youtube.com/embed/t3WueXFcEcg"
        title="Hire top English speakers with TestGorilla’s English C1 test"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <Footer />
    </div>
  );
};
