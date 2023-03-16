import React from 'react'
import './LibraryGame.css'
import image1 from '../../image/download3.jfif'
import image2 from '../../image/OIP (6).jfif'
import image3 from '../../image/OIP.jfif'

const cards = [
  {
    image : image1,
    id : 1,
    title : "Bubg",
    dataTitle : "fortnite",
    dataList : "mounter",
    type : "lover"
  },
  {
    image : image2,
    id : 2,
    title : "Bubg",
    dataTitle : "fortnite",
    dataList : "mounter",
    type : "lover"
  },
  {
    image : image3,
    id : 3,
    title : "Bubg",
    dataTitle : "fortnite",
    dataList : "mounter",
    type : "lover"
  }
]

const LibraryGame = () => {
  return (
  <>
       <div className="section-wrapper">
      <div className="section-header">
        <h4 className='hfour'>Library <span>Game</span></h4>
      </div>
      <div className="library-game-cards">
        {cards.map((card) => {
           return(
            <div key={card.id} className="library-game-card">
            <ul>
             <li><img className='image-card' src={card.image} alt="" /></li>
             <li><h4>title</h4><span>{card.dataTitle}</span></li>
             <li><h4>datalist</h4><span>{card.dataList}</span></li>
             <li><h4>type</h4><span>{card.type}</span></li>
            </ul>
          </div>
           )
        })}
      </div>
    </div>
  </>
  )
}

export default LibraryGame
