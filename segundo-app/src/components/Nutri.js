import { useState, useEffect } from "react";

const API_URL = "https://sujeitoprogramador.com/rn-api/?api=posts";

function Nutri() {
  const [nutriNl, setNutriNl] = useState([]);

  useEffect(() => {
    function loadApi() {
      fetch(API_URL)
        .then((response) => response.json())
        .then((json) => setNutriNl(json));
    }

    loadApi();
  }, [nutriNl]);

  return (
    <div className="App parent__row">
      <header className="header__sect sect expanded">
        <h1 className="page__title title">Nutri NewsLetter | React</h1>
      </header>
      <main className="main__sect content sect ">
        {nutriNl.map((newl) => {
          return (
            <article
              key={newl.id}
              className="parent__row item new__item new__artc"
            >
              <a href="#">
                <h2 className="title new__title title-item">{newl.titulo}</h2>
                <div className="parent__col">
                  <img src={newl.capa} className="new__img img thumb"></img>
                  <p className="sub-title new__sub-title sub-title-item">
                    {newl.subtitulo}
                  </p>
                </div>
              </a>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default Nutri;
