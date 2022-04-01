import './App.css';
import './MiPerfil.css';
import NavBarFinal from './Components/NavBarFinal';
import { Routes, Route } from 'react-router-dom';
import Resumenes from "./Resumenes";
import Creadores from './Creadores';
import MiPerfil from './MiPerfil';
import Premium from './ComponentsPremium/Premium';
import './ComponentsPremium/Premium.css'

function App() {
  return (
    <div className="App">

      <NavBarFinal/>

      <Routes>
        <Route path='/' element={<Resumenes/>}/>
        <Route path='/resumenes' element={<Resumenes/>}/>
        <Route path='/miPerfil' element={<MiPerfil/>}/>
        <Route path='/creadores' element={<Creadores/>}/>
        <Route path='/premium' element={<Premium/>}/>
      </Routes>

    </div>
  );
}

export default App;
