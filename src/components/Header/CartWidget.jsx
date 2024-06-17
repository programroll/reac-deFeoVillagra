import React, { useContext } from 'react'
import { Basket2 } from 'react-bootstrap-icons'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {calcularCantidad} =useContext(CartContext);
    return (
        <Link className='carrito' to="/carrito">
            <Basket2 color='#f0f0d8' size={35}/>{calcularCantidad()}
        </Link>
    )
}

export default CartWidget