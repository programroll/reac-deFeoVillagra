import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categoria from "../data/categoria.json";
import ListaLocal from './Tienda/ListaLocal';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {datab} from "../firebase/data";

const ItemListContainer = () => {

  const {categoriaId} = useParams();

  let [productos,setProductos] =  useState([]);

  let [titulo, setTitulo] = useState ("productos");

  useEffect(() =>{

    const productosRef = collection(datab, "productos");
    
    getDocs(productosRef)
    .then((resp) =>{
      setProductos(resp.docs.map((doc) => {
        return {
        id: doc.id, ...doc.data()}
    })
  )
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