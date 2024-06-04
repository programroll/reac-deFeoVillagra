import React, { useEffect, useState } from 'react'
import data from '/src/data/productos.json';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        setItem(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId]
    )

    return (
        <div>{item ? <ItemDetail key={item.id} item={item} /> : "Cargando.."}
        </div>
    )
}

export default ItemDetailContainer