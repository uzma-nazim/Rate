import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1500,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      // {
      //   breakpoint: 1700,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
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
    <div className="container">
      <Slider {...settings}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </div>
  );
};

export default Testimonial;
