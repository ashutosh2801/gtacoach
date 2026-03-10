import React from 'react'
import Slider from './HeroSlider'
import BusType from './BusTypes'
import About from './AboutSection'
import Partners from './Partners'
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

      <Partners />

      <HomeServices />

      <Banner />

    </div>
  )
}

export default Home