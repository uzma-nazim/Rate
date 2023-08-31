import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import { content } from "@/content";

const Testimonial = () => {
  const { testimonial } = content;
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
        {testimonial.map((item) => {
          return (
            <TestimonialCard
              name={item.name}
              email={item.email}
              profilePic={item.profilePic}
              review={item.review}
            />
          );
        })}
        {/* <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
         */}
      </Slider>
    </div>
  );
};

export default Testimonial;
