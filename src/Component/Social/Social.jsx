import React from "react";
import CoreFeature from "../CoreFeature/CoreFeature";
import socialbox from "@/assets/images/social-box.svg";
import dotted from "@/assets/images/dot.png";

const Social = () => {
  return (
    <div className="social-box container">
      <CoreFeature
        title={"Remotely Maintain Your Data, From Anywhere, Anytime."}
        btntext={"INTEGRATIONS"}
        para={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
        }
      />
      <img src={socialbox.src} alt="" className="social-img" />
      <img src={dotted.src} className="social-dot" alt="" />
    </div>
  );
};

export default Social;
