import React from 'react'
import './contact.css'

const Contact = () => {
   return (
      <div className='contact' id="contact">
        <h2>Contact Us</h2>
        <p id='p'>Questions about a piece or looking for a custom commission? Get in touch — our design consultants are happy to help.</p>
        <div className='info'>
            <div>
                <span className="material-symbols-outlined">phone_in_talk</span>
                <h3>Phone</h3>
                <p>+1 (800) 482-6693</p>
            </div>
            <div>
                <span className="material-symbols-outlined">mail</span>
                <h3>Email</h3>
                <p>hello@havenwoodhome.com</p>
            </div>
            <div>
                <span className="material-symbols-outlined">location_on</span>
                <h3>Address</h3>
                <p>1423 Timber Lane, Suite 200, Maple Hollow, NY 10532</p>
            </div>
        </div>
      </div>
   )
}

export default Contact