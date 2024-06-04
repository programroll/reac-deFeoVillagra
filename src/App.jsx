import { useState } from 'react';
import './css/main.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer'
{/*import ListaApi from './components/Tienda/ApiLista';*/}
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/Tienda/ItemDetailContainer';
{/*import ApiLista from './components/Tienda/ApiLista';
<Route path="/listaApi" element={<ListaApi/>}/>
<Route path="/internacional" element={<ApiLista/>}/>
*/}


function App() {

  const valorCarrito = 1;

  return (
    <BrowserRouter>
      <Header numeroCarrito={valorCarrito} />
      <Routes>
        <Route path="/" element={<Nosotros/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        
        <Route path="/*" element={<NotFound/>}/>
        
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
