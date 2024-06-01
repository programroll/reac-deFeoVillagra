import React from 'react'

const Item = ({producto}) => {
  return (
    <div className='card'>
      <img src ={producto.imagen}/>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
    </div>
  )
}

export default Item