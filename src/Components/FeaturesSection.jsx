import React from 'react'

const FeaturesSection = () => {
     const features = [
    {
      icon: "🎓", 
      title: "Upskill with Confidence",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "👨‍💼",
      title: "Get Expert Guidance", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "⚙️",
      title: "Custom Solutions for Your Business ",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

  return (
    <section className=' w-full  mx-auto px-4 py-16 ' style={{ backgroundColor: '#1668E8' }} >
           <div className=' text-center mb-12'>
               <h2 className='text-3xl font-bold mb-4 text-white'>Support That Moves You Forward</h2>
               <p className=' text-gray-100'>Equipping you with the skills, insights, and solutions to thrive in a tech-driven world.</p>
           </div>
           <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
                 {
                    features.map((feature, index) => (
                        <div key={index} className='flex flex-col text-center items-center p-6'>
                              <div className=' w-24 h-24 rounded-full mb-6 flex items-center justify-center' 
                                style={{backgroundColor: index === 0 ? "#f1eff0" : index === 1 ? "#fef7e7" : "#fff3e4"}}
                              >
                                    <div className=' text-3xl'>{feature.icon}</div>
                              </div>

                             <h3 className=' text-2xl font-medium mb-3 text-white'>{feature.title}</h3>
                             <p className=' text-gray-100 text-center'>{feature.description}</p>
                        </div>
                    ))
                 }
           </div>


           <div className=' text-center mt-12'>
                 <button className=' bg-gray-100  cursor-pointer px-8 py-3 rounded-full font-medium
                  hover:bg-blue-700 hover:text-white transition-colors relative  shadow-2xl'>Get in touch
                           <div className=' absolute -z-10 w-full rounded-full bg-blue-600/50 top-0 left-0 blur-xl'></div>
                  </button>
           </div>
    </section>
  )
}

export default FeaturesSection