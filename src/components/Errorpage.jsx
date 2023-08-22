import React from 'react'
import sticker from '../assets/art/sticker.webp'
import { Link } from 'react-router-dom'
export const Errorpage = (props) => {
  const {className} = props;
  return (
    <div className={`errorpage ${className}`} >
      <img src={sticker} alt="sticker" />
      <h1>404</h1>
      <span>Hey! Looks like you're heading to a wrong page!</span>
      <Link to='/lemoneylemon'><button>Take me back to homepage</button></Link>
    </div>
  )
}
