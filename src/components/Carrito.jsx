import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

  const {carrito, eliminarItem, calcularTotal, vaciarCarrito} = useContext(CartContext);
 

  return (
    <div className='card'>
      {carrito.map((prod)=> (
        <div key={prod.id}>
      <h2>{prod.nombre}</h2>
      <img src ={prod.imagen}/>
      <p>Unidades:{prod.cantidad} (${prod.precio}):$ {prod.precio* prod.cantidad}
      </p>
      <button onClick={() =>{ eliminarItem (prod)}}>eliminar</button>

      </div>
      ))}
      {
        carrito.length > 0 ?
        <>
      <h3>Total:${calcularTotal()}</h3>
      <button onClick={vaciarCarrito}>Vaciar</button>
      <Link to="/finalizar-compra">Finalizar compra</Link>
      </>:
      <h3>Carrito vacío: /</h3>
      }
      </div>
  )
}

export default Carrito