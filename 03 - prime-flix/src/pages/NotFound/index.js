import "./notFound.css";
function NotFound() {
  return (
    <main>
      <section className="error__sect not-found__sect flex container parent__col center wrap">
        <h2 className="title error__title not-found__title">
          ERROR 404 NOT FOUND
        </h2>
        <span className="text desc error__text error__desc not-found__text">
          Desculpe! Mas não encontramos a página requisitada
        </span>
      </section>
    </main>
  );
}

export default NotFound;
