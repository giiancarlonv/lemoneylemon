import React from 'react'
import DATA from './data';
import { useParams } from 'react-router-dom';
export const ImagePreview = () => {
  const { id } = useParams()
  const data = DATA.find((item) => item.id === id);
  const {image, title, date} = data
  console.log(image)
  return(
    <>
    <div className='main'>
      <div className='image-content-wrapper'>
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
      </div>
        
    </div>
    </>
  )
}
