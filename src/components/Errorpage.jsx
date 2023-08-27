import React from 'react'
import sticker from '../assets/art/sticker.webp'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Errorpage = (props) => {
  const {className} = props;
  return (
    <div className={`errorpage ${className}`} >
      <LazyLoadImage src={sticker} alt="sticker" />
      <h1>404</h1>
      <span>Hey! Looks like you're heading to a wrong page!</span>
      <Link to='/lemoneylemon'><button>Take me back to homepage</button></Link>
    </div>
  )
}
