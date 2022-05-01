import './App.css';
import logo from './imagen/freecodecamp-logo.png'
import FormularioCampo from './componente/formulario';
import { combineReducers } from 'redux';
import ListaDeTareas from './componente/listadetareas';

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo' />
      </div>
      <div className='tarea-lista'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
