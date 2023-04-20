import React from "react";
import { YoutubeVideo } from "../../../Tools/YoutubeVideo";
import { Gap } from "../../../Tools/Gap";
import { CustomHeader } from "../../../Tools/CustomHeader";
import { Footer } from "../../../Footer/Footer";

export function ScienceCourseDetails() {
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Free video for Science" }} />
      <YoutubeVideo
        props={{
          link: "lkq_kx_NiU8",
          title:
            "The Wonders of Space: Discovering Our Universe | Dainik School",
        }}
      />
      <button className="btn btn-success buy-btn">Buy Complete Course</button>
      <Footer />
    </>
  );
}
