
import React from "react";

function Botones({ tareas }) {
    // Función para encontrar la tarea que tomó menos tiempo
    const encontrarTareaMasRapida = () => {
        // Filtra las tareas completadas que tienen tiempo registrado
        const tareasCompletadasConTiempo = tareas.filter(tarea => tarea.tiempo && tarea.completada);

        if (tareasCompletadasConTiempo.length === 0) {
            return null; // Si no hay tareas completadas con tiempo registrado, devolvemos null
        }

        // Ordenamos las tareas completadas por tiempo y tomamos la primera (la más rápida)
        const tareaMasRapida = tareasCompletadasConTiempo.sort((a, b) => a.tiempo - b.tiempo)[0];
        return tareaMasRapida;
    };

    const tareaMasRapida = encontrarTareaMasRapida();

    const mostrarTareaMasRapida = () => {
        if (tareaMasRapida) {
            <h1>La tarea más rápida realizada es: ${tareaMasRapida.texto}</h1>;
        } else {
            alert("No se ha completado ninguna tarea aún.");
        }
    };

    return (
        <div>
            <button onClick={mostrarTareaMasRapida}>Tarea más rápida realizada</button>
        </div>
    );
}

export default Botones;