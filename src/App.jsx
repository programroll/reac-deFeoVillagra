import './css/main.css'
import { Header } from './components/Header/Header'
import ItenListContainer from './components/ItenListContainer'


function App() {

  const contenido = "Nuestro café";
  return (
    <>
      <div>
        <Header/>
        <ItenListContainer mensaje={contenido}/>
      </div>
    </>
  )
}

export default App
