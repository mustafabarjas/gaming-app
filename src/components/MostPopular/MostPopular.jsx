import React from 'react'
import image1 from '../../image/download.jfif'
import image2 from '../../image/download (1).jfif'
import image3 from '../../image/download3.jfif'
import image4 from '../../image/OIP (1).jfif'
import image5 from '../../image/OIP (2).jfif'
import image6 from '../../image/OIP (3).jfif'
import image7 from '../../image/OIP (4).jfif'
import image8 from '../../image/OIP (5).jfif'
import './MostPopular.css'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineDownCircle} from 'react-icons/ai'
const cards = [
  {
    id : 1,
    image : image1,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 2,
    image : image2,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 3,
    image : image3,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 4,
    image : image4,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 5,
    image : image5,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 6,
    image : image6,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 7,
    image : image7,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
  {
    id : 8,
    image : image8,
    title : "fortnite",
    span : "sandbox",
    li1 : "4.8",
    li2 : "2.3"
  },
];
const Most = () => {
  return (
    <>
    <div className="section-wrapper">
      <div className="section-header">
        <h4 className='hfour'>Most <span>Popular</span></h4>
      </div>
      <div className="most-popular-items">
       {cards.map((cards) => {
        return(
             <div key={cards.id} className="most-popular-item">
             <div className="card-wrapper">
               <img className='image-item' src={cards.image} alt="" />
               <div className="content">
                 <h4 className='title'>{cards.title}<br/><span>{cards.span}</span></h4>
                 <ul>
                   <li><AiOutlineStar className='myicon mainicon'/><span>{cards.li1}</span></li>
                   <li><AiOutlineDownCircle className='myicon'/><span>{cards.li2}</span></li>
                 </ul>
               </div>
             </div>
           </div>
        )
       })}
      </div>
    </div>
    </>
  )
}

export default Most
