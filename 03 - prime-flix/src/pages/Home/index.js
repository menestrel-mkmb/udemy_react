import { useEffect, useState } from "react";
import { API_PARAMS, api, endpoints } from "../../services/API";

import "./styles.css";

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
        {filmes.map((value) => {
          return (
            <article key={value.id} className="movie item movie__artc article">
              <h2 className="movie__title"> {value.title} </h2>
              <img
                src={endpoints.images_url_base + value.poster_path}
                alt=""
                className="banner__movie banner img"
              />
              <span className="desc text desc__movie overview">
                {value.overview}
              </span>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
