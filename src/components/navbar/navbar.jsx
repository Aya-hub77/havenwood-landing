import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const [open, setOpen] = useState(false);
   return (
      <nav className='navbar'>
        <div className='name'>
            <h2>Havenwood</h2>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
        <div className='nav-menu'>
            <ul className={open ? "open" : ""}>
            <li><a href='#collection' onClick={() => {setMenu("collection"); setOpen(false);}} className={menu === "collection" ? "active" : ""}>COLLECTION</a></li>
            <li><a href='#about' onClick={() => {setMenu("about"); setOpen(false);}} className={menu === "about" ? "active" : ""}>ABOUT</a></li>
            <li><a href='#reviews' onClick={() => {setMenu("reviews"); setOpen(false);}} className={menu === "reviews" ? "active" : ""}>REVIEWS</a></li>
            <li><a href='#contact' onClick={() => {setMenu("contact"); setOpen(false);}} className={menu === "contact" ? "active" : ""}>CONTACT</a></li>
        </ul>
        </div>
      </nav>
   )
}

export default Navbar