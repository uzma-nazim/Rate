import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import { content } from "@/content";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const Testimonial = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  const { testimonial } = content;
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 3000,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    cssEase: "ease-out",
  };
  return (
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
      className="container"
    >
      <Slider {...settings}>
        {testimonial.map((item, ind) => {
          return (
            <div key={ind}>
              <TestimonialCard
                name={item.name}
                email={item.email}
                profilePic={item.profilePic}
                review={item.review}
              />
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default Testimonial;
