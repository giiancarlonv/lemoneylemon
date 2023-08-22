import React from 'react'
import DATA from '../hooks/data';
import { Outlet } from 'react-router-dom';
import { Thumbnail } from '../hooks/Thumbnail';
import { TopButton } from './TopButton';

export const Homepage = () => {

  return (
  <>
    <div className='main'>
      {DATA.map((item, index) => (
        <Thumbnail data={item} key={index}/>  
      ))}
    </div>
    <TopButton />
  </>
  )
}

