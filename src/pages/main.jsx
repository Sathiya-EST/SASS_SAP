import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import About from '../Components/About'
import '../scss/index.scss'
const Main = () => {
    return (
        <div className='container'>
            <Nav />
            <Home />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main