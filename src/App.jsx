import React from 'react'
import Navbar from './Components/navbar/navbar'
import Main from './Components/main/main'
import Collection from './Components/collection/collection'
import About from './Components/about/about'
import Reviews from './Components/reviews/reviews'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'

const App = () => {
   return (
      <div>
        <Navbar/>
        <Main/>
        <Collection/>
        <About/>
        <Reviews/>
        <Contact/>
        <Footer/>
      </div>
   )
}

export default App