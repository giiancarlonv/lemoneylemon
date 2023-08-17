import React from 'react'
import DATA from './data';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

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

const Thumbnail = (props) =>{
  const {id, image, title, date} = props.data;
  return(
    <section className='homepage-image' id={id}>
      <Link to={`/imagepage/${id}`}><img src={image} alt={image} /></Link>
      
      <div className='art-info'>
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
    </section>
);
}