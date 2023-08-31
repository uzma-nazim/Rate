import React from "react";

import FormBox from "./Form";
import dotted from "@/assets/images/dot.png";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const Contactform = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="container contact-form">
      <img src={dotted.src} className="contact-dot" alt="" />

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
        <p className="p1"> Our Loaction</p>
        <p className="p2"> Saudia Arabia </p>
        <p className="p1"> Email Address</p>
        <p className="p2"> rateeehr@gmail.com</p>
        <p className="p1"> Phone Number</p>
        <p className="p2">-</p>
      </motion.div>
    </div>
  );
};

export default Contactform;
