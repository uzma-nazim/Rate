import React from "react";
import cartoonvector from "@/assets/images/cartoon-vector.svg";
import dotted from "@/assets/images/dot.png";
import wave from "@/assets/images/shape-05.png";

const TrustedBy = () => {
  return (
    <div className="container truested-by" >
      <img src={cartoonvector.src} alt="" className="cartoon-vector" />
      <img src={dotted.src} alt="" className="dotetimage" />
      <img src={wave.src} alt="" className="wave" />
      <div className="trusted-header">
        <h4 className="h1">Trusted by Global Companies.</h4>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>
      <div className="truested-warpper">
        <div>
          <h1 className="h1">500k</h1>
          <p className="p3">World Wide Clients</p>
        </div>
        <div>
          <h1 className="h1">1M+</h1>
          <p className="p3">Downloads</p>
        </div>
        <div>
          <h1 className="h1">500k</h1>
          <p className="p3">World Wide Clients</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
