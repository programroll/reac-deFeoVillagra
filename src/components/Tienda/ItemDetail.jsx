import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <div>
            <img src={item.imagen} />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
        </div>
    )
}

export default ItemDetail