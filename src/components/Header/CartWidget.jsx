import React from 'react'
import { Basket2 } from 'react-bootstrap-icons'

const Carrito = (props) => {
    
    return (
        <div className='carrito'>
            <Basket2 color='#f0f0d8' size={35}/>{props.numeroCarrito}
        </div>
    )
}

export default Carrito