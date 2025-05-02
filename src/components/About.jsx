import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
    
    className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden bg-yellow-50 w-full'
    id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'><span>About</span>
        <span className='ml-2 underline underline-offset-4 decoration-1 under font-light'>Mirema
         Blossom Homes</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>A Peaceful Escape in Full Bloom</p>
         <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg rounded-t-full'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
              <p className='my-10 max-w-lg mt-10'>Nestled in the peaceful and well-connected neighborhood of Mirema,
                 Nairobi, Mirema Blossom Homes offers a premium Airbnb experience designed for travelers seeking
                  both comfort and convenience. Our beautifully furnished apartments blend stylish modern interiors
                   with the warmth of home, making them ideal for solo travelers, couples, families, or even business
                    guests.

                  Each unit is thoughtfully equipped with essential amenities including high-speed Wi-Fi, fully stocked
                    kitchens, spacious living areas, smart TVs, and cozy bedding to ensure a restful stay. Guests enjoy
                      24/7 security, ample parking, and proximity to major roads, shopping malls, schools, and healthcare 
                        facilities.

                Whether you're staying for a night or a few weeks, Mirema Blossom Homes offers a tranquil escape 
                  within the city — a perfect base to explore Nairobi while enjoying the privacy and calm of a residential 
                    setting.</p>
                  <button className='bg-assent text-white px-8 py-2 rounded'>Check Accomodation</button>
            </div>
         </div>
    </motion.div>
  )
}

export default About