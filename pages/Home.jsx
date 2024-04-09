import CaseStudiesSection from '@/components/Home/CaseStudiesSection'
import Faq from '@/components/Home/Faq'
import FindOurOfficesSection from '@/components/Home/FindOurOfficesSection'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'
import IndustriesSection from '@/components/Home/IndustriesSection'
import LandingContactUs from '@/components/Home/LandingContactUs'
import Process from '@/components/Home/Process'
import ServicesSection from '@/components/Home/ServicesSection'
import Slider from '@/components/Home/Slider'
import Technologies from '@/components/Home/Technologies'
import Testimonials from '@/components/Home/Testimonials'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import Cursor from '@/components/global/Cursor'
import FixedSocials from '@/components/global/FixedSocials'
import Navbar from '@/components/global/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
    <Cursor/>
     <Navbar/>
     <Hero/>

     <div className="scroller relative w-full h-96" data-speed="fast">
        <Slider />
      </div>
       <Technologies />
      <CaseStudiesSection />
      <ServicesSection />
      <Process />
      <WhyChooseUsSection />
      <IndustriesSection />
      <Testimonials />
      <Faq />
      <LandingContactUs />
      <FindOurOfficesSection />
      <Footer />
      <FixedSocials />
    </div>
  )
}

export default Home
