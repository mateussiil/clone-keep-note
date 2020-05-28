import React, {useState, useEffect} from 'react';
import './App.css';

import api from './services/api';

function App() {
  const [ notes, setNotes ] = useState([]);
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    if(content){
      setNotes(notes.concat({title, content}))
    }
  }

  return (
    <div className="App">
        <div className="form-div" >
        <div className="mostrar">
          <form onSubmit={handleSubmit}>
            <input className="input top" name="title" value={title} placeholder="Titulo" autocomplete="off" onChange={e => setTitle(e.target.value)}/>
            <input className="input" name="content" value={content} placeholder="Adicionar ..." autocomplete="off" onChange={e => setContent(e.target.value)}/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div>
        <ul className="list-ul">
          {notes.map(nota => (
            <div className="item">
              <li className="title">{nota.title}</li>
              <li className="content">{nota.content}</li>
            </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
