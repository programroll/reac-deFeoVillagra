import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


const ItemCount = ({item}) => {

    const {agregarAlCarrito} = useContext(CartContext);


    const[cantidad, setCantidad] = useState(1);

    const restar =()=>{
        cantidad > 1 && setCantidad(cantidad-1);
    }

    const sumar =()=>{
        cantidad < item.stock && setCantidad(cantidad+1);
    }


    return (
        <div className='item-count'>
            <div className="count">
                <button onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className="agregar" onClick={()=>agregarAlCarrito(item,cantidad)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

