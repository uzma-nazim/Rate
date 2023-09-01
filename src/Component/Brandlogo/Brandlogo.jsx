import React from "react";
import brand from "@/assets/images/Picture3.png";
import brand2 from "@/assets/images/Picture21.png";
import brand3 from "@/assets/images/comapny-logo10.png";
import brand4 from "@/assets/images/company-logo3.png";
import brand5 from "@/assets/images/company-logo6.png";
import brand6 from "@/assets/images/company-logo9.png";
import { motion } from "framer-motion";

const Brandlogo = () => {
  const logo = [brand, brand2,  brand4, brand5, brand6];
  return (
    <div className="light-bg border-color brandlogo-container">
      <div className="brandlogo container ">
        {logo.map((item, ind) => {
            const delayMultiplier = 0.2; // Adjust this value to control the delay spacing
            const delay = ind * delayMultiplier;
          return (
            <motion.img
            key={ind}
              initial={{ opacity: 0, y: -50,  }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1, y: 0 }}
              src={item.src}
              transition={{duration:1, delay:delay, easings:"easeOut"}}
              alt=""
            />
          );
        })}
        {/* <img src={brand2.src} alt="" />
        <img src={brand3.src} alt="" />
        <img src={brand4.src} alt="" />
        <img src={brand5.src} alt="" />
        <img src={brand6.src} alt="" /> */}
      </div>
    </div>
  );
};

export default Brandlogo;
