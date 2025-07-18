import React, { useState } from 'react'
import { motion } from "framer-motion"
import { HiMenu, HiX } from 'react-icons/hi';
import {fadeIn} from '../Utils/motion'
import Advantra from '../assets/Advantra.png'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [activeLink,setActiveLink] = useState('#home');
  
    const navLink =[
         {href:"#home", label:"Home"},
         {href:"#about", label:"About Us"},
         {href:"#services", label:"Our Services"},
         {href:"#testimonials", label:"Testimonials"},
    ]


  return (
    <motion.nav variants={fadeIn('down', 0.2)}
    initial="hideen" 
    whileInview="show"
    viewport={{once: true}}
     className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className=' w-full container  mx-auto flex items-center justify-between px-8 sm:px-6 lg:px-8 h-30 md:h-16'>
               <div className='flex items-center gap-1 cursor-pointer'>
                   {/* <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                   <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div> */}
                   <img src={Advantra} className=' size-52' alt="" />
               </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=' md:hidden p-2'>
                     {
                      isMenuOpen ? <HiX className=' size-6'/> :<HiMenu className=' size-6'/>
                     }
                </button>

              <div className=' hidden items-center md:flex gap-10'> 
            {
                navLink.map((link, index) => (
                    <a key={index} href={link.href}
                      onClick={() => setActiveLink(link.href)}
                     className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all 
                     ${activeLink === link.href ? "text-blue-500 after:w-full ":" text-gray-600  hover:text-gray-900"}`}> 
                    {link.label}</a>
                ))
            }
              </div>


              <button className=' hidden md:block bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium shadow-lg hover:shadow-blue-100'>
                      <a href="#newsletter">Get in touch</a>
              </button>
        </div>
         {/* mobile menuitem */}
         {
          isMenuOpen && (
            <div className=' md:hidden bg-white border-t border-gray-100 py-4'>
                  <div className=' container mx-auto px-4 space-y-3'>
                        {navLink.map((link, index) => (
                          <a
                           key={index}
                           onClick={() => {
                            setActiveLink(link.href);
                             setIsMenuOpen(false);
                           }}
                          className= {`block text-sm font-medium py-2 ${activeLink === link.href
                            ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                          }`} href= {link.href}>{link.label}</a>
                        ))}

                         <button className='w-full bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium shadow-lg hover:shadow-blue-100'>
                                <a href="#newsletter">Get in touch</a>
                        </button>
                  </div>
            </div>
          )
         }
    </motion.nav>
    
  )
}

export default Navbar