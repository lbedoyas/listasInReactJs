import logo from './logo.svg';
import './App.css';
import Lista from './components/listas';
import ListaObjetos from './components/listaObjetos';
import IterandoPropiedades from './components/IterandoPropiedades';
import PropsKeysListas from './components/PropsKeysListas';
import { IteracionComponentes } from './components/IteracionComponentes';
import { PasarDatosListas } from './components/PasarDatosListas';

function App() {
  return (
    <div className="App">
      {/* <Lista />
      <ListaObjetos /> */}
      {/* <IterandoPropiedades /> */}
      {/* <PropsKeysListas />     */}
      <IteracionComponentes />  
      <PasarDatosListas />

    </div>
  );
}

export default App;
