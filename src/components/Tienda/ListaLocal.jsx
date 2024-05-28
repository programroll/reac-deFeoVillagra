import React from 'react'
import Item from './Item.jsx'

const ListaLocal = ({ productos }) => {
    return (
        <div>
            {
                productos.length > 0 ? productos.map(producto => {
                    return <Item key={producto.id} producto={producto}
                    />}) : <p>No hay productos</p>
            }
        </div>
    )
}

export default ListaLocal