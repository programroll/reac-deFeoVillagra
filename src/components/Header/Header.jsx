import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

const Header = () => {

    return (
        <header className='header'>
            <NavBar />
            <CartWidget/>
        </header>
    )
}
export default Header