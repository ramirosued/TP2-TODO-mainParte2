import React from "react"
import './Tarea.css';

function Tarea({tareas, setTareas,id,texto}){
    
    const eliminarTarea = (e) => {
    const confirmar =window.confirm('¿Estas seguro que deseas eliminar la tarea?')
    if(confirmar){
        setTareas(tareas.filter(f=> f.id !== id))
    }
    }
    return (
        <div className='tarjeta'>
            
            <li>{texto}<button onClick={eliminarTarea} type="button">ELIMINAR x</button></li> 
                </div>
        )
}



        export default Tarea