import React from "react";
import bluearrow from "@/assets/images/blue-arrow.svg";
const PricePlanCard = ({ popular }) => {
  return (
    <div className="pricing-plan">
      {popular ? (
        <div className="popular-tag">
          <p className="p4">popular</p>
        </div>
      ) : null}
      <div className="pric-title">
        <h1 className="h1">$10</h1>
        <p className="p2">/month</p>
      </div>
      <p className="p3">Small Pack</p>
      <p className="p2  ">
        Lorem ipsum dolor sit amet, consec adipisicing elit.
      </p>
      <div className="horizontal-line"></div>
      <div className="plan-details">
        <p className="p2 text-dark-blue">300 GB Storage</p>
        <p className="p2 text-dark-blue"> Unlimited Photos and Videos</p>
        <p className="p2 text-dark-blue"> Exclusive Support</p>
        <p className="p2"> Custom Branding Strategy</p>
      </div>
      <a href="" className="get-plan">
        <p className="p2 text-blue">Get the Plan</p>
        <img src={bluearrow.src} alt="" />
      </a>
    </div>
  );
};

export default PricePlanCard;
