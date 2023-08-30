import React from "react";
import brand from "@/assets/images/Picture3.png";
import brand2 from "@/assets/images/Picture21.png";
import brand3 from "@/assets/images/comapny-logo10.png";
import brand4 from "@/assets/images/company-logo3.png";
import brand5 from "@/assets/images/company-logo6.png";
import brand6 from "@/assets/images/company-logo9.png";
const Brandlogo = () => {
  return (
    <div className="light-bg">
      <div className="brandlogo container">
        <img src={brand.src} alt="" />
        <img src={brand2.src} alt="" />
        <img src={brand3.src} alt="" />
        <img src={brand4.src} alt="" />
        <img src={brand5.src} alt="" />
        <img src={brand6.src} alt="" />
      </div>
    </div>
  );
};

export default Brandlogo;
