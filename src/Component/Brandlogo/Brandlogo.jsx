import React from "react";
import brand from "@/assets/images/brand-light-01.svg";
import brand2 from "@/assets/images/brand-light-02.svg";
import brand3 from "@/assets/images/brand-light-03.svg";
import brand4 from "@/assets/images/brand-light-04.svg";
import brand5 from "@/assets/images/brand-light-05.svg";
import brand6 from "@/assets/images/brand-light-06.svg";
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
