import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import BookingForm from './components/BookingForm'
import AdminPanel from './components/AdminPanel';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/firebase";
import Login from "./components/Login";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdminLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div classname='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <BookingForm/>
      <Contact/>

       {/* 🔐 Only show AdminPanel when logged in */}
       {isAdminLoggedIn ? (
        <AdminPanel />
      ) : (
        <Login onLogin={() => setIsAdminLoggedIn(true)} />
      )}
      
      <Footer/>
    </div>
  );
};


export default App