import React from 'react'
import './footer.css'

const Footer = () => {
   return (
      <div className='footer'>
        <div>
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
        </div>
        <div>
            <p>©{new Date().getFullYear()} Havenwood. All rights reserved.</p>
        </div>
      </div>
   )
}

export default Footer