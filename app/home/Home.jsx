import React from 'react'
import Slider from './HeroSlider'
import BusType from './BusTypes'
import About from './AboutSection'
import WhyUs from "./WhyUs";
import HomeServices from './HomeServices'
import Banner from './Banner'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Slider />

      <BusType />

      <About />

      <WhyUs />

      <HomeServices />

      <Banner />

      <Testimonials />

    </div>
  )
}

export default Home