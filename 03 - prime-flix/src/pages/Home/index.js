import { useEffect, useState } from "react";
import { API_PARAMS, api, endpoints } from "../../services/API";
import { Link } from "react-router-dom";

import "./../../reset.css";
import "./home.css";
import "./base.css";

const index_param = {
  api_key: API_PARAMS.KEY,
  language: API_PARAMS.LANG,
  page: API_PARAMS.PAGE,
};

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(endpoints.movies_now_playing, {
        params: index_param,
      });

      console.log(response);
      setFilmes(response.data.results);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading__div">
        <h2 className="title loading__title">Loading...</h2>
      </div>
    );
  }

  return (
    <main className="main__sect content parent_row">
      <section className="movies__sect now-playing__list list">
        {filmes.map((movie) => {
          return (
            <article key={movie.id} className="movie item movie__artc article">
              <h2 className="movie__title title"> {movie.title} </h2>
              <img
                src={endpoints.images_url_base + movie.poster_path}
                alt={"poster " + movie.title}
                className="banner__movie banner img"
              />
              <Link className="movie__link" to={"/movie/" + movie.id}>
                Acessar
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
