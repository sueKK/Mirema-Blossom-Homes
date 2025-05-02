import React from 'react'
import { assets, galleryImages } from '../assets/assets'

const Gallery = () => {
  return (
    <section className="px-4 py-10 bg-white">
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
</section>

  )
}

export default Gallery