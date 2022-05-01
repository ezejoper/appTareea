import React from "react";
import '../estilos/tarea.css'
import {AiOutlineCheckSquare} from "react-icons/ai";

function Tarea({  id ,texto , completada, completarTarea, eliminarTarea }){
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
      className="tarea-texto"
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono"
      onClick={()=> eliminarTarea(id)}>
      <AiOutlineCheckSquare className="tarea-icono"/>
      </div>
    </div>
  )
}

export default Tarea