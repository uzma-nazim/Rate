import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CoreFeature = ({ elementRef, title, btntext, para }) => {
  const mainControls = useAnimation();

  // const elementRef = useRef();
  const isInView = useInView(elementRef, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      // mainControls.start("hidden");

    }
  }, [isInView, mainControls]);
  
  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: -60 },
        visible: {
          opacity: 1,
          y: 0,

          transition: { duration: 0.8, easings: "easeOut" },
        },
      }}
      transition={{ duration: 1 }}
      className="core-feature-box"
    >
      <div className="core-warpper">
        <button className="btn2">{btntext}</button>
        <h1 className="h1">{title}</h1>
        <p className="p2">{para}</p>
      </div>
    </motion.div>
  );
};

export default CoreFeature;
