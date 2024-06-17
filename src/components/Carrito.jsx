import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'

const Carrito = () => {

  const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)
 

  return (
    <div>
      {carrito.map((prod)=> (
        <div key={prod.id}>
      <h2>{prod.nombre}</h2>
      <p>Unidades:{prod.cantidad} ({prod.precio}):$ {prod.precio* prod.cantidad}
      </p>

      </div>
      ))}
      {
        carrito.length > 0 ?
        <>
      <h3>Total:${calcularTotal()}</h3>
      <button onClick={vaciarCarrito}>Vaciar</button>
      </>:
      <h3>Carrito vacío: /</h3>
      }
      </div>
  )
}

export default Carrito