import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card'>
      <img src ={producto.imagen}/>
      <h2 className='card-h2'>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <Link to={`/Item/${producto.id}`} className='boton ver-prod'>Ver producto</Link>
    </div>
  )
}

export default Item