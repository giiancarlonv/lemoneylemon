import {React, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = (props) => {
  const {className, image, onClick} = props;
  return (
    <>
      <header className={`${className}`}>
        <Link to='/lemoneylemon' className='logo'>lemoney</Link>
        <button className='lightmode' onClick={onClick}><img src={image} alt='sunicon' /></button>
      </header>
      <Outlet />
    </>
    
  )
}
export default Navbar