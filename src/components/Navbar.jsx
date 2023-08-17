import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <Link to='/'>lemoney</Link>
        <button>start slideshow</button>
      </header>
      <Outlet />
    </>
    
  )
}

export default Navbar