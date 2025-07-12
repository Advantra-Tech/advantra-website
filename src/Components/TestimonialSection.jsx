import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Client3 from '../assets/Client3.png';
import Client1 from '../assets/Client1.png'
import Client2 from '../assets/Client2.png'

const testimonials = [
    {
      id: 1,
      name: "Mr. Babatunde ",
      Ocuppation: 'Manager, Adron Homes and Properties' ,
      image: Client3,
      text: "Advantra’s AI solutions transformed our operations and elevated our customer experience. Their expertise made the process seamless and impactful — a true asset to our growth.",
    },
    {
      id: 2,
      name: "Muritala Hasibunallah",
      image: Client1, 
      text: " I loved the way our tutors were carrying us along during the sessions. it is clear that they are passionate about what they teach and dedicated to our success",
    },
    {
      id: 3,
      name: "Mr. Genesis",
       Ocuppation: 'Founder & CEO, PaySo Nigeria Limited' ,
      image: Client2,
      text: "Advantra’s AI expertise turned our vision into a secure, user-friendly platform. Their work on fraud detection and verification made PaySo a standout solution. A truly valuable partnership",
    },
    // {
    //   id: 4,
    //   name: "Sarah Johnson",
    //   image: "https://randomuser.me/api/portraits/women/45.jpg",
    //   text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    // },
    // {
    //   id: 5,
    //   name: "Michael Chen",
    //   image: "https://randomuser.me/api/portraits/men/32.jpg",
    //   text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    // },
    // {
    //   id: 6,
    //   name: "Emma Wilson",
    //   image: "https://randomuser.me/api/portraits/women/28.jpg",
    //   text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    // },
  
  ];



const TestimonialSection = () => {
  return (
    <section className=' py-16 px-4 max-w-7xl mx-auto' id='testimonials'>
               <div className=' text-center mb-12 '>
                    <h2 className=' text-3xl font-bold md:text-4xl mb-4 '>Our Success Story</h2>
                     <p className=' '>Stories That Speak for Themselves.</p>
               </div>

               <div className=' relative'>
                    <Swiper
        
                         spaceBetween={30}
        navigation={
          {
             nextEl: '.swiper-button-next-custom',
             prevEl: '.swiper-button-prev-custom',
          }
      }
        breakpoints={{
          6400: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className=" testimonial-Swiper mb-12"
                    >
                       {
                         testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className=' w-full md:py-12 sm:py-4'>
                                          <div className=' text-center  p-4 rounded-lg shadow-md h-full flex flex-col' style={{backgroundColor: '#1668E8'}}>
                                                <div className='w-24 aspect-square overflow-hidden mx-auto mb-4 rounded-full'>
                                                       <img src={testimonial.image} alt="" className=' w-full h-fit object-cover rounded-lg outline-1 outline-gray-900  ' />
                                                 </div>

                                                 <div className=' flex justify-center mb-2'>
                                                       {[...Array(5)].map((_, starIndex) => (
                                                          <span className=' text-yellow-400'>★</span>
                                                       ))}
                                                 </div>
                                                 <h3 className=' text-xl font-semibold mb-3 text-white '>{testimonial.name}</h3>
                                                 <p className=' text-gray-100 font-semibold mb-2'>{testimonial.Ocuppation}</p>
                                                 <p className=' text-gray-100'>{testimonial.text}</p>
                                          </div>
                            </SwiperSlide>
                         ))
                       }

                  </Swiper>

                  {/* <div className=' flex justify-center mt-4 gap-4 md:mt-8'>
                        <button className=' swiper-button-prev-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                                  <BsChevronLeft className=' size-6'/>
                        </button>

                         <button className=' swiper-button-next-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                                  <BsChevronRight className=' size-6'/>
                        </button>
                  </div> */}
            </div>
    </section>
  )
}

export default TestimonialSection