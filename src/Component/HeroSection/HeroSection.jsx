import React from "react";
import herolight from "@/assets/images/hero-light.png";
import shape01 from "@/assets/images/shape-01.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="container  hero-section-box">
      <div>
        <p className="p1"> 🔥 Rate is one of the best option for you</p>
        <h1 className="h1"> Innovation through exceptional app creation</h1>
        <p className="p2">
          Rate is a pioneering company known for elevating the standards of
          application creation. With a passion for excellence, we specialize in
          delivering exceptional solutions that seamlessly bridge both mobile
          and web platforms. Our dedicated team of experts combines innovation
          and expertise to craft applications that redefine user experiences and
          drive impactful results
        </p>
        <div className="input-box">
          {/* <input
            type="text"
            className="input1"
            placeholder="Enter your email address"
          /> */}
          <Link href="#plans">
            <button className="round-btn bg-blue">Get Started</button>
          </Link>
        </div>

        {/* <p className="p2 text-gray">Try for free no credit card required</p> */}
      </div>
      <div className="image-box">
        <img className="hero-image" src={herolight.src} alt="" />
        <img className="shape1" src={shape01.src} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
