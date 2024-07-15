import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {
  return (
    <div className='nosotros'>

      <div className="foto-cafe">
        <h1 className='encabezado'>NATIONAL <br /> COFFE</h1>
        <h3 className='encabezado'>Sabor Auténtico</h3>
        <Link to="/productos" >
          <button className='boton'>¡Descubrilo!</button>
        </Link>
      </div>
      <div className="experiencia carrito-cuadrado">
      <img src="./public/experiencia.webp" alt="experiencia"/>
      <div className="expe-histo">
        <p>Desde hace setenta años, la familia Silva ha transformado el panorama del café en Argentina con Nacional Coffee.
        Especializándose en las variedades únicas de Alta Montaña, Selva Misionera y Litoral, han llevado la calidad y la autenticidad a nuevas alturas, convirtiéndose en un nombre venerado tanto a nivel nacional como internacional. Hoy, su legado perdura, deleitando a los amantes del café en todo el mundo.</p>
        <Link to="/">
        <button className='boton'>Elegí tu experiencia</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Nosotros