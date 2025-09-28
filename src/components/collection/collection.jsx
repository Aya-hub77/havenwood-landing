import React from 'react'
import './collection.css'
import couch from '../../assets/couch.jpg'
import chair from '../../assets/chair.jpg'
import bed from '../../assets/bed.jpg'
import table from '../../assets/table.jpg'

const Collection = () => {
   return (
      <div className='collection' id="collection">
        <h2>Our Collection</h2>
        <p className='subtitle'>Crafted with care, designed for timeless living</p>
        <div className='grid'>
            <div className='couch'>
                <img src={couch} alt="green leather couch" loading="lazy"/>
                <h3>The Elmwood Sofa</h3>
                <p>A refined blend of supple leather and handcrafted oak for timeless comfort</p>
            </div>
            <div className='bed'>
                <img src={bed} alt="wooden bed with white bedding" loading="lazy"/>
                <h3>The Haven Bed</h3>
                <p>Minimalist design meets natural wood, creating a serene space for rest</p>
            </div>
            <div className='chair'>
                <img src={chair} alt="beige armchair" loading="lazy"/>
                <h3>The Alder Lounge Chair</h3>
                <p>Soft linen upholstery and sculpted curves, designed for quiet moments</p>
            </div>
            <div className='dining-table'>
                <img src={table} alt="wooden dining table" loading="lazy" />
                <h3>The Arlow Dining Table</h3>
                <p>Solid oak craftsmanship that gathers family and friends in style</p>
            </div>
        </div>
        <button className='coll-btn'>View Full Collection</button>
      </div>
   )
}

export default Collection