import React, {useState, useEffect} from 'react';
import './App.css';

import api from './services/api';

function App() {
  const [ notes, setNotes ]=useState([]);
  const [ note, setNote ] = useState({ title:"", content: ""});
  const { title , content } = note;

  useEffect(()=>{
    async function loadNotes(){
      const response = await api.get('/notes');
      console.log(response);
      setNotes(response);
    }
    loadNotes();
  },[]);

  async function handleSubmit(e){
    e.preventDefault();
    // const response = api.post('/',data);
    if(content){
      console.log(content);
      // setList([note ,...list ])
      // setNote({title:"", content:""})
    }
  }

  function handleChanged(e){
    note[e.target.name] = e.target.value
    setNote({ ...note });
  }

  return (
    <div className="App">
      <header/>
      <div className="form-div" >
        <div className="mostrar">
          <form onSubmit={handleSubmit}>
            <input className="input top" name="title" value={title} placeholder="Titulo" autocomplete="off" onChange={handleChanged}/>
            <input className="input" name="content" value={content} placeholder="Adicionar ..." autocomplete="off" onChange={handleChanged}/>
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
