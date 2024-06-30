import './css/main.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/Tienda/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './components/context/CartContext';
import Checkout from './components/Tienda/Checkout';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Nosotros />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/finalizar-compra" element={<Checkout/>} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
