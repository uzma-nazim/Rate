import React from "react";
import herolight from "@/assets/images/hero-light.png";
import shape01 from "@/assets/images/shape-01.png";

const HeroSection = () => {
  return (
    <div className="container  hero-section-box">
      <div>
        <p className="p1"> 🔥 Rate is one of the best option for you.</p>
        <h1 className="h1">Complete Tailwind CSS Template for SaaS Website</h1>
        <p className="p2">
        Rate is a complete Tailwind CSS template crafted specially for SaaS,
          Software Mobile App and Web App Sites.
        </p>
        <div className="input-box">
          <input
            type="text"
            className="input1"
            placeholder="Enter your email address"
          />
          <button className="round-btn bg-blue">Get Started</button>
        </div>

        <p className="p2 text-gray">Try for free no credit card required.</p>
      </div>
      <div className="image-box">
        <img className="hero-image" src={herolight.src} alt="" />
        <img className="shape1" src={shape01.src} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
