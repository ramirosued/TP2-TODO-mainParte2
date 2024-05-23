import React,{useState} from "react"

import './Tarea.css';

function Tarea({tareas, setTareas,id,texto}){
    const[tachado, setTachado]=useState(false)
    const eliminarTarea = (e) => {
    const confirmar =window.confirm('¿Estas seguro que deseas eliminar la tarea?')
    if(confirmar){
        setTareas(tareas.filter(f=> f.id !== id))
    }

    }
    let tacharTarea=(e)=>{
    setTachado(!tachado) 
   }

    return (
        <div className={tachado === false ? 'rojo' : 'verde'  }>
            <li onClick={tacharTarea}>{texto}<button onClick={eliminarTarea} type="button">ELIMINAR x</button></li> 
                </div>
        )
}

export default Tarea