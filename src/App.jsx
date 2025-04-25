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
import AdminBookings from './components/AdminBookings'
import AdminPanel from './components/AdminPanel'

const App = () => {
  return (
    <div classname='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <BookingForm/>
      <AdminBookings/>
      <AdminPanel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App