import React from "react";
import { Form } from "react-bootstrap";
import leftArrow from "@/assets/images/icon-arrow-dark.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";

const FormBox = () => {
  const { elementRef, mainControls } = useInViewAnimation();
  const { isDarkMode, toggleTheme } = useTheme();

  const inputSTyle = {
    
    color: isDarkMode == theme.light ? "#252a42" : "#fff  ",
    borderColor: isDarkMode == theme.light ? "#eeeeee" : "#2d2f40 ",
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
    className="form-box bg">
      <h3 className="h3">Send a message</h3>
      <div>
        <div className="input-box">
          <input style={inputSTyle} type="text" placeholder="Full name" className="input2" />
          <input style={inputSTyle}  type="text" placeholder="Email address" className="input2" />
        </div>
        <div className="input-box">
          <input style={inputSTyle}  type="text" placeholder="Subject" className="input2" />
          <input style={inputSTyle}  type="text" placeholder="Phone number" className="input2" />
        </div>
        {/* <div className="horizontal-line"></div> */}
        <textarea
        style={inputSTyle} 
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
          <button className="round-btn bg-blue bg2">
            Send
            <img src={leftArrow.src} alt="" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FormBox;
