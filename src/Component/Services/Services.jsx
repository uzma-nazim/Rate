import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { content } from "@/content";
import { useRouter } from "next/router";
// import content from "@/content.js";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const Services = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  const { services } = content;
  const router = useRouter();

  return (
    <>
      <div id="product" className="container">
        <motion.div
          ref={elementRef}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,

              transition: {
                // delay: delay,
                duration: 0.8,
                easings: "easeOut",
              },
            },
          }}
          initial={"hidden"}
          animate={mainControls}
          className="services-box"
        >
          {services.slice(0, 3).map((item, ind) => {
            const delayMultiplier = 0.2; // Adjust this value to control the delay spacing
            const delay = ind * delayMultiplier;
            return (
              <div key={ind}>
                <ServicesCard
                  title={item.tittle}
                  desc={item.content}
                  icon={item.icon}
                  img={item.img}
                />
              </div>
            );
          })}
        </motion.div>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <button
            onClick={() => router.push("/services")}
            className="round-btn light-blue"
            style={{ borderRadius: "10px" }}
          >
            View All
          </button>
        </div> */}
      </div>
      {/* <div className="services-box container top-space">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div> */}
    </>
  );
};

export default Services;
