import React from "react";
import aboutlight01 from "@/assets/images/features-light-01.png";
import aboutdark from "@/assets/images/features-dark-01.png";

import iconarrowlight from "@/assets/images/icon-arrow-light.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";

const ProductGrowth = ({
  para2,
  disableSecondPara,
  disableBtn,
  image,
  title,
  para,
}) => {
  const { elementRef, mainControls } = useInViewAnimation();
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="product-feature container">
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
          className="featuer-content"
        >
          <h1 className="h1">{title}</h1>
          <p className="p2 growth-para ">{para}</p>
          {disableSecondPara ? null : (
            <p className="p2 growth-para  topspace">{para2}</p>
          )}
          {disableBtn ? null : (
            <a href="#" className="">
              <p className="p2"> Know More</p>
              <img src={iconarrowlight.src} alt="" />
            </a>
          )}
        </motion.div>
        <motion.img
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
          className="product1"
          src={isDarkMode == theme.light ? aboutlight01.src : aboutdark.src}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductGrowth;
