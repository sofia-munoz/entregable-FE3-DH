import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import {useState} from 'react'

function App() {
  const [ cantidad, setCantidad ] = useState(0)
  function aumentarCantidad() {
    setCantidad(cantidad+1);
  }
  return (
    <div className="App">
      <Cabecera cantidad={cantidad}/>
      <Listado aumentarCantidad={aumentarCantidad}/>
    </div>
  );
}

export default App;
