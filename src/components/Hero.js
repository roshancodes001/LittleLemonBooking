import React from 'react'
import restauranfood from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header>
      <div className='flex-container' id='hero-section'>
        <div className='flex-column'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button><Link to="/booking">Reserve a Table</Link></button>
        </div>
        <div className='flex-column'>
          <img className="hero-image" src={restauranfood} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Hero