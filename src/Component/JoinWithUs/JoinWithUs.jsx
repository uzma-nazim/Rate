import React from "react";
import shape06 from "@/assets/images/shape-06.png";
import leftArrow from "@/assets/images/icon-arrow-dark.svg";
const JoinWithUs = () => {
  return (
    <div className="join-with-us-box container">
      <div className="join-wrapper">
        <h2 className="h2">
          Join With Us Today & Incrud-ease Your Productivity
        </h2>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>
      <img src={shape06.src} alt=""  className="join-vector"/>
      <button className="round-btn bg-blue">
        contact us
        <img src={leftArrow.src} alt="" />
      </button>
    </div>
  );
};

export default JoinWithUs;
