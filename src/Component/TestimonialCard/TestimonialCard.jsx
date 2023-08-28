import React from "react";
import user from "@/assets/images/user-02.png";
const TestimonialCard = () => {
  return (
    <div className="testmonial-card">
      <div className="testimonial-header">
        <div>
          <p className="p1"> Devid Smith</p>
          <p className="p2"> Founter @democompany</p>
        </div>

        <img src={user.src} alt="" />
      </div>
      <p className="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi,
        convallis fringilla ante nibh non urna.
      </p>
    </div>
  );
};

export default TestimonialCard;
