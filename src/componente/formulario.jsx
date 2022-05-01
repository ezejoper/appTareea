import React, { useState } from "react";
import '../estilos/formulario.css'
import { v4 as uuidv4 } from 'uuid'

function FormularioCampo(props){
    const [input, setInput] = useState('')

    const manejarCambio= e =>{
        setInput(e.target.value); //esto nos permite extraer del campo de texto lo que ingreso el usuario
        
    }

    const manejarEnvio=e =>{
        e.preventDefault(); //permite que no se vuelva a cargar la aplicacion cuando se envia el formulario
        
        const tareaNueva ={
            id:uuidv4(),
            texto: input,
            completada: false
            
        }
        props.onSubmit(tareaNueva);
    }
    return(
        //onSubmit indica el evento cuando se envia el formulario
        <form className="tarea-formulario" 
        onSubmit={manejarEnvio}>   
            <input 
            type="text" 
            className="tarea-input"
            placeholder="Escribir tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="boton-tarea"
            >Agregar tarea</button>
        </form>
    )
}
export default FormularioCampo