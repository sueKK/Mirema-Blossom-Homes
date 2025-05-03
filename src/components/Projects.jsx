import React, {useEffect, useState} from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react";


const Projects = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] =useState(1);

useEffect(()=>{
const  updateCardsToShow = ()=>{
    if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length)
    }else{
        setCardsToShow(1)
    }
};
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return ()=> window.removeEventListener('resize',updateCardsToShow);

},[])

const nextProject = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
}
const prevProject = ()=>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 :
     prevIndex - 1)
}

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}

     className='container mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text4xl font-bold mb-2 text-center'>Our <span
        className='underline underline-offset-4 decoration-1 under font-light'> Catalog</span></h1>
        <p className='text-center text-lg space-y-6 text-gray-700 max-w-4xl mx-auto'>Experience comfort and convenience at Mirema Blossom Airbnb with our thoughtfully designed accommodations. Choose from our 1 Bedroom BnB at KSH 3,000, featuring a cozy queen-size bed with a high-density fiber mattress, plush pillows, and soft, clean bedding — perfect for a restful night. The unit includes access to a private kitchen and balcony. For more space, our 2 Bedroom BnB at KSH 5,000 offers a queen-size bed and a double bed, along with access to two balconies offering spectacular views.

Enjoy the privacy of a separate bathroom and toilet, including a hand wash sink for added convenience. Prepare your meals in a fully equipped kitchen stocked with a cooker, oven, refrigerator, microwave, kettle, cookery, and cutlery. Unwind in the living room, where you’ll find a cozy sofa, smart TV, sound system, and fast-speed internet to keep you entertained or connected. Step out onto the balcony and take in the relaxing views — the perfect way to start or end your day.</p>

        {/*slider buttons*/}

        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject}
             className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Prvious" />
            </button>
            <button onClick={nextProject}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* Project slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
            >
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 h-[320px] overflow-hidden rounded-lg shadow-md'>
                        <img src={project.image} alt={project.title} className='w-full h-full object-cover mb-10'/>
                        <div className='absolute bottom-0 left-0 right-0'>
                            <div className='bg-white bg-opacity-70 w-11/12 mx-auto px-4 py-2 mb-4 rounded-md shadow'> 
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-950 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Projects