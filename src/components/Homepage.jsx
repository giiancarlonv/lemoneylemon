import React from 'react'
import DATA from '../hooks/data';
import { Link, Outlet } from 'react-router-dom';
import { Thumbnail } from '../hooks/Thumbnail';

export const Homepage = () => {

  return (
  <>
    <Outlet />
    <main>
      {DATA.map((item, index) => (
        <Thumbnail data={item} key={index}/>  
      ))}
    </main>
  </>
  )
}
