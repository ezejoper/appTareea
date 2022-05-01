import React,{ useState } from "react";
import FormularioCampo from "./formulario";
import '../estilos/listadetareas.css'
import Tarea from "./tarea";

function ListaDeTareas(){
    const [tarea, setTarea]= useState([]);

    const agregarTarea = tareas => {
      console.log(tareas)
      if(tareas.texto.trim()){
        tareas.texto=tareas.texto.trim();
        const tareasActualizadas = [tareas,...tarea]
        setTarea(tareasActualizadas)
      }
    }
    const eliminarTarea = id =>{
      const tareasActualizadas = tarea.filter(tareas => tareas.id !== id);
      setTarea(tareasActualizadas)
    }
    const completarTarea= id=>{
      const tareasActualizadas = tarea.map(tareas=>{
        if(tareas.id === id){
          tareas.completada = !tareas.completada
        }
        return tareas
      })
      setTarea(tareasActualizadas);
    }
return(
    <>
    <FormularioCampo onSubmit={agregarTarea}/>
      <div className="tarea-lista-contenedor">
        {
          tarea.map((tareas)=>
          <Tarea
          key={tareas.id}
          id={tareas.id}
          texto={tareas.texto}
          completada={tareas.completada}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}/>
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;