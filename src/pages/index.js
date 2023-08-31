import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Component/Header/Header'
import HeroSection from '@/Component/HeroSection/HeroSection'

import Brandlogo from '@/Component/Brandlogo/Brandlogo'
import CoreFeature from '@/Component/CoreFeature/CoreFeature'
import Services from '@/Component/Services/Services'
import ProductFeature from '@/Component/ProductFeature/ProductFeature'
import ProductGrowth from '@/Component/ProductGrowth/ProductGrowth'
import FeatureTabs from '@/Component/FeatureTabs/FeatureTabs'
import aboutlight01 from "@/assets/images/about-light-02.png";
import TrustedBy from '@/Component/TrustedBy/TrustedBy'
import Social from '@/Component/Social/Social'
import JoinWithUs from '@/Component/JoinWithUs/JoinWithUs'
import Faqs from '@/Component/Faqs/Faqs'
import Testimonial from '@/Component/Testimonial/Testimonial'
import PricingPlan from '@/Component/PricingPlan/PricingPlan'
import Contactform from '@/Component/Contactform/Contactform'
import Footer from '@/Component/Footer/Footer'
import { useRef } from 'react'
import useInViewAnimation from '@/Hook/useInViewAnimation'
import { motion } from "framer-motion";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { elementRef, mainControls } = useInViewAnimation();

  const company = useRef(null)
  const product = useRef(null)
  const testimonial = useRef(null)
  const palns = useRef(null)
  return (
    <>
      <div className='line-animation'></div>
      <Header />
      <HeroSection />
      <Brandlogo />
      <CoreFeature
        elementRef={company}
        title={"Our Company's Products"}
        btntext={"Products"}
        para={
          "Revolutionizing industries, our pioneering solution seamlessly blends advanced technologies with Innovative Solutions"
        }
      />
      <Services />
      {/* <ProductFeature /> */}
      <div className='knowMoreProduct'>
        <CoreFeature
          elementRef={product}
          title={"Know More About Our Product"}
          btntext={"Description"}
          para={
            "Empowering efficiency and innovation, our diverse lineup of technology products addresses modern challenges with cutting-edge solutions"
          }
        />
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -60 },
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
      >
        <FeatureTabs />
      </motion.div>

      <TrustedBy />
      <Social />
      <JoinWithUs />
      <Faqs />
      <CoreFeature
        elementRef={testimonial}
        title={"Client’s Testimonials"}
        btntext={"TESTIMONIALS"}
        para={
          "Listening to our clients' success stories resonates deeply, echoing the quality of our services"
        }
      />
      <Testimonial />
      <CoreFeature
        elementRef={palns}
        title={"PRICING PLANS"}
        btntext={"Simple Pricing"}
        para={
          "Explore versatile pricing plans to match your needs. From budget-friendly options to scalable features, find your ideal plan with transparent pricing"
        }

      />
      <PricingPlan />
      <Contactform />
      <Footer />
      {/*

 */}
    </>
  )
}
