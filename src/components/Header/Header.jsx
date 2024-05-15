import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

export const Header = () => {
    return (
        <header className='header'>
            <h1>Coffee</h1>
            <NavBar />
            <CartWidget/>
        </header>
    )
}
