import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
import headerImage from '/public/header_img.png';

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center
    flex items-center w-full overflow-hidden' 
     style={{ backgroundImage: `url(${headerImage})` }} id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
            max-w-3xl font-semibold pt-20'>A Peaceful Escape in Full Bloom</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-6 '>
                <a href="#Gallery" className=' hover:bg-assent border border-white px-8 py-3 rounded'>Our Gallery</a>
                <a href="#booking" className='bg-assent px-8 py-3 rounded'>Book Your Stay</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header