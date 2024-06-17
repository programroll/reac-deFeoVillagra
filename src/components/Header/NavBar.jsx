import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import categoria from "../../data/categoria.json";


const NavBar = () => {

  return (
    <nav className='navbar'>
      <div className='menu'>
        <ul className='nav-list'>
          <li>
            <NavLink to="/" activeclassname="active" className='nav-a'>Nosotros</NavLink>
          </li>
          <li className='opciones-container'>
            <NavLink className='nav-a' to="/productos">Productos</NavLink>
            <ul className='opciones'>
              {
                categoria.map((categoria) => {
                  return(
                  <li key={categoria.id}>
                    <NavLink to={`/categoria/${categoria.id}`} className="text-productos">
                      {categoria.nombre}
                    </NavLink>
                  </li>)
                })
              }
            </ul>
          </li>
        </ul>
      </div >
      <div>
        <Link to="/">
          <img src="./Preview.webp" alt="logo" className='logo' />
        </Link>
      </div>
      <div className='menu'>
        <ul className='nav-list'>
          <li>
            <Link className='nav-a' to="#">Experiencia Coffe</Link>
          </li>
          <li>
            <Link className='nav-a' to="#">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default NavBar