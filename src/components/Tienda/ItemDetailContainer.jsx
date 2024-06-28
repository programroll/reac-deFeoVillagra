import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { datab } from "../../firebase/data.js";


const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        const docRef = doc(datab, "productos", itemId);
        getDoc(docRef)
            .then(res => {
                setItem({ ...res.data(), id: res.id });
            })
    }, [itemId]);

    return (
        <div>{item ? <ItemDetail key={item.id} item={item} /> : "Cargando.."}
        </div>
    )
}

export default ItemDetailContainer