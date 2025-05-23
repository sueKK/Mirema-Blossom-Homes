import React, {useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
       document.body.style.overflow = 'auto'
    }
    return ()=>{
       document.body.style.overflow = 'auto'
    };
},[showMobileMenu])
  
  return (
    <div className='absolute top-0 left-0 w-full z-10 justify-center flex items-center px-6 py-4'>
        <div className='container mx-auto flex justify-between
        items-center py-4 px-6 md:px-20 lg:px-32 
        bg-transparent'>
           <div className="flex items-center">
              <span className="text-white font-semibold text-2xl tracking-wide">
              Mirema Blossom Homes
              </span>
            </div>
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="#Header" className='cursor-pointer
                hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer
                hover:text-gray-400'>About</a>
                <a href="#Gallery" className='cursor-pointer
                hover:text-gray-400'>Gallery</a>
                <a href="#Testimonials" className='cursor-pointer
                hover:text-gray-400'>Reviews</a>
            </ul>
            <a href="#Contact" className="hidden md:block bg-assent px-8 py-2 rounded-full">
                 Contact Us
            </a>

            <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*---------mobile menu--------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0
        overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon}
             className='w-6' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
          font-medium'>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full 
            inline-block'>Home</a>
             <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full 
            inline-block'>About</a>
             <a onClick={()=> setShowMobileMenu(false)} href="#Gallery" className='px-4 py-2 rounded-full 
            inline-block'>Gallery</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full 
            inline-block'>Reviews</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar