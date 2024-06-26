import React from 'react'
import Item from './Item.jsx'

const ListaLocal = ({ productos }) => {
    return (
        <div className='listaProductos'>
            {
                productos.length > 0 ? productos.map(producto => {
                    return <Item key={producto.id} producto={producto}
                    />}) : <p>Cargando..</p>
            }
        </div>
    )
}

export default ListaLocal