import React from "react";
import { Form } from "react-bootstrap";
import leftArrow from "@/assets/images/icon-arrow-dark.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";

const FormBox = () => {
  const { elementRef, mainControls } = useInViewAnimation();

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
    className="form-box">
      <h3 className="h3">Send a message</h3>
      <div>
        <div className="input-box">
          <input type="text" placeholder="Full name" className="input2" />
          <input type="text" placeholder="Email address" className="input2" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Subject" className="input2" />
          <input type="text" placeholder="Phone number" className="input2" />
        </div>
        {/* <div className="horizontal-line"></div> */}
        <textarea
          className="input2"
          name=""
          id=""
          rows={3}
          placeholder="Message"
        ></textarea>
        <div className="form-bottom">
          <div className="check-box">
            <Form.Check aria-label="option 1" />
            <p className="p2">
              By clicking Checkbox, you agree to use our “Form” terms And
              consent cookie usage in browser.
            </p>
          </div>
          <button className="round-btn bg-blue">
            Send
            <img src={leftArrow.src} alt="" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FormBox;
