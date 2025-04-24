import { db } from "/firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { div } from "framer-motion/client";
import { useState } from "react";
import { motion } from "motion/react";

export default function BookingSection() {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), {
        name,
        email,
        date: date.toISOString(),
        createdAt: new Date().toISOString()
      });
      alert("Booking confirmed!");
    } catch (err) {
      console.error("Error saving booking:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}

         className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Book your stay<span className='underline 
        underline-offset-4  decoration-1 under font-light'> with Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80
        mx-auto'>Ready to make a move? Book your stay with us</p>
        <div>
         <form onSubmit={handleSubmit} className="your-form-classes">
          {/* your fields here */}
         </form>
         </div>
    </motion.div>
  );
}
