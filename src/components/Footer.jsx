import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-ash w-full overflow-hidden' id="Contact">
  <h2 className="text-3xl sm:text-4xl font-handwriting text-center mb-10">Where to Find us?</h2>

  <div className='container mx-auto flex flex-col md:flex-row justify-between items-stretch gap-10'>

    {/* Map Section */}
    <div className="w-full md:w-1/2">
      <div className="h-full min-h-[300px] rounded-xl overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.920832505498!2d36.88052507496566!3d-1.2152999987731046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTInNTUuMSJTIDM2wrA1Mic1OS4yIkU!5e0!3m2!1sen!2ske!4v1746093444928!5m2!1sen!2ske"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </div>

    {/* Contact Section */}
    <div className="w-full md:w-1/2 min-h-[300px] bg-coffee text-black p-6 rounded-xl flex flex-col justify-center text-center">
      <p className="text-xl font-semibold mb-4">Phone/Whatsapp:</p>
      <p className="text-lg mb-6">+254 704 357114</p>
      <p className="text-xl font-semibold mb-4">Email:</p>
      <p className="text-lg mb-6">blossomhomez@gmail.com</p>
    </div>
  </div>

  <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-100'>
    copyright 2025 sueKK. All Rights Reserved.
  </div>
</div>

  )
}

export default Footer