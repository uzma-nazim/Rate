import React from "react";

import FormBox from "./Form";
import dotted from "@/assets/images/dot.png";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import darkdotted from "@/assets/images/shape-dotted-dark-02.svg";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";

const Contactform = () => {
  const { isDarkMode } = useTheme();

  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="container contact-form bg2">
      {/* <img src={dotted.src} className="contact-dot" alt="" /> */}
      <img
        src={isDarkMode == theme.dark ? darkdotted.src : dotted.src}
        alt=""
        className="contact-dot"
      />
      <FormBox />
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
        className="contact-details"
      >
        <h3 className="h3"> Find us</h3>
        <p className="p1 dark-white-text"> Our Loaction</p>
        <p className="p2"> Saudia Arabia </p>
        <p className="p1 dark-white-text"> Email Address</p>
        <p className="p2"> rateeehr@gmail.com</p>
        <p className="p1 dark-white-text"> Phone Number</p>
        <p className="p2">-</p>
      </motion.div>
    </div>
  );
};

export default Contactform;
