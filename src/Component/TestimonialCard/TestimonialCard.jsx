import React from "react";
import user from "@/assets/images/user-02.png";
const TestimonialCard = ({ name, email, profilePic, review }) => {
  return (
    <div className="testmonial-card">
      <div className="testimonial-header">
        <div>
          <p className="p1"> {name}</p>
          <p className="p2"> {email}</p>
        </div>

        <img src={profilePic?? user.src} alt="" />
      </div>
      <p className="p2">{review}</p>
    </div>
  );
};

export default TestimonialCard;
