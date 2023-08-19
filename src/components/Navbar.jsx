import {React, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import sunIcon from '../assets/icons/icon-sun.svg';
import moonIcon from '../assets/icons/icon-moon.svg';

const Navbar = (props) => {

  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (e) =>{
    setDarkMode(current => !current);
  }
  const bodyBG = document.body;
  darkMode ? bodyBG.classList.add('darkmode') : bodyBG.classList.remove('darkmode');
  return (
    <>
      <header className={darkMode ? 'darkmode' : ''}>
        <Link to='/lemoneylemon' className={darkMode ? 'logo dark': 'logo'}>lemoney</Link>
        <button className={darkMode ? 'darkmode':'lightmode'} onClick={handleClick}><img src={darkMode ? sunIcon:moonIcon} alt='sunicon' /></button>
        <button>start slideshow</button>
      </header>
      <Outlet />
    </>
    
  )
}
export default Navbar