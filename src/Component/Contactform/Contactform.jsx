import React from "react";

import FormBox from "./Form";
import dotted from "@/assets/images/dot.png";


const Contactform = () => {
  return (
    <div className="container contact-form">
      <img src={dotted.src} className="contact-dot" alt="" />

      <FormBox />
      <div className="contact-details">
        <h3 className="h3"> Find us</h3>
        <p className="p1"> Our Loaction</p>
        <p className="p2"> 290 Maryam Springs 260, Courbevoie, Paris, France</p>
        <p className="p1"> Email Address</p>
        <p className="p2"> yourmail@domainname.com</p>
        <p className="p1"> Phone Number</p>
        <p className="p2"> +009 42334 6343 843</p>
      </div>
    </div>
  );
};

export default Contactform;
