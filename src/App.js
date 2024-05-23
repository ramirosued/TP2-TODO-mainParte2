import { useState } from 'react';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import Form from './components/Form/Form';
import Tarea from './components/Tarea/Tarea';
import Botones from './components/Botones/Botones';
import Subtitulo from './components/Subtitulo/Subtitulo';
function App() {
  const[tareas, setTareas] = useState([])
  return (
    <>
    <Titulo/>
    <Form tareas={tareas} setTareas={setTareas} id='agregar'></Form>
<ul id='tareas'>
  {
    tareas.map(t => <Tarea tareas={tareas} setTareas={setTareas} id={t.id} texto={t.texto}/>)
  }
</ul>
<Subtitulo texto={'Tarea mas rapida realizada'}></Subtitulo>
{
      tareas.map(t => <Tarea tareas={tareas} setTareas={setTareas} id={t.id} texto={t.texto}/>)

}
</>
  );
}

export default App;
