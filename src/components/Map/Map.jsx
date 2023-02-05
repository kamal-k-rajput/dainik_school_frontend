import React from "react";

export const Map = ({ props }) => {
  return (
    <div>
      <iframe
        title="map"
        width="100%"
        height={props.height}
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAtSaQpf_URL0VUzILKTosSqReah5fyUK8&q=${"26.795188,79.500749"}&zoom=17`}
        allowFullScreen
        center={(26.795136, 79.500672)}
      ></iframe>
    </div>
  );
};
