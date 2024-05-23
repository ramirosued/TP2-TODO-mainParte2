import React from "react";

function Form({setTareas,tareas}) {
    const crearTarea = (e) => {
        e.preventDefault();
        const confirmBoton = window.confirm('¿Deseas agregar la cita?')
        if(confirmBoton){

   
        setTareas([
            ...tareas,
            {
                id: Date.now(),
                texto: e.target.texto.value,
            }
        ])
        e.target.reset();
    }
    }
    return (
        <form name="form" onSubmit={crearTarea}>
            <label> Agregar tarea: 
            <input type="text" name="texto" placeholder="Escribe tu tarea aquí" />
            <input type="submit"></input>
            </label>
        </form>
    )
}

export default Form