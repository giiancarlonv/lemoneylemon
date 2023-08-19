import {React, useState} from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'

const Footer = () => {
  const body = document.body;
  const isDarkMode = body.classList.contains('darkmode');
  const test = () =>{
    isDarkMode ? console.log('tite'): console.log('no tite');
  }
  
  return (
    <footer>
      <span className={test ? 'dark' : ''}>
        lemoneylemon
      </span>
      <div className='socials'>
        <a href=""><img src={github} alt="" /></a>
        <a href=""><img src={linkedin} alt="" /></a>
      </div>
    </footer>
  )
}

export default Footer