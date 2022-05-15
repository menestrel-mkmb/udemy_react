import { useState } from 'react';

//custom components
import Welcome from './components/Welcome.js';


function App() {
  const [nome, setNome] = useState('Michael');

  function changeName(newName){
    setNome(newName);
  }

  return (
    <div>
      <h1>Este é meu projeto</h1>
      <h2>Olá: {nome}</h2>
      <button onClick={ () => changeName('Teste') }>
        Mudar nome
      </button>
    </div>
  );
}

export default App;