import React from 'react'
import navStyles from '../styles/navbar.module.css';

import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <ul className={navStyles.navbar}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </>
    )
}

export default Navbar
