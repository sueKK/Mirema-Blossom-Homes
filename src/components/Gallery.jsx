import React from 'react'
import { galleryImages } from '../assets/assets'
import {motion} from 'motion/react'

const Gallery = () => {
  return (
    <motion.div
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
       
    className="px-4 py-10 bg-white">
  <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>
  
  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
    {galleryImages.map((src, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md break-inside-avoid">
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</motion.div>

  )
}

export default Gallery