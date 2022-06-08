import { useState, useEffect } from "react";

function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const localList = localStorage.getItem("@myList");

    if (localList) setMyList(JSON.parse(localList));
  }, []);

  useEffect(() => {
    localStorage.setItem("@myList", JSON.stringify(myList));
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
      <section className="my-list__sect container flex parent_col">
        {myList.map((movie) => {
          return (
            <article
              key={movie.id}
              className="movie__artc article movie__item item list__item"
            >
              <h2 className="movie__title title movie__name">{movie.title}</h2>

              <button type="submit" onClick={(e) => removeMovie(e, movie.id)}>
                -
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default MyList;
