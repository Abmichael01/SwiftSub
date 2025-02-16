import AboutUs from '@/components/Home/AboutUs'
import Banner from '@/components/Home/GetStarted'
import Hero from '@/components/Home/Hero/Hero'
import Services from '@/components/Home/Services'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className=''>
        <Hero />
        <AboutUs />
        <Services />
        <Banner />
    </div>
  )
}

export default Home