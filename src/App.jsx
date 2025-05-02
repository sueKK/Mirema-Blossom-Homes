import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import BookingForm from './components/BookingForm'
import AdminPanel from './components/AdminPanel';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/firebase";
import Login from "./components/Login";
import Gallery from './components/Gallery'

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdminLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='bg-yellow-20 min-h-screen w-full'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Gallery/>
      <BookingForm/>

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