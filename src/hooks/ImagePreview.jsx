import React, { useState } from 'react'
import DATA from './data';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ImagePreview = (props) => {
  const {className} = props
  const { id } = useParams()
  const data = DATA.find((item) => item.id === id);
  const {image, title, date} = data;

  const [isClcked, setIsClicked] = useState(false);
  const handleClick = () =>{
    setIsClicked(current => !current);
  }
  const bodyBG = document.body;
  isClcked ? bodyBG.classList.add('imageClicked') : bodyBG.classList.remove('imageClicked');
  return(
    <>
      <div className={`image-content-wrapper ${className}`}>
        <section className='image-content' >
          <LazyLoadImage src={image} alt="sample image" onClick={handleClick}/>
          <div className='art-info'> 
              <h4>{title}</h4>
              <span>{date}</span>
          </div>
        </section>
        <article>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum esse fuga voluptate alias minima sit quasi suscipit magnam possimus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos velit voluptatum ex laboriosam obcaecati a provident atque. Numquam, incidunt aliquid? Consequatur nulla rem fugiat quaerat commodi, perspiciatis ratione voluptas voluptatum.</p>
        </article>
      </div>

      <picture className={`test ${isClcked ? 'clicked':''}`} onClick={handleClick}>
        <LazyLoadImage src={image} alt={image} />
      </picture>
    </>
  )
}
