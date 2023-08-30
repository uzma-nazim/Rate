import React from "react";
import aboutlight01 from "@/assets/images/fearure-screen.png";
import ProductGrowth from "../ProductGrowth/ProductGrowth";
import Slider from "react-slick";

const HrFeature = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <ProductGrowth
        disableSecondPara
        title={"Attendance Tracking"}
        para={
          " Comprehensive view of employee attendance          and their request statuses"
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Background Service"}
        para={
          " Background location tracking for enhanced          security and monitoring"
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        para2={"Convenient management of account information"}
        title={"User Management"}
        para={
          " Role onboarding process involves email          usernames and passwords for users "
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Multi-branch Support"}
        para={
          " Centralised management of multiple branches          and efficient employee allocation "
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Theme Customisation"}
        para={" Personalise viewing experience with multiple themes"}
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Multi-language Support"}
        para={" Localises 7 languages seamlessly"}
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Employee Profile"}
        para={
          "Detailed employee information with additional          information shown"
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Location Tracking "}
        para={"Real-time location tracking of employees          "}
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Messaging Features"}
        para={
          "Chat features one-to-one and group messaging,          audio, images, and videos          "
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Request Management"}
        para={
          "Streamlined request submission and approval   process for various types of requests               "
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Push Notifications"}
        para={
          "Push Notifications for important events and updates              "
        }
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"Timeline"}
        para={"Access employee data for informed HR decision          "}
        image={aboutlight01}
        disableBtn
      />
      <ProductGrowth
        disableSecondPara
        title={"App Usage"}
        para={"Track app usage history, streamline workflows, and       improve productivity          "}
        image={aboutlight01}
        disableBtn
      />
    </Slider>
  );
};

export default HrFeature;
