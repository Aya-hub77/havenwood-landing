import React from 'react'
import './about.css'
import hands from '../../assets/hands.jpg'

const About = () => {
   return (
      <div className='about' id="about">
        <h2>About Us</h2>
        <div className='flex'>
         <div className='left'>
            <img src={hands} alt="artisan hands" loading="lazy"/>
         </div>
        <div className='right'>
        <h3>Where Craftsmanship Meets Timeless Design</h3>
        <p>At Havenwood, we believe that furniture is more than just functional, it’s an expression of artistry, comfort, and character. Each piece is meticulously handcrafted by skilled artisans, blending traditional woodworking techniques with modern design.</p>
        <p>From sustainably sourced hardwoods to thoughtfully selected fabrics, every detail is curated to ensure elegance, durability, and a sense of warmth that transforms any space into a home.</p>
        <p>Our mission is simple: to create furniture that stands the test of time, offering both beauty and comfort for generations to come.</p>
        <p><em>Havenwood — Crafted for Timeless Living</em></p>
        </div>
        </div>
      </div>
   )
}

export default About