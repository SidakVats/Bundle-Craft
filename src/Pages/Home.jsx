import React from 'react'
import ButtonGradient from "../assets/svg/ButtonGradient"
import Benefits from "../components/Benefits"
import Collaboration from "../components/Collaboration"

import Hero from "../components/Hero"
import Pricing from "../components/Pricing"




const Home = () => {
  return (
    <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8 text-n-1">
       <Hero/>
       <Benefits/>
       <Collaboration/>
       <Pricing/>
      </div>
      <ButtonGradient/>
      
    </>
  )
}

export default Home
