import React, { useRef } from "react";
import CoreFeature from "../CoreFeature/CoreFeature";
import socialbox from "@/assets/images/social-box.svg";
import dotted from "@/assets/images/dot.png";
import web from "@/assets/images/browser.png";
import and from "@/assets/images/game.png";
import ios from "@/assets/images/app-store.png";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const Social = () => {
  const remote = useRef();
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="social-box container">
      <CoreFeature
        elementRef={remote}
        title={"Remote Interaction"}
        btntext={"INTEGRATIONS"}
        para={
          "Experience our versatile Remote Maintenance and Installation solution, conveniently accessible anytime and from anywhere around the globe"
        }
      />
      {/* <img src={socialbox.src} alt="" className="social-img" /> */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,

            transition: {
              duration: 0.8,
              easings: "easeOut",
            },
          },
        }}
        initial={"hidden"}
        animate={mainControls}
        ref={elementRef}
        className="socila-icon-box"
      >
        <div className="orange-circle"></div>
        <div className="yellow-circle"></div>
        <div className="blue-circle"></div>
        <div className="icon-circle">
          <img className="web" src={web.src} alt="" />
        </div>
        <div className="icon-circle androide">
          <img src={and.src} alt="" />
        </div>
        <div className="icon-circle ios">
          <img src={ios.src} alt="" />
        </div>
      </motion.div>

      <img src={dotted.src} className="social-dot" alt="" />
    </div>
  );
};

export default Social;
