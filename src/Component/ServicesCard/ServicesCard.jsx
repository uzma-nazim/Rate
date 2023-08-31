import React from "react";
import icon01 from "@/assets/images/icon-01.svg";
import { BsBoxSeam } from "react-icons/bs";
const ServicesCard = ({ title, desc, icon, img }) => {
  
  return (
    <div className="services-card">
      <div className="icon-box">{icon ?
      <></>
      // <BsBoxSeam style={{color:"#fff"}}/>
      : <img src={img} alt="" />}</div>
      <h5 className="h4">{title}</h5>
      <p className="p2">{desc}</p>
    </div>
  );
};

export default ServicesCard;
