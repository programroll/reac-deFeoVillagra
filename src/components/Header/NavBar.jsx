import React from 'react'


const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='menu'>
        <ul className='nav-list'>
          <li className='nav-item'><a className='nav-a' href="#">Nosotros</a></li>
          <li className='nav-item'><a className='nav-a' href="#">Productos</a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
          </ul>
          </li>
        </ul>
      </div>
      <div>
        <img src="./Preview.webp" alt="logo" className='logo' />
      </div>
      <div className='menu'>
        <ul className='nav-list'>
          <li className='nav-item'><a className='nav-a' href="#">Experiencia Coffe</a></li>
          <li className='nav-item'><a className='nav-a' href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar