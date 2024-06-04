import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categoria from "../data/categoria.json";
import ListaLocal from './Tienda/ListaLocal';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const {categoriaId} = useParams();

  let [productos,setProductos] =  useState([]);

  let [titulo, setTitulo] = useState ("productos");

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(data); 
    },1000);
  })
}

  useEffect(() =>{
    pedirProductos()
    .then ((res) =>{

      if (categoriaId){
        setTitulo(categoria.find((cat)=>cat.id === categoriaId).nombre);
        setProductos(res.filter((prod)=>prod.categoria.id === categoriaId));
      }else {
      setTitulo("productos");
      setProductos(res);
      }
    })

  }, [categoriaId])

  return (
    <div className='itemContainer'>
      <h2>{titulo}</h2>
      <ListaLocal productos={productos}/>
    </div>
  )
}

export default ItemListContainer