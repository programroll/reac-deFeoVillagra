import { createContext, useState } from "react"


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const agregado ={...item,cantidad};
        const carritoLleno = [...carrito];
        const estaAgregado = carritoLleno.find ((producto)=> producto.id ===agregado.id);

        if(estaAgregado){
            estaAgregado.cantidad += cantidad;
        } else {
            carritoLleno.push(agregado);
        }

        setCarrito([carritoLleno]);
    }

    const calcularCantidad = () => {
        return carrito.length;
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{ carrito , calcularCantidad, calcularTotal, vaciarCarrito,agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    )

}