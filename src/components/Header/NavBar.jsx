import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { datab } from "../../firebase/data";
import CartWidget from './CartWidget';


const NavBar = () => {

  let [categorias, setCategorias] = useState([]);

  useEffect(() => {

    const categoriasRef = collection(datab, "categoria");

    getDocs(categoriasRef)
      .then((res) => {
        setCategorias(res.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        }));
      })
  }, [])

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
                categorias.map((categoria) => {
                  return (
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
          <img src="./logo.webp" alt="logo" className='logo' />
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
        <CartWidget/>
      </div>
    </nav >
  )
}

export default NavBar