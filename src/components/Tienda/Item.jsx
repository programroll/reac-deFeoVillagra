import React from 'react'

const Item = ({producto}) => {
  return (
    <div>
      <img src ={producto.imagen}/>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  )
}

export default Item