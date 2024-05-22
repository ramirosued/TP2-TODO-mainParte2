import React from "react";

function Titulo({setTareas,tareas}) {
    const crearTarea = (e) => {
        e.preventDefault();
        setTareas([
            ...tareas,
            {
                id: Date.now(),
                texto: e.target.texto.value,
            }
        ])
        e.target.reset();
    }
    return (
        <form name="form" onSubmit={crearTarea}>
            <label> Agregar tarea: 
            <input type="text" name="texto" placeholder="Escribe tu tarea aquí" />
            </label>
        </form>
    )
}

export default Titulo