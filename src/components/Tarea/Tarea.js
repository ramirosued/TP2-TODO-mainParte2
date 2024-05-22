import React from "react"

function Tarea(tareas, setTareas,id,texto){
    const eliminarTarea = (e) => {

    }
    return (
        <div className='tarjeta'>
                    <ul>
                    <li>{texto}</li>
                    </ul>
                    <button onClick={eliminarTarea} type="button">ELIMINAR x</button>
                </div>
                )
}



        export default Tarea