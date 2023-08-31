import React from "react";
import logo from "@/assets/images/logo.png";
import localFont from "next/font/local";
import { BiLogoFacebook, BsInstagram } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const myFont = localFont({ src: "../../assets/font/corporate-normal.otf" });
const Footer = () => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <div className="container">
        {/* <div className=" footer-box">
          <div className="footer-warapper">
            <div className="header-logo">
              <img src={logo.src} alt="" />
              <h5 className={myFont.className}> Rate</h5>
            </div>
            <p className="p2 text-gray footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="p4 uppercase">CONTACT</p>
            <p className="p6"> rateeehr@gmail.com</p>
          </div>
          <div className="footer-link">
            <p className="p6"> Quick Links</p>
            <a href="">
              <p className="p2"> Home</p>
            </a>
            <a href="">
              <p className="p2"> Product</p>
            </a>
            <a href="">
              <p className="p2"> Careers</p>
            </a>
            <a href="">
              <p className="p2"> Pricing</p>
            </a>
          </div>
          <div className="footer-link">
            <p className="p6"> Support</p>
            <a href="">
              <p className="p2"> Company</p>
            </a>
            <a href="">
              <p className="p2"> Press media</p>
            </a>
            <a href="">
              <p className="p2"> Our Blog</p>
            </a>
            <a href="">
              <p className="p2"> Contact Us</p>
            </a>
          </div>
          <div className="footer-link">
            <p className="p6"> Quick Links</p>

            <p className="p2"> Subscribe to receive future updates</p>
            <input type="text" className="input1" placeholder="Email Address" />
          </div>
        </div> */}

        <div className="footer-bottom">
          <div className="footer-bottom-link">
            {/* <a href="">
              <p className="p2"> English</p>
            </a> */}
            <Link href="https://rate-d1e9d.web.app/" target="_blank">
              <p className="p2"> Privacy Policy</p>
            </Link>
            <Link href="https://rate-d1e9d.web.app/feedback"  target="_blank">
              <p className="p2"> Support</p>
            </Link>
          </div>
          <p className="p2"> © {new Date().getFullYear()} Rate. All rights reserved</p>
          <div className="footer-icon">
            <FaLinkedinIn />
            <FiInstagram />
            <BiLogoFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
