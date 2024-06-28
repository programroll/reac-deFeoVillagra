import { createContext,useEffect, useState } from "react"


export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {

        const agregado ={...item,cantidad};
        const carritoLleno = [...carrito];
        const estaAgregado = carritoLleno.find ((producto)=> producto.id === agregado.id);

        if(estaAgregado){
            estaAgregado.cantidad += cantidad;
        } else {
            carritoLleno.push(agregado);
        }

        setCarrito( carritoLleno);
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect (()=> {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    },[carrito]);

    return (
        <CartContext.Provider value={{ carrito , calcularCantidad, calcularTotal, vaciarCarrito,agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    )

}