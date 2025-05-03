import { db } from "/firebase"; // adjust path if needed
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import DatePicker from "react-datepicker";

export default function BookingSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [availability, setAvailability] = useState(null);
    const [result, setResult] = useState("");

    const checkAvailability = async () => {
        const bookingsSnapshot = await getDocs(collection(db, "bookings"));
        const bookings = bookingsSnapshot.docs.map(doc => doc.data());
    
        const isAvailable = !bookings.some(booking => {
          const existingIn = new Date(booking.checkIn);
          const existingOut = new Date(booking.checkOut);
          return (
            (checkIn >= existingIn && checkIn < existingOut) ||
            (checkOut > existingIn && checkOut <= existingOut) ||
            (checkIn <= existingIn && checkOut >= existingOut)
          );
        });
    
        setAvailability(isAvailable);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!checkIn || !checkOut) {
          setResult("Please select valid check-in and check-out dates.");
          return;
        }
    
        await checkAvailability();
    
        if (!availability) {
          setResult("Selected dates are already booked. Please choose another.");
          return;
        }
    
        try {
          await addDoc(collection(db, "bookings"), {
            name,
            email,
            checkIn: checkIn.toISOString(),
            checkOut: checkOut.toISOString(),
          });
    
          setResult("Your stay is booked!");
          setName("");
          setEmail("");
          setCheckIn(null);
          setCheckOut(null);
        } catch (error) {
          console.error("Error booking:", error);
          setResult("Something went wrong. Please try again.");
        }
      };
    
      useEffect(() => {
        if (checkIn && checkOut) {
          checkAvailability();
        }
      }, [checkIn, checkOut]);    

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}

         className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='booking'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Book your stay<span className='underline 
        underline-offset-4  decoration-1 under font-light'> with Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80
        mx-auto'>Ready to make a move? Book your stay with us</p>
        <div>
         <form onSubmit={handleSubmit} className="space-y-6">
         <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium">Check-in</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              className="w-full px-4 py-3 border rounded mt-1"
              minDate={new Date()}
              placeholderText="Select a check-in date"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium">Check-out</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              className="w-full px-4 py-3 border rounded mt-1"
              minDate={checkIn || new Date()}
              placeholderText="Select a check-out date"
            />
          </div>
        </div>

        {availability !== null && (
          <p
            className={`text-sm ${
              availability ? "text-green-600" : "text-red-500"
            }`}
          >
            {availability
              ? "Dates are available!"
              : "Sorry, selected dates are unavailable."}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-assent hover:bg-assent text-white py-3 rounded font-semibold"
        >
          Book Now
        </button>

        {result && (
          <p className="text-center mt-4 text-gray-700 font-medium">{result}</p>
        )}
         </form>
         </div>
    </motion.div>
  );
}
