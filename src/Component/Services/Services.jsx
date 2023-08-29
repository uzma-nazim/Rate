import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { content } from "@/content";
import { useRouter } from "next/router";
// import content from "@/content.js";

const Services = () => {
  const { services } = content;
  const router = useRouter();
  console.log("services", services);
  return (
    <>
      <div className="container">
        <div className="services-box ">
          {services.slice(0, 3).map((item) => {
            console.log("item", item);
            return (
              <ServicesCard
                title={item.tittle}
                desc={item.content}
                icon={item.icon}
                img={item.img}
              />
            );
          })}
        </div>
        <div className="services-box  top-space">
          {services.slice(3, 6).map((item) => {
            console.log("item", item);
            return (
              <ServicesCard
                title={item.tittle}
                desc={item.content}
                icon={item.icon}
                img={item.img}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <button
            onClick={() => router.push("/services")}
            className="round-btn light-blue"
            style={{ borderRadius: "10px" }}
          >
            View All
          </button>
        </div>
      </div>
      {/* <div className="services-box container top-space">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div> */}
    </>
  );
};

export default Services;
