import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link} from 'react-router-dom'



const Carrito = () => {

  const { carrito, eliminarItem, calcularTotal, vaciarCarrito } = useContext(CartContext);

  
  return (
    <div className="lista">
      <div className='contenido'>
        {carrito.map((prod) => (
          <div className='producto carrito-cuadrado' key={prod.id}>
            <h2 className='nombre'>{prod.nombre}</h2>
            <img className='imagen' src={prod.imagen} />
            <p className='detalles'>Unidades:{prod.cantidad} (${prod.precio}):$ {prod.precio * prod.cantidad}
            </p>
            <button className='eliminar boton' onClick={() => { eliminarItem(prod) }}>Eliminar</button>

          </div>
        ))}
        {
          carrito.length > 0 ?
            <div className="pago carrito-cuadrado">

              <h3 className='total '>Total:${calcularTotal()}</h3>
              <button onClick={vaciarCarrito} className='boton vaciar' >Vaciar</button>
              <Link to="/finalizar-compra" className='boton finalizar'>Finalizar compra</Link>
              <img className='medios_pago' src="public/pago-seguro-argentina-1-1.webp" alt="medios" />

            </div> :
            <div className="carrito-cuadrado vacio">
              <h3>Carrito vacío: /</h3>
              <Link to="/productos" >
              <button className='boton'>Ir a productos</button>
              </Link>
            </div>
        }
      </div>
      
    </div>
    
  )
}

export default Carrito