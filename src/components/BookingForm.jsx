import { db } from "./firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { div } from "framer-motion/client";
import { useState } from "react";

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
    <div>
    <form onSubmit={handleSubmit} className="your-form-classes">
      {/* your fields here */}
    </form>
    </div>
  );
}
