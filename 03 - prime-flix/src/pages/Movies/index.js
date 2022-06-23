import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_PARAMS, api, endpoints } from "../../services/API";

import "./movie.css";

function Movies() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`${endpoints.view_movie}${id}`, {
          params: {
            api_key: API_PARAMS.KEY,
            language: API_PARAMS.LANG,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) {
            setMovie(response.data);
            setLoading(false);
          }
        })
        .catch(() => {
          console.log("FILME NÃO ENCONTRADO");
        });
    }

    loadFilme();
  }, []);

  if (loading) {
    return (
      <section className="loading__sect">
        <h1>Loading</h1>
      </section>
    );
  }

  return (
    <main className="movie-info__main">
      <article className="movie__artc artc">
        <img
          src={endpoints.images_url_base + movie.backdrop_path}
          alt={`Pôster de ${movie.title}`}
          className="movie-info__backdrop banner img"
        />
        <h2 className="title movie-info__title">{movie.title}</h2>
        <div className="desc__div flex parent__row wrap">
          <img
            src={endpoints.images_url_base + movie.poster_path}
            alt={`Pôster de ${movie.title}`}
            className="movie-info__banner"
          />
          <div className="text__div flex parent__col wrap">
            <h3 className="sub-title original__title">
              {movie.original_title}
            </h3>
            <span className="movie__span release-date__span">
              {movie.release_date}
            </span>
            <span className="movie__span rating__span">
              {movie.vote_average}
            </span>
            <h3 className="sub-title sinopse__title">Sinopse</h3>
            <span className="movie__span sinopse">{movie.overview}</span>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Movies;
