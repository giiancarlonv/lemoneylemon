import {React} from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'

const Footer = (props) => {
  const {className} = props  
  return (
    <>
      <footer className={`${className}`}>
        <span>
          lemoneylemon
        </span>
        <div className='socials'>
          <a href="https://github.com/giiancarlonv"><img src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/giancarlo-nava-41314a193/"><img src={linkedin} alt="linkedin" /></a>
        </div>
    </footer>
    </>
    
  )
}

export default Footer