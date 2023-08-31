import React from "react";
import CoreFeature from "../CoreFeature/CoreFeature";
import socialbox from "@/assets/images/social-box.svg";
import dotted from "@/assets/images/dot.png";
import web from "@/assets/images/web.png";
import and from "@/assets/images/and.png";
import ios from "@/assets/images/ios.png";

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
      {/* <img src={socialbox.src} alt="" className="social-img" /> */}
      <div className="socila-icon-box">
        <div className="orange-circle"></div>
        <div className="yellow-circle"></div>
        <div className="blue-circle"></div>
        <div className="icon-circle">
          <img src={web.src} alt="" />
        </div>
        <div className="icon-circle androide">

        <img src={and.src} alt="" />

        </div>
        <div className="icon-circle ios">
        <img src={ios.src} alt="" />

        </div>
      </div>

      <img src={dotted.src} className="social-dot" alt="" />
    </div>
  );
};

export default Social;
