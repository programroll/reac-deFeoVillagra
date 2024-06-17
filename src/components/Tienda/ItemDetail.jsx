import React, { useContext } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    return (
        < div className='item-detail'>
        <div className='detail'>
            <img src={item.imagen} />
            <h2>{item.nombre}</h2>
            <p className='descripcion'>{item.descripcion}</p>
            <p className='precio'>${item.precio}</p>
            <ItemCount item={item}/>
        </div>
        </div>
    )
}

export default ItemDetail