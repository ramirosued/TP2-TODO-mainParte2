import React,{useState} from "react"

import './Tarea.css';

function Tarea({tareas, setTareas,id,texto}){
    const[tachado, setTachado]=useState(true)
    const eliminarTarea = (e) => {
    const confirmar =window.confirm('¿Estas seguro que deseas eliminar la tarea?')
    if(confirmar){
        setTareas(tareas.filter(f=> f.id !== id))
    }
    }
    let tiempoTomado
    let tacharTarea = (e) => {
        setTachado(!tachado);
        if(tachado===true){
            tiempoTomado = Date.now() - id;
            setTareas(tareas.map(t => t.id === id ? { ...t, tiempo: tiempoTomado } : t)); // Actualiza el estado de las tareas con el nuevo tiempo
        }else{
            tiempoTomado=0; 
            setTareas(tareas.map(t => t.id === id ? { ...t, tiempo: 0 } : t)); // Actualiza el estado de las tareas con el nuevo tiempo

        }
   
    }

    return (
        <div className="div">
            <li className={tachado === false ? 'rojo' : 'verde'} onClick={tacharTarea}>{texto}</li> 
            <button onClick={eliminarTarea} type="button">ELIMINAR x</button>

                </div>
        )
}

export default Tarea