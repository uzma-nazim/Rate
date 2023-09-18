import React, { useEffect, useState } from "react";
import bluearrow from "@/assets/images/blue-arrow.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { useRouter } from "next/router";
import moment from "moment/moment";
import { AiOutlineArrowRight } from "react-icons/ai";
import { theme } from "@/utils/theme";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import PymentPlanModal from "../PymentPlanModal/PymentPlanModal";
import Toast from "../Toast/Toast";
import { toast } from "react-toastify";
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
  const [planModal, setplanModal] = useState(false);
  const [authDetails, setauthDetails] = useState(false);
  const router = useRouter();

  const attendeesEmails = [
    { email: "user1@example.com" },
    { email: "user2@example.com" },
  ];
  const event = {
    summary: "Coding class",
    location: "Virtual / Google Meet",
    description: "Learn how to code with Javascript",
    start: {
      dateTime: "2022-01-18T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2022-01-18T09:30:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    attendees: attendeesEmails,
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
    conferenceData: {
      createRequest: {
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
        requestId: "coding-calendar-demo",
      },
    },
  };

  const handleGetLink = async (e) => {
    e.preventDefault();
    // const response = await calendar.events.insert({
    //   calendarId: "primary",
    //   resource: event,
    //   conferenceDataVersion: 1,
    // });

    // const {
    //   config: {
    //     data: { summary, location, start, end, attendees },
    //   },
    //   data: { conferenceData },
    // } = response;

    // // Get the Google Meet conference URL in order to join the call
    // const { uri } = conferenceData.entryPoints[0];
    // console.log(
    //   `📅 Calendar event created: ${summary} at ${location}, from ${
    //     start.dateTime
    //   } to ${end.dateTime}, attendees:\n${attendees
    //     .map((person) => `🧍 ${person.email}`)
    //     .join("\n")} \n 💻 Join conference call link: ${uri}`
    // );
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setplanModal(true);
      setauthDetails(tokenResponse);
    },
  });

  
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
      className="pricing-plan bg2 border-color"
    >
      <Toast />

      <PymentPlanModal authDetails={authDetails} open={planModal} setOpen={setplanModal} />
      {popular ? (
        <div className="popular-tag">
          <p className="p4">popular</p>
        </div>
      ) : null}
      <div className="pric-title">
        <h1 className="h1">{tittle}</h1>
        {/* <p className="p2">{count  }</p> */}
      </div>
      <p className="p3 dark-white-text">
        {count} <span className="smallText"> {"Employees"}</span>{" "}
      </p>
      <p className="p2  ">{subtitle}</p>
      <div className="horizontal-line bg3"></div>
      <div className="plan-details">
        <p className="p2 text-dark-blue dark-white-text">{storage}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="p2 text-dark-blue"> {language}</p>
        <p className="p2 text-dark-blue"> {timeline}</p>
        <p className="p2"> {manitaince}</p>
      </div>

      {/* <button onClick={() => login()}>test</button> */}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault(), login();
        }}
        className="get-plan"
      >
        <p className="p2 text-blue dark-white-text">Arrange Meeting</p>

        <FiArrowRight style={{ color: theme.dark ? "#fff" : "#006bff" }} />
      </a>
    </motion.div>
  );
};

export default PricePlanCard;
