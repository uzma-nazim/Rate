import React from "react";
import iconarrowlight from "@/assets/images/icon-arrow-light.svg";
import AccordionsComp from "./Accordions";
import dotted from "@/assets/images/dot.png";

const Faqs = () => {
  return (
    <div className="container faqs-box">
      <img src={dotted.src} className="faqs-doted" alt="" />
      <div>
        <p className="p2">OUR FAQS</p>
        <h1 className="h1">Frequently Asked Questions</h1>
        <a href="#" className="link1">
          <p className="p2"> Know More</p>
          <img src={iconarrowlight.src} alt="" />
        </a>
      </div>
      <AccordionsComp />
    </div>
  );
};

export default Faqs;
