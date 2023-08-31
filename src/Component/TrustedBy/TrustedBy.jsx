import React, { useEffect, useRef } from "react";
import cartoonvector from "@/assets/images/cartoon-vector.svg";
import dotted from "@/assets/images/dot.png";
import wave from "@/assets/images/shape-05.png";
import { motion, useAnimation, useInView } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const TrustedBy = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  const data = [
    {
      title: "500K",
      content: "World Wide Clients",
    },
    {
      title: "1M+",
      content: "Downloads",
    },
    {
      title: "865",
      content: "Winning Award",
    },
  ];
  const mainControls2 = useAnimation();
  const element = useRef();
  const isInView = useInView(element, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      mainControls2.start("visible");
    } else {
      // mainControls.start("hidden");
    }
  }, [isInView, mainControls2]);
  return (
    <div className="container truested-by">
      <img src={dotted.src} alt="" className="dotetimage" />
      <img src={wave.src} alt="" className="wave" />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -60 },
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
      >
        <div className="trusted-header">
          <h4 className="h1"> Global Partners</h4>
          <p className="p2">
            Renowned worldwide, our solutions have earned the trust of
            multinational corporations, attesting to their reliability and
            performance
          </p>
        </div>
        <div className="truested-warpper">
          {data.map((item, ind) => {
            const delayMultiplier = 0.2; // Adjust this value to control the delay spacing
            const delay = ind * delayMultiplier;
            return (
              <motion.div
                ref={element}
                key={ind}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: {
                    opacity: 1,
                    y: 0,

                    transition: {
                      delay: delay,
                      duration: 0.7,
                      easings: "easeOut",
                    },
                  },
                }}
                initial={"hidden"}
                animate={mainControls2}
              >
                <h1 className="h1">{item.title}</h1>
                <p className="p3">{item.content}</p>
              </motion.div>
            );
          })}
          {/* <div></div>
          <div>
            <h1 className="h1">12</h1>
            <p className="p3">Downloads</p>
          </div>
          <div>
            <h1 className="h1">0</h1>
            <p className="p3">Winning Award</p>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default TrustedBy;
