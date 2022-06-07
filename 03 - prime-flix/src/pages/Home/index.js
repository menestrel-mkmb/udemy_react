import { useEffect, useState } from "react";
import { API_PARAMS, api, endpoints } from "../../services/API";
import { Link } from "react-router-dom";

import "./../../reset.css";
import "./home.css";

const index_param = {
  api_key: API_PARAMS.KEY,
  language: API_PARAMS.LANG,
  page: API_PARAMS.PAGE,
};

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(endpoints.movies_now_playing, {
        params: index_param,
      });

      console.log(response);
      setFilmes(response.data.results);
    }
    loadFilmes();
  }, []);

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
              <span className="desc text desc__movie overview">
                {movie.overview}
              </span>
              <Link to={"/movie/" + movie.id}>Acessar</Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
