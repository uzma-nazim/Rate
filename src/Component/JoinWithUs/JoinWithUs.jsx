import React from "react";
import shape06 from "@/assets/images/shape-06.png";
import leftArrow from "@/assets/images/icon-arrow-dark.svg";
import Link from "next/link";
import { content } from "@/content";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const JoinWithUs = () => {
  const { contact } = content;
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="join-with-us-box container bg2">
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
        className="join-wrapper"
      >
        <h2 className="h2">Join With Us Today</h2>
        <p className="p2">
          Embark on a journey of heightened productivity by joining us today and
          leveraging the transformative capabilities of Incrud
        </p>
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
        src={shape06.src}
        alt=""
        className="join-vector"
      />
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
        <Link href={contact.mailLink}>
          <button className="round-btn bg-blue">
            Contact us
            <img src={leftArrow.src} alt="" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default JoinWithUs;
