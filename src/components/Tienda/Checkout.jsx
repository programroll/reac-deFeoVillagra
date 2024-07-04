import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { datab } from "../../firebase/data";


const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const venta = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const ventasRef = collection(datab, "ventas");
        addDoc(ventasRef, venta)
        .then((doc) => {
            setDocId(doc.id);
            vaciarCarrito();
        });
    }

    if(docId){
        return(
            <>
            <h2>Gracias por tu compra :)!</h2>
            <p>Podes hacer el seguimiento con este codigo: {docId}</p>
            </>
        )
    }

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit(comprar)}className='cont-formulario'>
                <h3>Ingrese sus datos para finalizar su compra</h3>
                <div className='form-completo'>
                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                </div>
                <div className='form-completo'>
                <label>Mail</label>
                <input type="email" placeholder="Ingrese su e-mail"{...register("email")} />
                </div>
                <button type='submit' className='boton'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout