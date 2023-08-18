import React from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
const Footer = () => {
  return (
    <footer>
      <span>
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