import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DATA from './data';

export const Imagepage = () => {

  return (
    <>
      <ImagePreview />
    </>
  )
}
const ImagePreview = () => {
  const { id } = useParams()
  const data = DATA.find((item) => item.id === id);
  const {image, title, date} = data
  console.log(image)
  return(
    <>
    <main>
        <section className='image-content'>
          <img src={image} alt="sample image" />
          <div className='art-info'> 
              <h4>{title}</h4>
              <span>{date}</span>
          </div>
        </section>
        <article>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum esse fuga voluptate alias minima sit quasi suscipit magnam possimus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos velit voluptatum ex laboriosam obcaecati a provident atque. Numquam, incidunt aliquid? Consequatur nulla rem fugiat quaerat commodi, perspiciatis ratione voluptas voluptatum.</p>
        </article>
      </main>
    </>
  )
}