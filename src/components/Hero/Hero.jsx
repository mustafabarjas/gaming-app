import React from 'react'
import './Hero.css' 
const Hero = () => {
  return (
    <div className='HeroMain'>
      <div className="Hero-Text">
        <h6 className="Hero-Subtitle">Welcome To App</h6>
        <h4 className="Hero-Title"><em>Browser</em>Our Popular Game Here</h4>
      </div>
      <div className="Main-Bottom">
         <a href="#">Browser Now</a>
      </div>
    </div>
  )
}

export default Hero
