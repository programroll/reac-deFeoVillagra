import React, { useContext } from 'react'
import { Basket2 } from 'react-bootstrap-icons'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {calcularCantidad} =useContext(CartContext);

    return (
        <Link className='carrito' to="/carrito">
            <Basket2 color='#533921' size={35}/>
            <span className='car-cantidad'>{calcularCantidad()}</span>
        </Link>
    )
}

export default CartWidget