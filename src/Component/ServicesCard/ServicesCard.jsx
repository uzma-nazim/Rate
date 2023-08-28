import React from "react";
import icon01 from "@/assets/images/icon-01.svg";
const ServicesCard = () => {
  return (
    <div className="services-card">
      <div className="icon-box">
        <img src={icon01.src} alt="" />
      </div>
      <h5 className="h4">Crafted for SaaS</h5>
      <p className="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor.
      </p>
    </div>
  );
};

export default ServicesCard;
