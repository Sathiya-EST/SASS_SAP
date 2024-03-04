import React, { useState } from 'react'
const Nav = () => {
    const [navState, setNavState] = useState(false)
    return (
        <nav>
            <header className='header'>
                <div className='header--logo'>
                    <img src='src\assets\favicon.svg' alt='logo_image' className='header--logo_image' />
                    <div className="header--logo-text">Fish Paradise</div>
                </div>
                <div className='toggle-container'>
                    <div className="toggle"></div>
                    <div className="mode"></div>
                </div>
                <div className='header--navmenu'>
                    <ul className='header--navmenu-nav'>
                        <li><a href='' className='header--navmenu-nav-text active'> Home</a></li>
                        <li><a href='' className='header--navmenu-nav-text'> About</a></li>
                        <li><a href='' className='header--navmenu-nav-text'> Explore</a></li>
                        <li><a href='' className='header--navmenu-nav-text'> Contact</a></li>
                    </ul>
                </div>
                <div className='header--navmenu-authnav'>
                    <a href='/' className='header--navmenu-authnav-text'>Login</a>
                    <hr className='header--navmenu-authnav-line'></hr>
                    <a href='/' className='header--navmenu-authnav-text'>Register</a>
                </div>
            </header>
        </nav>
    )
}

export default Nav