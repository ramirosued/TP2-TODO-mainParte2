import { useState } from 'react';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import Tarea from './components/Tarea/Tarea';
function App() {
  const[tareas,setTareas] = useState([])
  return (
    <>
    <Titulo setTareas={setTareas} tareas={tareas}/>
    <Tarea >
      {
      tareas.map(t => <tareas tareas={tareas} setTareas={setTareas} id={t.id} texto={t.texto}/>)
      }
    </Tarea>
</>
  );
}

export default App;
