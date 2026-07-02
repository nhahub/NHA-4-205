import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>

      <div className="flex items-center gap-2 font-black text-xl tracking-wider select-none">
        <div className="bg-[#bfff00] text-black p-1.5 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-[#bfff00]">ELEVATE FIT</span>
      </div >


      <div className="flex items-center gap-6 text-[14px]">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/awareness">Awareness</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
      <NavLink to="/diet">Diet Plan</NavLink>
      <NavLink to="/progress">Progress</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/transformation">Transformation</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      </div>

      
      <div className="flex items-center gap-6 text-[14px]">
      <NavLink to="/login">Log in</NavLink>
      <div className="getstarted">
      <NavLink to="/register">Get started</NavLink>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar