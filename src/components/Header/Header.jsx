import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

export const Header = () => {
    return (
        <header className='header'>
            <img src="public/Preview.webp" alt="logo" className='logo'/>
            <NavBar />
            <CartWidget/>
        </header>
    )
}
