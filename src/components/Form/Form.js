import React from "react";

import './Form.css';


function Form({setTareas,tareas}) {
    const crearTarea = (e) => {
        e.preventDefault();
        const textoTarea = e.target.texto.value.trim(); // Eliminar espacios en blanco al principio y al final
        if(textoTarea.length === 0 || textoTarea.length == null)
        {
            window.confirm('No ingresaste ninguna tarea')
            
        } else{
            const confirmBoton = window.confirm('¿Deseas agregar la tarea?')
            if(confirmBoton)
            {
            setTareas([
                ...tareas,
                {
                    id: Date.now(),
                    texto: e.target.texto.value,
                    tiempo:0,
                    completada: true,
                }
                    ])
            e.target.reset();
            }
        }

        
    }
    return (
        <form className="form" onSubmit={crearTarea}>
            <label> 
            <input type="text" name="texto" className="texto" placeholder="Escribe tu tarea aquí" />
            <button className="agregar" type="submit">agregar</button>
            </label>
        </form>
    )
}

export default Form