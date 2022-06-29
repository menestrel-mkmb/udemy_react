import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { endpoints } from "../../services/API";

import "./myList.css";

function MyList() {
  const [myList, setMyList] = useState([]);
  const localList = localStorage.getItem("@myList");

  useEffect(() => {
    if (localList) setMyList(JSON.parse(localList));
  }, []);

  useEffect(() => {
    if (localList) localStorage.setItem("@myList", JSON.stringify(myList));
  }, [myList]);

  function removeMovie(e, movieToRemove) {
    e.preventDefault();

    setMyList((myList) => {
      myList.filter((movie) => {
        return movie.id !== movieToRemove;
      });
    });
  }

  return (
    <main className="main__sect content__sect content">
      <section className="my-list__sect container flex parent__row">
        {myList.map((movie) => {
          return (
            <article
              key={movie.id}
              className="my-list__artc article my-list__item item list__item"
            >
              <Link className="my-list__link" to={"/movie/" + movie.id}>
                <h2 className="movie__title title movie__name">
                  {movie.title}
                </h2>
                <img
                  src={endpoints.images_url_base + movie.poster_path}
                  alt={"poster " + movie.title}
                  className="movie__banner banner img"
                />
                <button
                  className="remove__btn"
                  type="submit"
                  onClick={(e) => removeMovie(e, movie.id)}
                >
                  -
                </button>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default MyList;
