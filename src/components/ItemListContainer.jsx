import React, { useEffect, useState } from 'react';
import ListaLocal from './Tienda/ListaLocal';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { datab } from "../firebase/data";

const ItemListContainer = () => {

  const { categoriaId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");

  useEffect(() => {

    const productosRef = collection(datab, "productos");
    const q = categoriaId ? query(productosRef, where("categoria.id", "==", categoriaId)) : productosRef;

    const categoriasRef = collection(datab, "categoria");
    let catQuery = categoriaId && query(categoriasRef, where("id", "==", categoriaId));

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id, ...doc.data()
            }
          })
        )
      })

    if (catQuery) {
      getDocs(catQuery)
        .then((resp) => {
          setTitulo(resp.docs[0].data().nombre);
        })
    } else {
      setTitulo("Productos");
    }

  }, [categoriaId]);

  return (
    <div className='itemContainer'>
      <h2>{titulo}</h2>
      <ListaLocal productos={productos} />
    </div>
  )
}

export default ItemListContainer