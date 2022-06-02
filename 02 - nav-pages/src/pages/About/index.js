import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default About;
