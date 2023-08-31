import React from "react";
import PricePlanCard from "../PricePlanCard/PricePlanCard";
import dotted from "@/assets/images/dot.png";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hook/useInViewAnimation";
import { useRouter } from "next/router";

const PricingPlan = () => {

  return (
    <div className="container price-plan-box" id="plans">
      <img src={dotted.src} className="plan-dot" alt="" />

      <PricePlanCard
        delay={0.2}
        tittle="Basic"
        count="10-49"
        storage="300 GB Storage"
        subtitle="It is preferred for small businesses seeking tailored solutions"
        language=" "
        manitaince=" "
        timeline=""
      />
      <PricePlanCard
        popular
        delay={0.4}
        tittle="Standard"
        count=" 50-249"
        storage="600 GB Storage"
        manitaince=" "
        timeline=" "
        language=""
        subtitle="Medium-sized businesses favor this  for personalized solutions"
      />
      <PricePlanCard
        delay={0.6}
        storage="900 GB Storage"
        language=" "
        timeline=" "
        manitaince=""
        tittle="Premium"
        count="250+"
        subtitle="It is  favored by large enterprises seeking comprehensive solutions"
      />
    </div>
  );
};

export default PricingPlan;
