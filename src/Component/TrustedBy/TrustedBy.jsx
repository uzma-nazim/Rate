import React from "react";
import cartoonvector from "@/assets/images/cartoon-vector.svg";
import dotted from "@/assets/images/dot.png";
import wave from "@/assets/images/shape-05.png";

const TrustedBy = () => {
  return (
    <div className="container truested-by" >
      {/* <img src={cartoonvector.src} alt="" className="cartoon-vector" /> */}
      <img src={dotted.src} alt="" className="dotetimage" />
      <img src={wave.src} alt="" className="wave" />
      <div className="trusted-header">
        <h4 className="h1">Trusted by Global Companies.</h4>
        <p className="p2">
        Renowned worldwide, our solutions have earned the trust of multinational corporations, attesting to their reliability and performance
        </p>
      </div>
      <div className="truested-warpper">
        <div>
          <h1 className="h1">1</h1>
          <p className="p3">World Wide Clients</p>
        </div>
        <div>
          <h1 className="h1">12</h1>
          <p className="p3">Downloads</p>
        </div>
        <div>
          <h1 className="h1">0</h1>
          <p className="p3">Winning Award</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
