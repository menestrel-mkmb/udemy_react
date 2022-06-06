import { useEffect, useState } from "react";
import { API_PARAMS, api, endpoints } from "../../services/API";

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
    }

    loadFilmes();
  }, []);

  return (
    <main>
      <section></section>
    </main>
  );
}

export default Home;
