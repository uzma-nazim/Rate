import React from "react";
import iconarrowlight from "@/assets/images/icon-arrow-light.svg";
import AccordionsComp from "./Accordions";
import dotted from "@/assets/images/dot.png";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { FiArrowRight } from "react-icons/fi";
import { theme } from "@/utils/theme";

const Faqs = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="container faqs-box ">
      <img src={dotted.src} className="faqs-doted" alt="" />
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,

            transition: {
              duration: 1,
              easings: "easeOut",
            },
          },
        }}
        initial={"hidden"}
        animate={mainControls}
        ref={elementRef}
      >
        <p className="p2 dark-white-text">OUR FAQS</p>
        <h1 className="h1">Frequently Asked Questions</h1>
        <a href="#" className="link1">
          <p className="p2 dark-white-text"> Know More</p>
          {/* <img src={iconarrowlight.src} alt="" /> */}
        <FiArrowRight style={{color:theme.dark?"#fff":"#006bff"}} />

        </a>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,

            transition: {
              duration: 1,
              easings: "easeOut",
            },
          },
        }}
        initial={"hidden"}
        animate={mainControls}
        ref={elementRef}
      >
        <AccordionsComp />
      </motion.div>
    </div>
  );
};

export default Faqs;
