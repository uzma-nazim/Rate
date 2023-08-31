import React from "react";
import herolight from "@/assets/images/hero-light.png";
import shape01 from "@/assets/images/shape-01.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// const motion = dynamic(
//   () => import("framer-motion").then((module) => module.motion),
//   { ssr: false }
// );

const HeroSection = () => {
  return (
    <div id="home" className="container  hero-section-box">
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
        animate={[
          
          { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeOut" } }, // Faster accel
          {
            opacity: 1,
            x: 0,
            transition: { duration: 1.1, ease: "easeInOut" },
          }, // Normal start
        ]}
      >
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
          <Link href="#plans">
            <button className="round-btn bg-blue">Get Started</button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="image-box"
        initial={{ opacity: 0, x: 50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
        animate={[
          // { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeOut" } }, // Sudden start
          // { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }, // Slower end
          { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeOut" } }, // Faster accel
          {
            opacity: 1,
            x: 0,
            transition: { duration: 1.1, ease: "easeInOut" },
          },
        ]}
      >
        <img className="hero-image" src={herolight.src} alt="" />
        <img className="shape1" src={shape01.src} alt="" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
