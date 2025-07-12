import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'



const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "EdTech",
      description: "We offer practical tech courses that transform beginners into confident, job-ready professionals",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Consultation", 
      description: "We turn complex business needs into scalable, high-impact digital solutions that drive growth.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Analytics Arm",
      description: "We generate insights that drive smarter decisions across the education ecosystem.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "AI-powered learning",
      description: "Our AI-driven platform transforms how people learn with smart, adaptive content delivery",
      link: "#learn-more"
    }
  ]

const ServiceSection = () => {
  return (
    <section className=' py-20  w-full mx-auto px-4 sm:px-6 lg:px-8'  style={{ backgroundColor: '#1668E8' }}  id='services'>
              <div className='container  w-full  mx-auto  flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
                    <div className=' md:w-1/3 w-full'>
                           <h2 className=' text-3xl md:text-4xl text-white font-bold mb-6 md:w-4/5'>Empowering You with Skills for the Future</h2>
                           <p className='text-white text-lg mb-4 md:w-4/5'>We empower individuals and businesses with practical skills and innovative solutions tailored to thrive in a tech-driven world</p>
                           {/* <div className=' space-y-3' >
                                 <div className=' flex items-center gap-2'>
                                       <div className=' w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                             <div className=' w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                                       </div>
                                       <span className=' text-gray-600'>UX design content strategy</span>
                                 </div>


                                  <div className=' flex items-center gap-2'>
                                       <div className=' w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                             <div className=' w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                                       </div>
                                       <span className=' text-gray-600'>Development bring </span>
                                 </div>
                           </div> */}

                           <button className=' mt-8 bg-gray-100  hover:text-white px-8 py-3 cursor-pointer rounded-full
                            hover:bg-indigo-700 transition-colors'>Get Started</button>
                    </div>

                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                           {
                              services.map((service, index) => (
                                    <div key={index} className=' bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300'>
                                          <div className=' mb-4'>{service.icon}</div>

                                          <h3 className=' text-xl font-semibold mb-2'>{service.title}</h3>
                                          <p className=' text-gray-600 mb-4'>{service.description}</p>
                                          <a href={service.link} className=' text-indigo-600 font-medium hover:text-indigo-700 transition-colors '>LEARN MORE</a>
                                    </div> 
                              ))
                           }
                    </div>
              </div>
    </section>
  )
}

export default ServiceSection