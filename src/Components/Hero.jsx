import React from 'react'
import heroImage from "../assets/hero-image.png"
import landing from '../assets/landing.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../Utils/motion'

const Hero = () => {
  return (
    <section
  id="home"
  className="w-full relative flex flex-col md:flex-row justify-center items-center pt-44 pb-16 px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* 🔲 Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>


  <div className="w-full flex flex-col items-center justify-center space-y-8 relative z-10 text-center">
    <h1 className="text-4xl text-white md:text-5xl lg:text-7xl font-bold leading-tight">
      Bridging the Gap Between
    </h1>
    <p
      className="text-4xl -mt-8 md:text-5xl lg:text-7xl font-bold rounded-2xl p-1"
      style={{ color: '#1668E8' }}
    >
      Tech and Opportunity
    </p>
    <p className="text-gray-100 text-lg md:text-xl max-w-xl">
      With skills training, expert guidance, and a supportive learning environment.
    </p>
  </div>
</section>

  )
}

export default Hero