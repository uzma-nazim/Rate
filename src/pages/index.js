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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Brandlogo />
      <CoreFeature
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
        title={"Know More About Our Product"}
        btntext={"Description"}
        para={
          "Empowering efficiency and innovation, our diverse lineup of technology products addresses modern challenges with cutting-edge solutions"
        }
      />
</div>
      {/* <ProductGrowth
        disableSecondPara
        title={"Track Your Audience Activities"}
        para={
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le."
        }
        image={aboutlight01}

      /> */}
      <FeatureTabs />
      <TrustedBy />
      <Social />
      <JoinWithUs />
      <Faqs />
      <CoreFeature
        title={"Client’s Testimonials"}
        btntext={"TESTIMONIALS"}
        para={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
        }
      />
      <Testimonial />
      <CoreFeature
        title={"PRICING PLANS"}
        btntext={"Simple Pricing"}
        para={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
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
