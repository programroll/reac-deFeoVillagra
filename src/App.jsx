import { useState } from 'react';
import './css/main.css'
import Header from './components/Header/Header'
import ItenListContainer from './components/ItenListContainer'
import ListaApi from './components/Tienda/ListaApi';
import Footer from './components/Footer/Footer';


function App() {

  const valorCarrito = 1;
  
  return (
    <>
      <div>
        <Header numeroCarrito={valorCarrito}/>
        <ItenListContainer/>
        <ListaApi></ListaApi>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
