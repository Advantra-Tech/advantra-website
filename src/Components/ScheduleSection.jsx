import React from 'react'
import  scheduleImage from "../assets/stats.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import Mission from '../assets/Mission.png'

const ScheduleSection = () => {
  return (
    <section className=' w-full mx-auto px-4 py-16 md:py-24   bg-white flex flex-col  
    items-center '  style={{
        // backgroundImage: `url(${Mission})`,
        // backgroundSize: 'justify-between gap-12 md:gap-24 relative md:flex-row',
        // backgroundPosition: 'center',
      }} >
 
                   {/* <div className=' md:w-1/2 w-full'>
                         <img className=' w-full h-auto' src={Mission} alt="" />
                   </div> */}
                            {/* <div className="absolute inset-0 bg-black/60 z-0 h-full"></div> */}
              <div className="w-full flex justify-center items-center px-4">
  <div className="w-full max-w-4xl items-center space-y-6">
    <p className="text-3xl md:text-6xl font-bold text-center" style={{ color: '#1668E8' }}>
      Our Mission
    </p>
</div>
<div className=' w-full'> 
      <p className="text-gray-600 text-lg md:text-4xl">
      At Advantra Technology, we embody the spirit of Ubuntu—a deep commitment to our shared
      humanity and collective advancement. As one of Africa’s fastest-growing technology companies,
      we are devoted to delivering innovative, practical, and scalable solutions that serve both
      the African continent and the wider global market.
      We are a forward-thinking organization driven by a singular purpose: to empower individuals
      and organizations with the skills, tools, and strategies they need to succeed in an
      ever-evolving digital landscape.
    </p>
        <a
      className="text-blue-500 font-semibold flex items-center  mt-5 gap-2 hover:gap-4 transition-all"
      href=""
    >
      READ MORE
      <FaArrowRightLong className="size-8" />
    </a>
</div>



  </div>


                    {/* <div className=' md:w-1/2 w-full relative rounded-lg' style={{ backgroundColor:'#1668E8' }}>
                          <p className='text-3xl md:text-4xl font-bold' style={{ color:'#1668E8' }} >Our Vision</p>

                         <p className=' text-white text-4xl text-left'>To become a global leader in technology education and consulting, empowering individuals and businesses to thrive in the digital age 
                          through innovative learning experiences, tailored solutions, and a thriving tech community. </p>
                          <a className=' text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all' href="">Explore scheduling features
                              <FaArrowRightLong className=' size-8 ' />
                          </a>
                   </div> */}

              {/* <div className=' flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                   <div className=' md:w-1/2 w-full'>
                         <img className=' w-full h-auto' src={Mission} alt="" />
                   </div>
                      <div className=' md:w-1/2 w-full'>
                                            <div className='  w-full   md:mb-36'>
                          <p className='text-3xl md:text-4xl font-bold -mt-40' style={{ color:'#1668E8' }} >Our Mission</p>

                         <p className='mt-7 text-gray-600 text-4xl text-left'>Advantra is committed to providing cutting-edge technology education, fostering innovation, and enabling sustainable growth for individuals and organizations. We aim to bridge the gap between technology and opportunity by offering practical skills, expert consulting, and a supportive environment for learning and collaboration.
                          </p>
                          <a className=' text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all' href="">Read More
                              <FaArrowRightLong className=' size-8 ' />
                          </a>
                   </div>
                   <div className='w-full mt-40 ' style={{ backgroundColor:'#1668E8' }} >
                          <p className='text-3xl md:text-4xl font-bold text-white'  >Our Vision</p>

                         <p className=' mt-7 text-gray-100 text-4xl text-left'>To become a global leader in technology education and consulting, empowering individuals and businesses to thrive in the digital age 
                          through innovative learning experiences, tailored solutions, and a thriving tech community.
                          </p>
                          <a className=' text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all' href="">Read More
                              <FaArrowRightLong className=' size-8 ' />
                          </a>
                    
                   </div>
                      </div>
                   
                
              </div> */}
    </section>
  )
}

export default ScheduleSection