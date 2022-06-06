import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const endpoints = {
  movies_now_playing: "movie/now_playing",
};

export const API_PARAMS = {
  KEY: "39403419bf5b64b3fca4a42733f1507a",
  LANG: "pt-BR",
  PAGE: "1",
};

// ------------------------------- V3 -------------------------------

//URL BASE DA API
// https://api.themoviedb.org/3/

//API KEY prefix
// ?api_key=

//API KEY sufix OPTIONAL
// &language=pt-BR

//API KEY
// 39403419bf5b64b3fca4a42733f1507a

//EXAMPLE
// https://api.themoviedb.org/3/movie/550?api_key=39403419bf5b64b3fca4a42733f1507a

// export default api;
