import React from 'react'
import { toast } from 'react-toastify'
import { motion } from "motion/react"
import { div } from 'framer-motion/client';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "55d20a0e-2c45-4688-a607-276ef14d3c9d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form submitted successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };  

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}

     className='text-center p-6 py-20 lg:px-32 w-full
    overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2
        text-center'>Contact<span className='underline 
        underline-offset-4  decoration-1 under font-light'>Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80
        mx-auto'>Do you have Inquiries ? Contact us</p>

<div className="flex flex-col md:flex-row max-w-4xl mx-auto pt-8 gap-6">
  {/* Map on the left */}
  <div className="w-full md:w-1/2">
    <iframe
      className="w-full h-64 md:h-full rounded"
      src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with actual map embed link
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>


<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input className='w-full border border-gray-300 rounded py-3
            px-4 mt-2' type="text" name='Name' placeholder='Your Name' 
            required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3
            px-4 mt-2' type="email" name='Email' placeholder='Your Email' 
            required/>
        </div>
    </div>
    <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3
        px-4 mt-2 h-48 resize-none'
        name="Message" placeholder='Message' required></textarea>
    </div>
    <button className='bg-assent text-white py-2 px-12 mb-10
    rounded'>{result ? result : "send Message"}</button>
</form>
</div>
    </motion.div>
  )
}

export default Contact