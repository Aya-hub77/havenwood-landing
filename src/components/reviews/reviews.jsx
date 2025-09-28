import React from 'react'
import './reviews.css'
import guy from '../../assets/guy.png'
import girl from '../../assets/girl.png'
import secgirl from '../../assets/secgirl.png'

const Reviews = () => {
   return (
      <div className='reviews' id="reviews">
        <h2>Reviews</h2>
        <p className='sub'>Hear from those who have brought Havenwood into their homes</p>
        <div className='rev-flex'>
            <div>
                <img src={girl} alt="text" loading="lazy"/>
                <h4>Emily Riley</h4>
                <p>New York, NY</p>
                <p>The Elmwood Sofa is pure perfection. From the moment it arrived, it became the centerpiece of our living room. The combination of supple leather and handcrafted oak creates a warmth that we haven’t found in any other furniture.</p>
            </div>
            <div>
                <img src={guy} alt="text" id="pic" loading="lazy"/>
                <h4>Jonathan Morgan</h4>
                <p>San Francisco, CA</p>
                <p>Every time I sit in the Alder Lounge Chair, I feel like it was made just for me. The linen upholstery is soft yet durable, and the sculpted curves make it a work of art as much as a chair. It's a piece of furniture that blends modern design with traditional craftsmanship.</p>
            </div>
            <div>
                <img src={secgirl} alt="text" loading="lazy"/>
                <h4>Sophia Smith</h4>
                <p>Austin, TX</p>
                <p>The Haven Bed has completely transformed our bedroom into a serene retreat. The minimalist design and natural wood tones bring a sense of calm and balance to the space. It’s clear that each piece is handcrafted with precision.</p>
            </div>
        </div>
      </div>
   )
}

export default Reviews