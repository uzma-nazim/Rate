import React from "react";
import aboutlight01 from "@/assets/images/features-light-01.png";
import ProductGrowth from "../ProductGrowth/ProductGrowth";
import Slider from "react-slick";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const HrFeature = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 3500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <Slider {...settings}>
      <ProductGrowth
          title={"Attendance Tracking"}
          para={
            " Gain a comprehensive overview of employee attendance within our app, presenting a clear snapshot of their clock-ins, clock-outs, and break times. This real-time view enhances workforce management and informs decision-making"
          }
          para2={
            " Navigate through the app to seamlessly track request statuses, from leaves to remote work approvals. Empower administrators with up-to-date information for efficient resource allocation and streamlined employee management"
          }
          image={aboutlight01}
          disableBtn
        />
        
        <ProductGrowth
          title={"Background Service"}
          para={
            " Enhance app security with background location tracking. Seamlessly monitor employee whereabouts even when the app is inactive, bolstering safety measures"
          }
          para2={
            " Empower administrators with real-time insights into employee movements for effective management. Our app's background location tracking ensures heightened security and operational efficiency"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"User Management"}
          para={
            " Simplify user onboarding with our role-based process, integrating email, usernames, and passwords. Collect essential details like gender, contact info, and profile pictures for comprehensive profiles "
          }
          para2={
            "Empower administrators to efficiently manage roles and access privileges. Users experience a seamless journey with security and personalization at its core"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Multi-branches"}
          para={
            " Experience centralized control over multiple branches with our app, facilitating streamlined management. Allocate employees efficiently across branches, optimizing workforce distribution and operational efficiency "
          }
          para2={
            " Empower administrators to effortlessly oversee diverse locations, ensuring seamless coordination and resource utilization. Our app transforms complex branch management into a cohesive, efficient process, enhancing overall operational effectiveness"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Theme Customisation"}
          // para={" Tailor your viewing experience with our app's personalization options, offering three distinct themes: Dark, Medium, and Light. Choose the theme that suits your preference for a comfortable and visually pleasing interface"}
          para2={
            "From a sleek Dark theme to a balanced Medium theme and a crisp Light theme, our app lets you create a viewing environment that aligns with your style. Enhance usability and aesthetics with personalized themes, making your interaction with the app truly your own"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          disableSecondPara
          title={"Multi-languages"}
          para={
            " Seamlessly catering to global diversity, our app localizes content across seven languages: English, Urdu, Arabic, Hindi, Bangla, Nepali, and Filipino. This multi-lingual approach ensures inclusivity and enhances user experience"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Employee Profile"}
          para={
            "Access comprehensive employee profiles within our app, showcasing detailed information alongside additional insights. Gain a holistic view of each employee, promoting efficient workforce management"
          }
          para2={
            "Empower administrators with essential data for better decision-making, while offering a deeper understanding of team members. Our app transforms employee information into a valuable asset, optimizing operations and fostering a cohesive workplace"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Location Tracking "}
          para={
            "Explore real-time location tracking with our app's robust feature. Seamlessly monitor employee movements, enhancing operational oversight and safety          "
          }
          para2={
            "Empower managers with up-to-the-minute location data, optimizing assignments and decision-making. Visualize office areas on the map for efficient workplace navigation         "
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Messaging Features"}
          para={
            "Elevate your app with versatile chat capabilities, enabling both one-to-one and group messaging. Enhance user collaboration and real-time discussions for streamlined coordination    "
          }
          para2={
            "Seamlessly share audio, images, and videos, facilitating clear conversations. Our chat features leverage local storage for mobile apps and employ sentiment analysis, fostering efficient information sharing and informed decision-making    "
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Request Management"}
          para={
            "Simplify request submission and approval within our attendance and location monitoring app. Effortlessly manage diverse request types such as leaves, remote work, and time-off, streamlining the entire process             "
          }
          para2={
            "Enable employees to submit requests at their convenience while administrators can swiftly review and approve them. Experience seamless communication and enhance operational efficiency with our streamlined request management          "
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Push Notifications"}
          para={
            "Empower your app with the prowess of push notifications. Seamlessly notify employees about clock-ins, break timings, and important updates, ensuring seamless communication"
          }
          para2={
            "Elevate accountability and engagement as notifications keep users informed in real-time. With push notifications, your app becomes a potent tool for enhancing workforce management and facilitating timely responses"
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          title={"Timeline"}
          para={
            "Introducing our app's dynamic timeline feature for precise workforce management. Effortlessly track employee attendance, breaks, and clock-ins for insights that optimize resource allocation.          "
          }
          para2={
            "Navigate through the timeline to gain a comprehensive overview of activities. Enhance staffing strategies, analyze patterns, and elevate operational efficiency like never before   "
          }
          image={aboutlight01}
          disableBtn
        />
        <ProductGrowth
          // disableSecondPara
          title={"App Usage"}
          para={
            "        Unveil the untold story of your app usage history, delving into an intricate web of insights that drive transformative decisions."
          }
          para2={
            "With a seamless workflow refinement, witness your productivity soar to unprecedented heights, reshaping the way you conquer tasks and achieve milestones "
          }
          image={aboutlight01}
          disableBtn
        />
      </Slider>
    </>
  );
};

export default HrFeature;
