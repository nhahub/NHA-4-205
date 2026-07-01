import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/transformation">Transformation</NavLink>
      <NavLink to="/awareness">Awareness</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/diet">Diet Plan</NavLink>
      <NavLink to="/progress">Progress</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
    </nav>
  )
}

export default Navbar