import React from 'react'
import navStyles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <>
            <ul className={navStyles.navbar}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
    )
}

export default Navbar
