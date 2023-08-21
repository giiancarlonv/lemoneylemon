import React, { useEffect, useState } from 'react'
import arrowUp from '../assets/icons/arrow-up-solid.svg'

export const TopButton = () => {
  return (
    <div className='arrow-up' id='js-reveal-arrow'>
      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} >
        <img src={arrowUp} alt="arrowUp" />
      </button>
    </div>
    
  )
}
