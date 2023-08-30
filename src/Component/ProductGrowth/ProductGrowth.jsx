import React from "react";
import aboutlight01 from "@/assets/images/about-light-02.png";
import iconarrowlight from "@/assets/images/icon-arrow-light.svg";
const ProductGrowth = ({
  para2,
  disableSecondPara,
  disableBtn,
  image,
  title,
  para,
}) => {
  
  return (
    <div className="product-feature container">
      <div className="featuer-content">
        <div className="new-btn-box">
          <p className="p2 text-dark-blue"> GROW YOUR BUSINESS FASTER</p>
        </div>
        <h1 className="h1">{title}</h1>
        <p className="p2 growth-para ">{para}</p>
        {disableSecondPara ? null : <p className="p2 growth-para  topspace">{para2}</p>}
        {disableBtn ? null : (
          <a href="#" className="">
            <p className="p2"> Know More</p>
            <img src={iconarrowlight.src} alt="" />
          </a>
        )}
      </div>
      <img className="product1" src={image?.src} alt="" />
    </div>
  );
};

export default ProductGrowth;
