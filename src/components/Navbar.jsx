import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <Link to='/lemoneylemon'>lemoney</Link>
        <button>start slideshow</button>
      </header>
      <Outlet />
    </>
    
  )
}

export default Navbar