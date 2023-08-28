import React from 'react'
import PricePlanCard from '../PricePlanCard/PricePlanCard'
import dotted from "@/assets/images/dot.png";

const PricingPlan = () => {
  return (
    <div className='container price-plan-box'>
      <img src={dotted.src} className="plan-dot" alt="" />

        <PricePlanCard/>
        <PricePlanCard  popular/>
        <PricePlanCard />
    </div>
  )
}

export default PricingPlan