import React, {useState} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [note, setNote] = useState({ title:"",description: ""});
  const { title , description } = note;

  function handleSubmit(e){
    e.preventDefault();
    if(description){
      setList([note ,...list ])
      setNote({title:"", description:""})
    }
  }

  function handleChanged(e){
    note[e.target.name] = e.target.value
    setNote({ ...note });
  }

  return (
    <div className="App">
      <div className="form-div" >
        <div className="mostrar">
          <form onSubmit={handleSubmit}>
            <input className="input top" name="title" value={title} placeholder="Titulo" autocomplete="off" onChange={handleChanged}/>
            <input className="input" name="description" value={description} placeholder="Adicionar ..." autocomplete="off" onChange={handleChanged}/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div>
        <ul className="list-ul">
          {list.map(nota => (
            <div className="item">
              <li className="title">{nota.title}</li>
              <li className="description">{nota.description}</li>
            </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
