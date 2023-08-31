import React from "react";
import bluearrow from "@/assets/images/blue-arrow.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { useRouter } from "next/router";
import moment from "moment/moment";

const PricePlanCard = ({
  delay,
  timeline,
  manitaince,
  language,
  subtitle,
  tittle,
  popular,
  count,
  storage,
}) => {
  const { elementRef, mainControls } = useInViewAnimation();
  const router  = useRouter()
  const handleGetPlan = (e) => {
    e.preventDefault()
    var recipientEmail = " rateeehr@gmail.com";
    var subject = "Consultation";
    var body = `
    
    plan type : ${tittle}\n
    current date:${new Date().getDate()}
    current time:${moment().format("h:mm a")}
    meeting link:https://meet.google.com/?hs=197&authuser=0
    `; // You can use line breaks as "%0A" in the URL

    var gmailComposeURL =
      "https://mail.google.com/mail/u/0/?view=cm&to=" +
      encodeURIComponent(recipientEmail) +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
      router.push(gmailComposeURL)
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,

          transition: {
            delay: delay,

            duration: 0.8,
            easings: "easeOut",
          },
        },
      }}
      initial={"hidden"}
      animate={mainControls}
      ref={elementRef}
      className="pricing-plan"
    >
      {popular ? (
        <div className="popular-tag">
          <p className="p4">popular</p>
        </div>
      ) : null}
      <div className="pric-title">
        <h1 className="h1">{tittle}</h1>
        {/* <p className="p2">{count  }</p> */}
      </div>
      <p className="p3">
        {count} <span className="smallText"> {"Employees"}</span>{" "}
      </p>
      <p className="p2  ">{subtitle}</p>
      <div className="horizontal-line"></div>
      <div className="plan-details">
        <p className="p2 text-dark-blue">{storage}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="p2 text-dark-blue"> {language}</p>
        <p className="p2 text-dark-blue"> {timeline}</p>
        <p className="p2"> {manitaince}</p>
      </div>
      <a href="" onClick={handleGetPlan} className="get-plan">
        <p className="p2 text-blue">Arrange Meeting</p>
        <img src={bluearrow.src} alt="" />
      </a>
    </motion.div>
  );
};

export default PricePlanCard;
