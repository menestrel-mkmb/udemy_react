import { useState } from 'react';

//custom components
import {Welcome, ShowAge, ShowEmail} from './components/Welcome.js';


function App() {
  
  //individuals var
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  //object
  const [user, setUser] = useState({});

  function handleRegister(event){
    event.preventDefault();
    
    setUser({
      name: name, email: email, age: age,
    });
  }
  
  return (
    <div>
      <form action="">
        <lab className="name__lbl">Nome</lab>
        <input type="text" name="" className="name__inp" typeof="text" value = { name } onChange = { (e) => setName(e.target.value)}/><br/>
      
        <lab className="email__lbl">Email</lab>
        <input type="text" name="" className="email__inp" typeof="text" value = { email } onChange = { (e) => setEmail(e.target.value)}/><br/>
      
        <lab className="age__lbl">Idade</lab>
        <input type="text" name="" className="age__inp" typeof="text" value = { age } onChange = { (e) => setAge(e.target.value)}/><br/>
      
        <button onClick={ handleRegister }>Enviar</button>
      </form>

      <br />
      <div className="info__div hidden">
        <Welcome name={user.name}/><br/>
        <ShowEmail email={user.email}/><br/>
        <ShowAge age={user.age}/><br/>
      </div>
    </div>
  );
}

export default App;