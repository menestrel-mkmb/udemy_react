import { useState, useEffect } from "react";

function MyList() {
  let [myList, setMyList] = useState([]);
  let localList;

  useEffect(() => {
    localList = localStorage.getItem("@myList");
  }, []);

  useEffect(() => {
    localList.setItem("@myList", localList);
  }, myList);

  function removeMovie(e, movieToRemove) {
    e.preventDefault();

    setMyList((myList) => {
      myList.filter((movie) => {
        return movie.id != movieToRemove;
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
              <form action="" onSubmit={removeMovie(e, movie.id)}>
                <button type="submit"> - </button>
              </form>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default MyList;
