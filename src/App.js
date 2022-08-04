import './App.css';
import logo from './imagen/freecodecamp-logo.png'
import FormularioCampo from './componente/formulario';
import ListaDeTareas from './componente/listadetareas';

function App() {
  return (
    <div className="aplicacion-tarea">
      
      <div className='tarea-lista'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
