import { useState } from 'react';
import './css/main.css'
import Header from './components/Header/Header'
import ItenListContainer from './components/ItenListContainer'
import ListaApi from './components/Tienda/ListaApi';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {

  const valorCarrito = 1;

  return (
    <BrowserRouter>
      <Header numeroCarrito={valorCarrito} />
      <Routes>
        <Route path="/" element={<ItenListContainer />}
          />
        <Route path="/listaApi" element={<ListaApi/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
