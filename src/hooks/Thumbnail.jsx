import React from "react";
import { Link } from "react-router-dom";
export const Thumbnail = (props) =>{
  const {id, image, title, date} = props.data;
  return(
    <section className='homepage-image' id={id}>
      <div className="test">
        <Link to={`/imagepage/${id}`}><img src={image} alt={image} /></Link>
        <div className='art-info'>
          <h4>{title}</h4>
          <span>{date}</span>
        </div>
      </div>
      
    </section>
  );
}