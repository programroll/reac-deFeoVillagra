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
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su e-mail"{...register("email")} />
                <button type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout