import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

const Header = (props) => {

    return (
        <header className='header'>
            <NavBar />
            <CartWidget numeroCarrito={props.numeroCarrito}/>
        </header>
    )
}
export default Header