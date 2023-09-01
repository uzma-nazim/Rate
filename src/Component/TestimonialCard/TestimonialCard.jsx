import React from "react";
import user from "@/assets/images/user-02.png";
import { useTheme } from "@/context/ThemeContext";
import { theme } from "@/utils/theme";

const TestimonialCard = ({ name, email, profilePic, review }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="testmonial-card bg2 border-color">
      <div
        className="testimonial-header "
        style={{
          borderBottom: isDarkMode == theme.dark ? "1px solid #2d2f40" : "",
        }}
      >
        <div>
          <p className="p1 dark-white-text"> {name}</p>
          <p className="p2"> {email}</p>
        </div>

        <img src={profilePic ?? user.src} alt="" />
      </div>
      <p className="p2">{review}</p>
    </div>
  );
};

export default TestimonialCard;
