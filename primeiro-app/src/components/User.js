import { useState } from "react";

//custom components
import { Welcome, ShowAge, ShowEmail } from "./Welcome.js";

function User() {
  //individuals var
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  //object
  const [user, setUser] = useState({});

  function handleRegister(event) {
    event.preventDefault();

    setUser({
      name: name,
      email: email,
      age: age,
    });
  }

  return (
    <div>
      <form action="">
        <h2 className="forms__title sign-up__user title">
          Cadastrando usuário
        </h2>

        <lab className="name__lbl">Nome</lab>
        <input
          type="text"
          name=""
          placeholder="Digite seu nome"
          className="name__inp"
          typeof="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <lab className="email__lbl">Email</lab>
        <input
          type="text"
          name=""
          placeholder="Digite seu e-mail"
          className="email__inp"
          typeof="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <lab className="age__lbl">Idade</lab>
        <input
          type="text"
          name=""
          placeholder="Digite sua idade"
          className="age__inp"
          typeof="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <button onClick={handleRegister}>Enviar</button>
      </form>
      <div className="info__div hidden">
        <br />
        <Welcome name={user.name} />
        <br />
        <ShowEmail email={user.email} />
        <br />
        <ShowAge age={user.age} />
        <br />
      </div>
    </div>
  );
}

export default User;
