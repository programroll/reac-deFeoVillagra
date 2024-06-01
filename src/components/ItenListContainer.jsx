import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import ListaLocal from './Tienda/ListaLocal';

const ItenListContainer = () => {
  let [productos,setProductos] =  useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(data); 
    },1000);
  })
}

  useEffect(() =>{
    pedirProductos()
    .then ((res) =>{
      setProductos(res);
    })
  }, [])

  return (
    <div className='itemContainer'>
      <h2>Productos</h2>
      <ListaLocal productos={productos}/>
    </div>
  )
}

export default ItenListContainer