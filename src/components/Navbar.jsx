import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  
  // 1. State to manage mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false)

  // 2. Auth checks
  const token = localStorage.getItem('token')
  const userName = localStorage.getItem('userName') || 'User'

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setIsOpen(false) // Close menu on logout
    navigate('/login')
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-zinc-900 w-full">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-black text-xl tracking-wider select-none">
          <div className="bg-[#c8ff00] text-black p-1.5 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-[#c8ff00]">ELEVATE FIT</span>
        </div>

        {/* 1️⃣ Desktop Navigation Links (Hidden on mobile, flex on desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Home</NavLink>
          <NavLink to="/awareness" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Awareness</NavLink>
          <NavLink to="/exercises" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Exercises</NavLink>
          <NavLink to="/diet" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Diet Plan</NavLink>
          <NavLink to="/progress" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Progress</NavLink>
          <NavLink to="/dashboard" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Dashboard</NavLink>
          <NavLink to="/transformation" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Transformation</NavLink>
          <NavLink to="/contact" className="text-zinc-400 hover:text-white transition duration-200 [&.active]:text-[#c8ff00] [&.active]:font-medium">Contact Us</NavLink>
        </div>

        {/* 2️⃣ Desktop Auth Section (Hidden on mobile, flex on desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {token ? (
            <div className="flex items-center gap-4">
              <span className="text-zinc-300 font-medium select-none">
                Welcome, <span className="text-[#c8ff00] font-bold">{userName}</span>
              </span>
              <button 
                onClick={handleLogout}
                className="text-zinc-500 hover:text-red-500 transition duration-200 font-bold uppercase tracking-wider text-xs cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="text-zinc-400 hover:text-white transition duration-200">Log in</NavLink>
              <NavLink to="/register" className="bg-[#c8ff00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#a8d000] transition duration-300">
                Get started
              </NavLink>
            </>
          )}
        </div>

        {/* 3️⃣ Mobile Burger Button (Visible ONLY on small screens) */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-[#c8ff00] transition duration-200 focus:outline-none"
          >
            {isOpen ? (
              // X icon when menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Three lines icon when menu is closed (matches image 2)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* 4️⃣ Mobile Dropdown Drawer Container */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-zinc-900 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          {/* Mobile Routes */}
          <NavLink onClick={() => setIsOpen(false)} to="/" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/awareness" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Awareness</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/exercises" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Exercises</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/diet" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Diet Plan</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/progress" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Progress</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/dashboard" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Dashboard</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/transformation" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Transformation</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact" className="text-zinc-400 hover:text-white py-1 [&.active]:text-[#c8ff00]">Contact Us</NavLink>
          
          <div className="border-t border-zinc-900 my-2"></div>

          {/* Mobile Auth Items */}
          {token ? (
            <div className="flex flex-col gap-3">
              <span className="text-zinc-300 text-sm">
                Welcome, <span className="text-[#c8ff00] font-bold">{userName}</span>
              </span>
              <button 
                onClick={handleLogout}
                className="text-left text-red-500 font-bold uppercase text-xs tracking-wider"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-center">
              <NavLink onClick={() => setIsOpen(false)} to="/login" className="text-zinc-400 hover:text-white py-2 border border-zinc-900 rounded-lg">
                Log in
              </NavLink>
              <NavLink onClick={() => setIsOpen(false)} to="/register" className="bg-[#c8ff00] text-black font-bold py-2 rounded-lg hover:bg-[#a8d000]">
                Get started
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar