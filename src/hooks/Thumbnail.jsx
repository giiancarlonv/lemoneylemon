import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
export const Thumbnail = (props) =>{
  const {id, image, title, date} = props.data;
  return(
    <>
    <section className='homepage-image' id={id}>
      <Link to={`/${id}`} className="box"><img src={image} alt={image} /></Link>
      <div className='art-info'>
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
    </section>
    </>
    
  );
}