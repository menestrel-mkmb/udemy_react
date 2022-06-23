import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_PARAMS, api, endpoints } from "../../services/API";

function Movies() {
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      let response = await api.get(`${endpoints.view_movie}${id}`, {
        params: {
          api_key: API_PARAMS.KEY,
          language: API_PARAMS.LANG,
        },
      });
      console.log(JSON.stringify(response));
    }

    loadFilme();
  }, []);
  return (
    <main>
      <section className="movie__sect"></section>
    </main>
  );
}

export default Movies;
