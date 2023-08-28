import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  return (
    <>
      <div className="services-box container">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
      <div className="services-box container top-space">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </>
  );
};

export default Services;
