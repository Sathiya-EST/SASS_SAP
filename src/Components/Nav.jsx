import React from 'react'

const Nav = () => {
    return (
        <div>
            <section>
                <div className='logo'>
                    <img src='https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg-1200-80.jpg' alt='logo_image' />
                </div>
                <div>
                    <li>Home</li>
                    <li>About </li>
                    <li>Explore</li>
                    <li>News</li>
                    <li>Contact</li>
                </div>
                <div>
                    <a href='/'>Login</a>
                    <a href='/'>Register</a>
                </div>
            </section>

        </div>
    )
}

export default Nav